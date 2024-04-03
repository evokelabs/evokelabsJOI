import RedCRTBlur from './libs/RedCRTBlur'
import { BLACK, RED, RED_BLACK } from '../libs/UIConstants'
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'

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

  const videoErrorRef = useRef(videoError)

  const handleVideoPlay = useCallback(() => {
    const video = videoRef.current
    if (video) {
      video.muted = false // Unmute the video
      setShouldMapDarkness(true)
      if (!userMutedAll) {
        soundAudioLevelControls.setMuteMusic(true)
        soundAudioLevelControls.setMuteRain(true)
        soundAudioLevelControls.setMuteSFX(true)
      }
    }
  }, [userMutedAll, setShouldMapDarkness, soundAudioLevelControls])

  const handleVideoPause = () => {
    const video = videoRef.current
    if (video && !video.seeking) {
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
  }

  useEffect(() => {
    // Set videoError to false when the component mounts
    setVideoError(false)

    return () => {
      // Set videoError to false when the component unmounts
      setVideoError(false)
      // Call handleVideoPause when the component unmounts
      handleVideoPause()
      // Set shouldMapDarkness to false when the component unmounts
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
  }, [])
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
        setShouldMapDarkness(false)
        videoErrorRef.current = true
        video.muted = true

        if (!userMutedAll) {
          setShouldMapDarkness(false)
          soundAudioLevelControls.setMuteMusic(false)
          soundAudioLevelControls.setMuteRain(false)
          soundAudioLevelControls.setMuteSFX(false)
        }

        return
      }

      video.addEventListener('error', handleError)
      video.addEventListener('play', handleVideoPlay)

      return () => {
        video.removeEventListener('error', handleError)
        video.removeEventListener('play', handleVideoPlay)
      }
    }
  }, [handleVideoPlay, progressTriggered, setShouldMapDarkness, soundAudioLevelControls, userMutedAll, videoError])

  useEffect(() => {
    videoErrorRef.current = videoError
  }, [videoError])
  // Remove the unmute logic from handleVideoPlay

  return (
    <>
      {videoError ? (
        <div className='w-full h-[14em] md:h-[40em] bg-grid-brightRed  border-red border-2 border-opacity-60 shadow-red-blur flex justify-center items-center text-teal-blur text-center font-orbitron flex-col'>
          <div className='bg-grid-darkRed py-4 px-6 w-fit '>
            <p className='text-[30px] md:text-[66px]  font-bold '>Audio Hardware Error</p>
            <p className='text-base/4 md:text-3xl font-semibold '>Please refresh the page or visit another section.</p>
          </div>
        </div>
      ) : (
        <div className='w-full bg-grid-darkRed h-full border-red border-t-2 border-x-2 border-opacity-60 p-2 pb-0 border-b-0 shadow-red-blur cursor-pointer'>
          <video
            ref={videoRef}
            muted
            className='w-full h-full object-contain'
            controls
            src={videoURL}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          />
        </div>
      )}

      {!videoError ? (
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
      ) : null}
    </>
  )
}

export default VideoFrame
