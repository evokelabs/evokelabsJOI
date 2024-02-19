import React from 'react'
import { BLUE_DARK, RED } from '../libs/UIConstants'
import RedCRTBlur from '../ui/libs/RedCRTBlur'

const BottomRightCornerSVG = () => {
  return (
    <svg width='22' height='14' viewBox='0 0 22 14' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M14 0H0V14H0.828125L14 0.828125V0Z' fill={BLUE_DARK} />
        <path d='M14 0H0V14H0.828125L14 0.828125V0Z' fill='url(#blueTile)' />
        <path d='M14 0.82843L0.828369 14H-4.04688V12H0L12 0H14V0.82843Z' fill={RED} fillOpacity={0.6} />
      </g>
    </svg>
  )
}

const BottomFooter = () => {
  return (
    <div className='flex flex-row w-full h-3.5 relative '>
      <div className='bg-grid-blue w-full  border-red border-b-2 border-l-2 border-opacity-60 mr-3'></div>
      <div className='ml-auto h-fit absolute -right-[8px]'>
        <BottomRightCornerSVG />
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className={`mb-4 mx-3.5 mr-2`}>
      <div
        className={`pt-5 p-4 pb-2 bg-grid-blue border-2 border-red border-opacity-60 border-b-0`}
        style={{ boxShadow: '4px 0 0 0 rgba(247, 80, 73,0.2),8px 0 0 0 rgba(247, 80, 73,0.1) ' }}
      >
        <h1 className='font-rajdhani font-bold text-red-blur text-[100px] leading-[0.6] pt-1.5 '>EVOKE LABS DOES DIGITAL</h1>
        <h1 className='font-rajdhani font-bold text-teal-blur text-[100px] leading-[0.6] pt-1.5  mt-2'>LIKE JEDI USE THE FORCE.</h1>
      </div>
      <BottomFooter />
    </div>
  )
}

export default Home
