import { RED, TEAL } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const SoundMusicIconSVG = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg width='44' height='43' viewBox='0 0 44 43' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          d='M30.994 27.9842V15.043L31 15L30.994 15.0012V15L30.9813 15.0021L18.6511 16.6883H18.6502V26.9134C18.1619 26.7537 17.6126 26.6899 17.0407 26.747C15.2288 26.9266 13.8724 28.2438 14.0095 29.6875C14.1472 31.133 15.7264 32.1592 17.5376 31.9796C19.3504 31.8 20.7068 30.4834 20.5697 29.0375C20.5667 29.0126 20.5733 28.9659 20.5733 28.9659V20.0957L29.0714 18.8282V25.9318C28.5837 25.7725 28.035 25.7077 27.4619 25.7642C25.6501 25.9436 24.2937 27.2614 24.4302 28.7063C24.5683 30.1522 26.148 31.1774 27.9587 30.998C29.7705 30.8175 31.1279 29.5012 30.9898 28.0563C30.9879 28.032 30.994 27.9842 30.994 27.9842Z'
          fill={isHovered ? TEAL : RED}
        />
      </g>
    </svg>
  )
}

export default SoundMusicIconSVG
