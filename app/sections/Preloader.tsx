import React, { useEffect, useState } from 'react'
import { LoadingManager } from 'three'
import { SoundAudioLevelControls } from './data/types'
import { useDracoLoader } from '../libs/useDracoLoader'

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
    manager.onStart = (url, itemsLoaded, itemsTotal) => {
      console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
    }

    manager.onLoad = () => {
      console.log('Loading complete!')
      setIsModelLoaded(true)
    }

    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')

      if (itemsLoaded > 0) {
        const sizeOfCurrentItem = itemsLoaded / itemsTotal
        const totalSize = sizeOfCurrentItem * itemsTotal
        console.log('Estimated total size of GLB model: ' + totalSize + ' bytes')
      }
      const progress = (itemsLoaded / itemsTotal) * 100
      setProgress(progress)
    }

    // Start loading the GLB file
    // loader.load('/glb/JOI.glb', gltf => {
    loader.load('/glb/EvokelabsRoom.glb', gltf => {
      // Handle the loaded model here
    })
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
