import React, { useContext } from 'react'
import { JOISpeechContext } from '../libs/JOISpeechContext'

const JOISubtitles = () => {
  const { JOILineCaption, isAudioPlaying } = useContext(JOISpeechContext)

  if (!isAudioPlaying) {
    return null
  }

  return (
    <div className='absolute bottom-4 pt-5 flex flex-row justify-center items-center z-[10000000000000000] w-full font-semibold pointer-events-none'>
      <p className='text-red-blur text-4xl bg-black px-4 py-2 bg-opacity-50 shadow-lg'>
        <span className='text-teal-blur'>JOI:</span> {JOILineCaption}
      </p>
    </div>
  )
}

export default JOISubtitles
