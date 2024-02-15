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
    <svg width='14' height='81' viewBox='0 0 14 81'>
      <path d='M14 81V0H5.5L0 6V76L5 81' fill={RED_DARK} stroke={RED} strokeWidth='2' strokeOpacity='0.6' />
    </svg>
  )
}

const BottomLeftCornerSVG = () => {
  return (
    <svg width='14' height='20' viewBox='0 0 14 20'>
      <path d='M5.13 0H4.92L0 3.94V19.94H14V0H13.81' fill={RED_DARK} stroke={RED} strokeWidth='2' strokeOpacity='0.6' />
    </svg>
  )
}

const BottomRightCornerSVG = () => {
  return (
    <svg width='13' height='24' viewBox='0 0 13 24'>
      <path d='M0.0200195 24L12.02 12V0H0.0200195' fill='#151A2B' stroke={RED} strokeWidth='2' strokeOpacity='0.6' />
    </svg>
  )
}

const PanelBackground = () => {
  return (
    <div className='relative pl-2'>
      {/* <TopLeftCornerSVG /> */}
      {/* <BottomLeftCornerSVG /> */}
      {/* <BottomRightCornerSVG /> */}
      <div className='absolute'>
        <div>
          <h1 className=' font-orbitron font-medium text-teal-blur text-[2rem] leading-none px-4 py-3'>BACKSTORY</h1>
        </div>
        <div className='bg-blue-dark mt-0.5 mx-0.5 px-4 pt-2' style={{ outline: '2px solid rgba(247, 80, 73, 0.6)' }}>
          <div className='flex flex-row items-center'>
            <IconSmall />
            <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none t'> RESUME</h2>
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
      </div>
      <TopHeaderSVG />
    </div>
  )
}

export default PanelBackground
