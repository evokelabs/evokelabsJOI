import React from 'react'

import Link from 'next/link'

const JOISubtitles = () => {
  return (
    <div className='absolute bottom-4 pt-5 flex flex-row justify-center items-center z-[10000000000000000] w-full font-semibold pointer-events-none'>
      <p className='text-red-blur text-4xl bg-black px-4 py-2 bg-opacity-50 shadow-lg'>
        <span className='text-teal-blur'>JOI:</span> Flicking the deets.
      </p>
    </div>
  )
}

export default JOISubtitles
