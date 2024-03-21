import React, { useEffect, useState } from 'react'
import { LoadingManager } from 'three'
import { SoundAudioLevelControls } from './data/types'
import { useDracoLoader } from '../libs/useDracoLoader'
import { useGPU } from '../3d/lib/useGPU'

const TOTAL_BYTES_SIZE_JOI = 4909672
const TOTAL_BYTES_SIZE_MAP = 3763556

const PreloaderBar = ({ progress, modelName }: { progress: number; modelName: string }) => (
  <div className='w-[30em] hide'>
    <div className='relative h-auto w-full border-teal border py-[4px] px-[4px] bg-black flex justify-center items-center justify-items-center m-1'>
      <div
        className='relative h-[4px] w-full bg-teal origin-left teal-blur'
        style={{
          transform: `scaleX(${progress / 100})`,
          transformOrigin: 'left',
          transition: 'transform 0.25s ease-out'
        }}
      />
    </div>
    <p className='text-teal-blur font-rajdhani font-semibold text-center uppercase'>LOADING {modelName}</p>
  </div>
)

const EnterButton = ({
  setIsPreLoaderFinished,
  soundAudioLevelControls
}: {
  setIsPreLoaderFinished: (value: boolean) => void
  soundAudioLevelControls: SoundAudioLevelControls
}) => (
  <button
    className='pointer-events-auto'
    onClick={() => {
      soundAudioLevelControls.setMuteAll(false)
      soundAudioLevelControls.setMuteMusic(false)
      soundAudioLevelControls.setMuteRain(false)
      soundAudioLevelControls.setMuteSFX(false)
      soundAudioLevelControls.setMuteJOI(false)
      soundAudioLevelControls.setMuteRain(false)
      setIsPreLoaderFinished(true)
    }}
  >
    ENTER
  </button>
)
const Preloader = ({
  setIsPreLoaderFinished,
  soundAudioLevelControls
}: {
  setIsPreLoaderFinished: (value: boolean) => void
  soundAudioLevelControls: SoundAudioLevelControls
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentModelName, setCurrentModelName] = useState('')

  const manager = new LoadingManager()
  const loader = useDracoLoader(manager)

  // GPU Hook
  const { lowGPU } = useGPU()

  const loadModel = async (modelUrl: string, totalBytes: number, modelName: string, expectedLowGPU: boolean) => {
    if (lowGPU !== expectedLowGPU) return // Don't load the model if lowGPU has changed

    setCurrentModelName(modelName)
    console.log('Start loading model:', modelUrl) // Log the model URL
    const response = await fetch(modelUrl)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    if (!response.body) {
      throw new Error('Response body is missing')
    }

    const reader = response.body.getReader()
    let bytesReceived = 0
    const chunks = []

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      chunks.push(value)
      bytesReceived += value.length
      const progress = (bytesReceived / totalBytes) * 100
      setProgress(progress)
    }

    const arrayBuffer = new Uint8Array(bytesReceived)
    let position = 0
    for (const chunk of chunks) {
      arrayBuffer.set(chunk, position)
      position += chunk.length
    }

    // Now you can use the GLTFLoader to parse the model data
    const blob = new Blob([arrayBuffer.buffer])
    const blobUrl = URL.createObjectURL(blob)
    loader.load(blobUrl, gltf => {
      console.log('Model loaded')
      // Handle the loaded model here
    })

    console.log('Loading completed')
  }

  const [isJOILoaded, setIsJOILoaded] = useState(false)

  useEffect(() => {
    if (lowGPU === null || isJOILoaded) return // Don't run the effect if lowGPU is null or JOI model is already loaded

    const loadModels = async () => {
      const isLowGPU = lowGPU // Store the value of lowGPU
      console.log('lowGPU:', isLowGPU)
      await loadModel('/glb/JOI.glb', TOTAL_BYTES_SIZE_JOI, 'JOI MODEL', isLowGPU)
      setIsJOILoaded(true) // Set isJOILoaded to true after JOI model has loaded
      setProgress(0) // Reset progress
      const secondModelUrl = isLowGPU ? '/glb/EvokeLabsMap-LowPoly.glb' : '/glb/EvokeLabsMap.glb'
      await loadModel(secondModelUrl, TOTAL_BYTES_SIZE_MAP, 'MAP MODEL', isLowGPU)
    }

    loadModels().then(() => setIsLoading(false)) // Set isLoading to false after both models have loaded
  }, [lowGPU, isJOILoaded])

  return (
    <div className='w-full h-full absolute top-0 left-0 z-[10000000000000000] pointer-events-none'>
      <div className='flex flex-col h-full last:items-center justify-center'>
        {isLoading && <PreloaderBar progress={progress} modelName={currentModelName} />}
        {!isLoading && <EnterButton setIsPreLoaderFinished={setIsPreLoaderFinished} soundAudioLevelControls={soundAudioLevelControls} />}
      </div>
    </div>
  )
}

export default Preloader
