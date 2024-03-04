import React, { useContext, useEffect, useState } from 'react'
import { JOISpeechContext } from '../libs/JOISpeechContext'

const JOISubtitles = () => {
  const { JOILineCaption, isAudioPlaying, setIsAudioPlaying } = useContext(JOISpeechContext)
  const [currentCaption, setCurrentCaption] = useState(JOILineCaption)

  const SAFEGUARD_TIMER = 5000

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (isAudioPlaying) {
      setCurrentCaption(JOILineCaption)
      timeoutId = setTimeout(() => {
        setIsAudioPlaying(false)
      }, SAFEGUARD_TIMER)
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isAudioPlaying, setIsAudioPlaying])

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
