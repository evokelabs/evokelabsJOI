import React, { useContext, useEffect, useState } from 'react'
import { JOISpeechContext } from '../libs/JOISpeechContext'

const JOISubtitles = () => {
  const { JOILineCaption, isAudioPlaying, setIsAudioPlaying, isChainPlaying, setIsChainPlaying } = useContext(JOISpeechContext)

  const [currentCaption, setCurrentCaption] = useState(JOILineCaption)

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

    const SAFEGUARD_TIMER = isAudioPlaying ? 4500 : 150

    timeoutId = setTimeout(() => {
      setIsAudioPlaying(false)
      setIsChainPlaying(false)

      innerTimeoutId = setTimeout(() => {
        setCurrentCaption(null)
      }, 500)
    }, SAFEGUARD_TIMER)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (innerTimeoutId) {
        // Add this block
        clearTimeout(innerTimeoutId)
      }
    }
  }, [isAudioPlaying])

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
