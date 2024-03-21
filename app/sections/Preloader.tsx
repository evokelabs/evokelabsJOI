import React, { useEffect, useState } from 'react'
import { LoadingManager } from 'three'
import { SoundAudioLevelControls } from './data/types'
import { useDracoLoader } from '../libs/useDracoLoader'

const TOTAL_BYTES_SIZE_JOI = 4909672
const TOTAL_BYTES_SIZE_MAP = 3763556

const Preloader = ({
  setIsPreLoaderFinished,
  soundAudioLevelControls
}: {
  setIsPreLoaderFinished: (value: boolean) => void
  soundAudioLevelControls: SoundAudioLevelControls
}) => {
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const manager = new LoadingManager()
  const loader = useDracoLoader(manager)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadModel = async () => {
      console.log('Start loading model')
      const response = await fetch('/glb/JOI.glb')

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
        const progress = (bytesReceived / TOTAL_BYTES_SIZE_JOI) * 100
        setProgress(progress)
        console.log(`Received ${bytesReceived} of ${TOTAL_BYTES_SIZE_JOI} bytes (${progress.toFixed(2)}%)`)
      }

      const arrayBuffer = new Uint8Array(bytesReceived)
      let position = 0
      for (const chunk of chunks) {
        arrayBuffer.set(chunk, position)
        position += chunk.length
      }

      // Now you can use the GLTFLoader to parse the model data
      const blob = new Blob([arrayBuffer.buffer])
      const url = URL.createObjectURL(blob)
      loader.load(url, gltf => {
        console.log('Model loaded')
        // Handle the loaded model here
      })

      console.log('Loading completed')
    }

    loadModel()
  }, [])

  return (
    <div className='w-full h-full absolute top-0 left-0 z-[10000000000000000] pointer-events-none'>
      <div className='flex h-full last:items-center justify-center'>
        <button
          className='pointer-events-auto'
          disabled={!isModelLoaded}
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
      </div>
      <div className='absolute bottom-0 left-0 bg-blue-500' style={{ width: `${progress}%` }} />
    </div>
  )
}

export default Preloader
