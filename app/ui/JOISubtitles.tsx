import React, { useContext, useEffect, useState, useRef } from 'react'
import { JOISpeechContext } from '../libs/JOISpeechContext'

const JOISubtitles = () => {
  const { JOILineCaption, isAudioPlaying, setIsAudioPlaying, audioIndexState } = useContext(JOISpeechContext)

  const [currentCaption, setCurrentCaption] = useState(JOILineCaption)
  const wasAudioPlaying = useRef(isAudioPlaying)

  const SAFEGUARD_TIMER = 7500

  useEffect(() => {
    if (isAudioPlaying && JOILineCaption) {
      setCurrentCaption(JOILineCaption) // Use the audio index state to determine which caption to display
    }
  }, [isAudioPlaying, setIsAudioPlaying, audioIndexState, JOILineCaption]) // Add JOILineCaption to the dependency array

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (isAudioPlaying && !wasAudioPlaying.current && JOILineCaption) {
      setCurrentCaption(JOILineCaption)
      timeoutId = setTimeout(() => {
        setIsAudioPlaying(false)
      }, SAFEGUARD_TIMER)
    }
    wasAudioPlaying.current = isAudioPlaying
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [JOILineCaption, isAudioPlaying, setIsAudioPlaying])

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
