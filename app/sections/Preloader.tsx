import React from 'react'

const Preloader = ({ setIsPreLoaderFinished }: { setIsPreLoaderFinished: (value: boolean) => void }) => {
  return (
    <div className='w-full h-full absolute top-0 left-0 z-[999999999999999999999999999]'>
      <div className='flex h-full last:items-center justify-center '>
        <button
          onClick={() => {
            setIsPreLoaderFinished(true)
          }}
        >
          ENTER
        </button>
      </div>
    </div>
  )
}

export default Preloader
