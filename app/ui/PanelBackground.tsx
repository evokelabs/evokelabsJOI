import React from 'react'
import { RED, RED_DARK } from '../libs/UIConstants'
import IconSmall from './IconSmall'
import ButtonDefault from './ButtonDefault'
import HR from './HR'
import TitleHighlight from './TitleHighlight'

const TopHeader = () => {
  return (
    <div className='flex items-end'>
      <div className='absolute'>
        <h1 className='font-orbitron font-medium text-teal-blur text-[2rem] leading-none px-4 py-4'>BACKSTORY</h1>
      </div>
      <div className='inline-block'>
        <TopHeaderSVG />
      </div>
      <div className='bg-red-dark w-full h-[49px] bottom-0 border-red border-2 border-b-0  border-l-0 border-opacity-60'></div>
    </div>
  )
}

const TopHeaderSVG = () => {
  return (
    <svg width='349' height='63' viewBox='0 0 349 63'>
      <path d='M349 16L335 2H10L2 10V64H349' fill={RED_DARK} />
      <path d='M335.828 0L350.414 14.5858L349 16L335 2H10L2 10V64H349V66H0V9.17157L9.17157 0H335.828Z' fill={RED} fillOpacity={0.6} />
    </svg>
  )
}

const TopLeftCornerSVG = () => {
  return (
    <svg width='16' height='82' viewBox='-1 -1 16 82'>
      <path d='M14 81V0H5.5L0 6V76L5 81' fill={RED_DARK} stroke={RED} strokeWidth='2' strokeOpacity='0.6' />
    </svg>
  )
}

const BottomLeftCornerSVG = () => {
  return (
    // <svg width='14' height='20' viewBox='0 0 14 20'>
    <svg width='17' height='22' viewBox='-2 0 17 22'>
      <path d='M5 0L0 4V20H14V0' fill={RED_DARK} stroke={RED} strokeWidth='2' strokeOpacity='0.6' />
    </svg>
  )
}

const BottomRightCornerSVG = () => {
  return (
    <svg width='13' height='24' viewBox='0 1 13 24'>
      <path d='M0.0200195 24L12.02 12V0H0.0200195' fill='#151A2B' stroke={RED} strokeWidth='2' strokeOpacity='0.6' />
    </svg>
  )
}

const PanelBackground = () => {
  return (
    <div className='relative  min-w-[40rem] max-w-[70rem]'>
      <div className='relative flex flex-row h-full'>
        <div className='w-auto h-auto grid grid-rows-[63px,auto]'>
          <div className='h-[63px]'></div>
          <div className='w-[13px] bg-red-dark border-red border-2 border-r-0 border-opacity-60'></div>
        </div>

        <div className='w-full'>
          <TopHeader />
          <div className='bg-blue-dark pl-3 pr-6 pt-2 border-red border-t-2 border-x-2 border-opacity-60 pb-3'>
            <div className='flex flex-row items-center gap-1'>
              <IconSmall />
              <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none t'>RESUME</h2>
              <div className='ml-auto'>
                <ButtonDefault />
              </div>
            </div>
            <HR />
            <TitleHighlight title={'BIO'} fullWidth={true} BGColor={RED} />
            <p className='font-rajdhani text-red-blur text-[1.375rem] font-medium leading-6'>
              <span className='text-teal-blur font-semibold'>Creative Technologist</span> with over 20+ years of experience in digital
              strategy, design, UI/UX, web development, motion, and 3D. Proven track record collaborating with advertising agencies,
              creative strategy, design, UI/UX, web development, motion, and 3D. Proven track record collaborating with advertising
              agencies, creative years of experience in digital strategy, design, UI/UX, web development, motion, and 3D. Proven track
              record collaborating with advertising agencies, creative strategy, design, UI/UX, web development, motion, and 3D. Proven
              track record collaborating with advertising agencies, creative
            </p>
          </div>
        </div>
        {/* <div className='absolute -left-[0.95rem]'>
            <BottomLeftCornerSVG />
          </div> */}
        {/* <div className='absolute right-0'>
            <BottomRightCornerSVG />
          </div> */}
      </div>

      {/* <div className='absolute top-4 -left-1.5'>
        <TopLeftCornerSVG />
      </div> */}
    </div>
  )
}

export default PanelBackground
