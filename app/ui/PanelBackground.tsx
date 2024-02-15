import React from 'react'
import { BLUE_DARK, RED, RED_DARK } from '../libs/UIConstants'
import IconSmall from './IconSmall'
import ButtonDefault from './ButtonDefault'
import HR from './HR'
import TitleHighlight from './TitleHighlight'

const TopHeader = () => {
  return (
    <div className='flex items-end'>
      <div className='absolute'>
        <h1 className='font-orbitron font-medium text-teal-blur text-[2rem] leading-none px-5 py-4'>BACKSTORY</h1>
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
      <path d='M349 13L336 0H9L0 9V63H349' fill={RED_DARK} />
      <path d='M335.828 0L350.414 14.5858L349 16L335 2H10L2 10V64H349V66H0V9.17157L9.17157 0H335.828Z' fill={RED} fillOpacity={0.6} />
    </svg>
  )
}

const TopLeftCornerSVG = () => {
  return (
    <svg width='16' height='71' viewBox='0 0 16 71'>
      <path d='M16 71V0H7L0 7V66.5L4 71' fill={RED_DARK} />
      <path d='M16 0V71V2H8L2 8V66L7 71L5.58579 72.4142L0 66.8284V7.17157L7.17157 0H16Z' fill={RED} fillOpacity={0.6} />
    </svg>
  )
}

const BottomLeftCornerSVG = () => {
  return (
    <svg width='16' height='24' viewBox='0 0 16 24'>
      <path d='M8 -3L0 5V24H18V-3' fill={RED_DARK} />
      <path d='M5 -3V0L0 5V24H18V-4H16V22H2V5.82843L7 1V-3H5Z' fill={RED} fillOpacity={0.6} />
    </svg>
  )
}

const BottomRightCornerSVG = () => {
  return (
    <svg width='13' height='24' viewBox='0 0 13 24'>
      <path d='M13 -4V12L1 24H-9V-4H13Z' fill={BLUE_DARK} />
      <path d='M1 24L13 12V-4H11V11L0 22H-9V24H1Z' fill={RED} fillOpacity={0.6} />
    </svg>
  )
}

const PanelBackground = () => {
  return (
    <div className='relative min-w-[40rem] max-w-[70rem]'>
      <div className='relative flex flex-row h-full'>
        <div className='w-auto h-auto grid grid-rows-[min-content,auto,min-content]'>
          <div className='pt-4'>
            <TopLeftCornerSVG />
          </div>
          <div className='w-[11px] bg-red-dark border-red border-2 border-r-0 border-opacity-60 justify-self-end border-t-0 border-b-0'></div>
          <div className='justify-self-end '>
            <BottomLeftCornerSVG />
          </div>
        </div>

        <div className='w-full'>
          <TopHeader />
          <div className='bg-blue-dark pl-5 pr-7 pt-4 border-red border-t-2 border-x-2 border-opacity-60 pb-3'>
            <div className='flex flex-row items-center gap-1 '>
              <IconSmall />
              <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none '>RESUME</h2>
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
              record collaborating with advertising agencies, creative strategy, design, UI/UX, web development, motion, and 3D.
              Provencollaborating with advertising agencies, creative strategy, design, UI/UX, web development, motion, and 3D. Proven track
              record collaborating with advertising agencies, creative years of expecollaborating with advertising agencies, creative
              strategy, design, UI/UX, web development, motion, and 3D. Proven track record collaborating with advertising agencies,
              creative years of expe track record collaborating with advertising agencies, creative
            </p>
          </div>
          <div className='flex flex-row w-full h-6'>
            <div className='bg-blue-dark w-full  border-red border-b-2 border-l-2 border-opacity-60'></div>
            <div className='ml-auto h-fit'>
              <BottomRightCornerSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanelBackground
