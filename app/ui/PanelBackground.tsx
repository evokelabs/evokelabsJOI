import React from 'react'
import { RED, RED_DARK } from '../libs/UIConstants'
import IconSmall from './IconSmall'
import ButtonDefault from './ButtonDefault'
import HR from './HR'
import TitleHighlight from './TitleHighlight'

const TopHeaderSVG = () => {
  return (
    <svg width='347' height='58' viewBox='-1 -2 347 58'>
      <path d='M347 14L333 0H8.5L0 8.5V58L347 57.39' fill={RED_DARK} stroke={RED} strokeWidth='2' strokeOpacity='0.6' />
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
    <div className='relative pl-2'>
      <div className='absolute'>
        <div className='relative'>
          <h1 className=' font-orbitron font-medium text-teal-blur text-[2rem] leading-none px-4 py-3'>BACKSTORY</h1>
        </div>
        <div className='bg-red-dark w-full absolute h-[44px] top-3.5 border-red border-2 border-bottom-0 border-b-0 border-opacity-60 -z-10'></div>

        <div className='relative bg-blue-dark my-0.5  px-3 pt-2 h-full'>
          <div className='flex flex-row items-center gap-1'>
            <IconSmall />
            <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none t'>RESUME</h2>
            <div className='ml-auto'>
              <ButtonDefault />
            </div>
          </div>
          <HR />
          <TitleHighlight title={'BIO'} fullWidth={true} BGColor={RED} />
          <p className='font-rajdhani text-red-blur text-[1.375rem] font-medium'>
            <span className='text-teal-blur font-semibold'>Creative Technologist</span> with over 20+ years of experience in digital
            strategy, design, UI/UX, web development, motion, and 3D. Proven track record collaborating with advertising agencies, creative
            studios, corporations, and start-ups to deliver hundreds of successful digital projects. Specialising in front-end technologies
            and fostering positive team relations.
          </p>
        </div>
        <div className='absolute -left-[0.95rem]'>
          <BottomLeftCornerSVG />
        </div>
        <div className='absolute right-0'>
          <BottomRightCornerSVG />
        </div>
      </div>

      <div>
        <TopHeaderSVG />
      </div>

      <div className='absolute top-4 -left-1.5'>
        <TopLeftCornerSVG />
      </div>
      <div className='absolute left-0 w-[12px] h-full bg-red-dark  border-red border-2 border-opacity-60 border-y-0 '></div>
    </div>
  )
}

export default PanelBackground
