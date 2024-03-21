import React from 'react'
import { SoundAudioLevelControls } from './data/types'

const Preloader = ({
  setIsPreLoaderFinished,
  soundAudioLevelControls
}: {
  setIsPreLoaderFinished: (value: boolean) => void
  soundAudioLevelControls: SoundAudioLevelControls
}) => {
  return (
    <div className='w-full h-full absolute top-0 left-0 z-[10000000000000000] pointer-events-none'>
      <div className='flex h-full last:items-center justify-center'>
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
      </div>
    </div>
  )
}

export default Preloader
