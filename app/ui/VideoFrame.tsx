import RedCRTBlur from './libs/RedCRTBlur'
import { BLACK, RED, RED_BLACK } from '../libs/UIConstants'
import { useEffect, useRef, useState } from 'react'

import { SoundAudioLevelControls } from '../sections/data/types'

const VideoFrame = ({ videoURL, soundAudioLevelControls }: { videoURL: string; soundAudioLevelControls: SoundAudioLevelControls }) => {
  const [userMutedMusic, setUserMutedMusic] = useState(soundAudioLevelControls.muteMusic)
  const [userMutedRain, setUserMutedRain] = useState(soundAudioLevelControls.muteRain)
  const [userMutedSFX, setUserMutedSFX] = useState(soundAudioLevelControls.muteSFX)

  const initialMuteMusic = useRef(userMutedMusic)
  const initialMuteRain = useRef(userMutedRain)
  const initialMuteSFX = useRef(userMutedSFX)

  const handleVideoPlay = () => {
    // if (!initialMuteMusic.current) {
    soundAudioLevelControls.setMuteMusic(true)
    // }
    // if (!initialMuteRain.current) {
    soundAudioLevelControls.setMuteRain(true)
    // }
    // if (!initialMuteSFX.current) {
    soundAudioLevelControls.setMuteSFX(true)
  }

  const handleVideoPause = () => {
    // if (initialMuteMusic.current) {
    soundAudioLevelControls.setMuteMusic(false)
    // }
    // if (initialMuteRain.current) {
    soundAudioLevelControls.setMuteRain(false)
    // }
    // if (initialMuteSFX.current) {
    soundAudioLevelControls.setMuteSFX(false)
    // }
  }

  useEffect(() => {
    // Capture the initial mute states
    const initialMusic = initialMuteMusic.current
    const initialRain = initialMuteRain.current
    const initialSFX = initialMuteSFX.current

    return () => {
      // Use the captured initial mute states
      soundAudioLevelControls.setMuteMusic(initialMusic)
      soundAudioLevelControls.setMuteRain(initialRain)
      soundAudioLevelControls.setMuteSFX(initialSFX)
    }
  }, [])

  return (
    <div>
      <div className='w-full bg-grid-darkRed h-full border-red border-t-2 border-x-2 border-opacity-60  p-2 pb-0 border-b-0 shadow-red-blur'>
        <video className='w-full h-full object-cover' controls src={videoURL} onPlay={handleVideoPlay} onPause={handleVideoPause} />
      </div>
      <div className='h-2 border-b-2 bg-grid-darkRed border-l-2 border-red border-opacity-60 mr-2 relative pb-2 '>
        <div className='absolute -right-3'>
          <svg width='16' height='10' viewBox='0 0 16 10'>
            <RedCRTBlur />
            <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
              <path d='M0 0H12V1L3 10H0V0Z' fill={BLACK} />
              <path d='M0 0H12V1L3 10H0V0Z' fill={RED_BLACK} fillOpacity='0.1' />
              <path d='M0 0H12V1L3 10H0V0Z' fill='url(#redTile)' fillOpacity='0.85' />
              <path d='M12 1L3 10H0V8H2L9.92339 0H12V1Z' fill={RED} fillOpacity={0.6} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default VideoFrame
