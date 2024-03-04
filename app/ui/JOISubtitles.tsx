import React, { useContext, useEffect } from 'react'
import { JOISpeechContext } from '../libs/JOISpeechContext'

const JOISubtitles = () => {
  const { JOILineCaption, isAudioPlaying, setIsAudioPlaying } = useContext(JOISpeechContext)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (isAudioPlaying) {
      timeoutId = setTimeout(() => {
        setIsAudioPlaying(false)
      }, 10000)
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
        <span className='text-teal-blur'>JOI:</span> {JOILineCaption}
      </p>
    </div>
  )
}

export default JOISubtitles
