import React from 'react'
import { RED, RED_DARK } from '../libs/UIConstants'
import IconSmall from './IconSmall'

const TopHeaderSVG = () => {
  return (
    <svg width='347' height='58' viewBox='0 0 347 58'>
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
    <div>
      <TopHeaderSVG />
      <TopLeftCornerSVG />
      <BottomLeftCornerSVG />
      <BottomRightCornerSVG />
      <div className='bg-black'>
        <h1 className='font-rajdhani font-semibold text-teal text-[1.75rem] leading-none'>BACKSTORY</h1>
        <IconSmall />
        <p>
          Australian citizen with full work rights. Crypto accepted. ABN / GST compliant for contract and freelance roles. Open to onsite
          and/or remote gigs.
        </p>
      </div>
    </div>
  )
}

export default PanelBackground
