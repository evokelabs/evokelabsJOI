import React, { useContext, useEffect, useState } from 'react'
import { JOISpeechContext } from '../libs/JOISpeechContext'

const JOISubtitles = () => {
  const { JOILineCaption, isAudioPlaying, setIsAudioPlaying, isChainPlaying, setIsChainPlaying } = useContext(JOISpeechContext)

  const [currentCaption, setCurrentCaption] = useState(JOILineCaption)

  const CAPTION_WAIT_TIMER_COOKIE = 4500
  const MENU_HOME_WAIT_TIMER_NOCOOKIE = 7500

  const visitedCookie =
    typeof document !== 'undefined' ? document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited=')) : null
  const initialTimer = visitedCookie ? CAPTION_WAIT_TIMER_COOKIE : MENU_HOME_WAIT_TIMER_NOCOOKIE
  useEffect(() => {
    if (!isAudioPlaying && !isChainPlaying) {
      setTimeout(() => {
        setCurrentCaption(JOILineCaption)
      }, 500) // Delay setCurrentCaption by 0.5 seconds to account for the duration-500 t
    } else if (!isAudioPlaying && isChainPlaying) {
      setCurrentCaption(JOILineCaption)
      setIsAudioPlaying(true)
    }
  }, [JOILineCaption, isAudioPlaying, isChainPlaying, setIsAudioPlaying, setIsChainPlaying])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let innerTimeoutId: NodeJS.Timeout

    const SAFEGUARD_TIMER = isAudioPlaying ? initialTimer : 150
    timeoutId = setTimeout(() => {
      setIsAudioPlaying(false)
      setIsChainPlaying(false)

      innerTimeoutId = setTimeout(() => {
        // setCurrentCaption(null)
      }, 550)
    }, SAFEGUARD_TIMER)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (innerTimeoutId) {
        clearTimeout(innerTimeoutId)
      }
    }
  }, [isAudioPlaying, setIsAudioPlaying, setIsChainPlaying])

  const opacityClass = isAudioPlaying ? 'opacity-100' : 'opacity-0'

  return (
    <div
      className={`absolute bottom-4 pb-0 md:pb-1 flex flex-row justify-center items-center z-[10000000000000000] w-full font-semibold pointer-events-none transition-opacity duration-500 ${opacityClass}`}
    >
      <p className='text-teal-blur text-lg/2 lg:text-2xl 2xl:text-4xl bg-black px-4 py-2 bg-opacity-40 shadow-lg text-center'>
        <span className='text-red-blur'>JOI:</span> {currentCaption}
      </p>
    </div>
  )
}

export default JOISubtitles
