import RedCRTBlur from './libs/RedCRTBlur'
import { BLACK, RED, RED_BLACK } from '../libs/UIConstants'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import { SoundAudioLevelControls } from '../sections/data/types'

const VideoFrame = ({
  videoURL,
  soundAudioLevelControls,
  setShouldMapDarkness
}: {
  videoURL: string
  soundAudioLevelControls: SoundAudioLevelControls
  setShouldMapDarkness: Dispatch<SetStateAction<boolean>>
}) => {
  const [userMutedAll, setUserMutedAll] = useState(soundAudioLevelControls.muteAll)
  const [userMutedMusic, setUserMutedMusic] = useState(soundAudioLevelControls.muteMusic)
  const [userMutedRain, setUserMutedRain] = useState(soundAudioLevelControls.muteRain)
  const [userMutedSFX, setUserMutedSFX] = useState(soundAudioLevelControls.muteSFX)

  const initialMuteMusic = useRef(userMutedMusic)
  const initialMuteRain = useRef(userMutedRain)
  const initialMuteSFX = useRef(userMutedSFX)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [progressTriggered, setProgressTriggered] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const handleVideoPlay = () => {
    console.log('handleVideoPlay trigger')
    console.log('videoError:', videoError, 'videoRef.current.error:', videoRef.current?.error, 'videoRef.current:', videoRef.current)

    const video = videoRef.current
    if (video && video.muted && !videoError) {
      video.muted = false
    }

    setShouldMapDarkness(true)
    if (!userMutedAll) {
      soundAudioLevelControls.setMuteMusic(true)
      soundAudioLevelControls.setMuteRain(true)
      soundAudioLevelControls.setMuteSFX(true)
    }
  }

  const handleVideoPause = () => {
    setShouldMapDarkness(false)
    if (userMutedAll) {
      soundAudioLevelControls.setMuteMusic(true)
      soundAudioLevelControls.setMuteRain(true)
      soundAudioLevelControls.setMuteSFX(true)
    } else {
      soundAudioLevelControls.setMuteMusic(false)
      soundAudioLevelControls.setMuteRain(false)
      soundAudioLevelControls.setMuteSFX(false)
    }
  }

  useEffect(() => {
    // Set videoError to false when the component mounts
    setVideoError(false)

    return () => {
      // Set videoError to false when the component unmounts
      setVideoError(false)
      // Call handleVideoPlay when the component unmounts
      handleVideoPause()
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      if (!videoError && video.error === null) {
        video.muted = false
        console.log('1st. videoRef.current.muted:', video.muted)
      } else {
        video.muted = true
        console.log('2nd. videoRef.current.muted:', video.muted)
      }
    }
  }, [videoError])

  //Intelligent video sound control based on sound context
  useEffect(() => {
    initialMuteMusic.current = soundAudioLevelControls.muteAll
    initialMuteRain.current = soundAudioLevelControls.muteAll
    initialMuteSFX.current = soundAudioLevelControls.muteAll
    setUserMutedAll(soundAudioLevelControls.muteAll)
    setUserMutedMusic(initialMuteMusic.current)
    setUserMutedRain(initialMuteRain.current)
    setUserMutedSFX(initialMuteSFX.current)
  }, [soundAudioLevelControls.muteAll])

  //Restore sound settings when unmounting
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleError = () => {
        console.error('Video failed to load')
        console.error('Error code:', video.error?.code)
        console.error('Error message:', video.error?.message)
        setVideoError(true)
      }

      const handlePlaying = () => {
        // Unmute the video when it starts playing, unless there was a video error
        if (!videoError) {
          video.muted = false
        }
      }

      video.addEventListener('error', handleError)
      video.addEventListener('playing', handlePlaying)
      video.addEventListener('play', handleVideoPlay)

      return () => {
        video.removeEventListener('error', handleError)
        video.removeEventListener('playing', handlePlaying)
        video.removeEventListener('play', handleVideoPlay)
      }
    }
  }, [handleVideoPlay, progressTriggered, videoError])

  // Remove the unmute logic from handleVideoPlay

  return (
    <div>
      <div className='w-full bg-grid-darkRed h-full border-red border-t-2 border-x-2 border-opacity-60  p-2 pb-0 border-b-0 shadow-red-blur'>
        <video
          ref={videoRef}
          muted
          className='w-full h-full object-cover'
          controls
          src={videoURL}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
        />
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
