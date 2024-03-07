import React, { useContext, useEffect, useRef, useState } from 'react'
import { JOISpeechContext } from '../libs/JOISpeechContext'

const CAPTION_WAIT_TIMER_COOKIE = 4500
const MENU_HOME_WAIT_TIMER_NOCOOKIE = 7500

const JOISubtitles = () => {
  const { JOILineCaption, isAudioPlaying, setIsAudioPlaying, isChainPlaying, setIsChainPlaying } = useContext(JOISpeechContext)

  const [currentCaption, setCurrentCaption] = useState(JOILineCaption)
  const [menuHomeWaitTimerNoCookie, setMenuHomeWaitTimerNoCookie] = useState(MENU_HOME_WAIT_TIMER_NOCOOKIE)

  const initialTimerRef = useRef<number | null>(null)

  useEffect(() => {
    if (initialTimerRef.current === null) {
      const visitedCookie =
        typeof document !== 'undefined' ? document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited=')) : null
      initialTimerRef.current = visitedCookie ? CAPTION_WAIT_TIMER_COOKIE : MENU_HOME_WAIT_TIMER_NOCOOKIE
      setMenuHomeWaitTimerNoCookie(initialTimerRef.current)

      // Set a timeout to update initialTimerRef.current to 4500 after 18 seconds
      const timer = setTimeout(() => {
        initialTimerRef.current = 4500
      }, 18000)

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuHomeWaitTimerNoCookie(4500)
    }, 18000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuHomeWaitTimerNoCookie(4500)
    }, menuHomeWaitTimerNoCookie)

    return () => clearTimeout(timer)
  }, [menuHomeWaitTimerNoCookie])

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
    const SAFEGUARD_TIMER = isAudioPlaying ? initialTimerRef.current ?? 0 : 150
    const timeoutId = setTimeout(() => {
      setIsAudioPlaying(false)
      setIsChainPlaying(false)
    }, SAFEGUARD_TIMER)

    return () => clearTimeout(timeoutId)
  }, [isAudioPlaying, setIsAudioPlaying, setIsChainPlaying])

  const opacityClass = isAudioPlaying ? 'opacity-100' : 'opacity-0'

  return (
    <div
      className={`absolute bottom-4 pt-5 flex flex-row justify-center items-center z-[10000000000000000] w-full font-semibold pointer-events-none transition-opacity duration-500 ${opacityClass}`}
    >
      <p className='text-red-blur text-4xl bg-black px-4 py-2 bg-opacity-40 shadow-lg'>
        <span className='text-teal-blur'>JOI:</span> {currentCaption}
      </p>
    </div>
  )
}

export default JOISubtitles
