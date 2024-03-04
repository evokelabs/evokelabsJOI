import React, { useContext, useEffect, useState } from 'react'
import { JOISpeechContext } from '../libs/JOISpeechContext'

const JOISubtitles = () => {
  const { JOILineCaption, isAudioPlaying, setIsAudioPlaying, isChainPlaying, setIsChainPlaying } = useContext(JOISpeechContext)

  const [currentCaption, setCurrentCaption] = useState(JOILineCaption)

  const SAFEGUARD_TIMER = 7500

  useEffect(() => {
    console.log('Is talking?', isAudioPlaying)
    console.log('Is chain playing?', isChainPlaying)
    let timeoutId: NodeJS.Timeout
    if (!isAudioPlaying) {
      setTimeout(() => {
        setCurrentCaption(JOILineCaption)
      }, 500) // Delay setCurrentCaption by 0.5 seconds to account for the duration-500 t
      timeoutId = setTimeout(() => {
        setIsAudioPlaying(false)
      }, SAFEGUARD_TIMER)
    } else if (isAudioPlaying && isChainPlaying) {
      setCurrentCaption(JOILineCaption)
      setIsAudioPlaying(true)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [JOILineCaption, isAudioPlaying, isChainPlaying, setIsAudioPlaying])

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
