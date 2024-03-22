import React from 'react'
import Elabs from './svg/ElabsStroke'
import ElabsStroke from './svg/ElabsStroke'
import ElabsFill from './svg/ElabsFill'

const PreloaderLogoIntroEffect = () => {
  return (
    <>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none'>
        <ElabsFill />
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none'>
        <ElabsStroke />
      </div>
    </>
  )
}

export default PreloaderLogoIntroEffect
