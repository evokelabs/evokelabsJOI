import { RED, TEAL } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const SoundControlIconOnSVG = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg width='44' height='43' viewBox='-2 0 44 43' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M25.1053 32.5111V14L17.7885 19.7233H13V26.7878H17.7885L25.1053 32.5111Z' fill={isHovered ? TEAL : RED} />
        <path d='M26.6303 21.951H27.7662V25.3587H26.6303V21.951Z' fill={isHovered ? TEAL : RED} />
        <path d='M28.9022 20.8153H30.0381V26.4947H28.9022V20.8153Z' fill={isHovered ? TEAL : RED} />
        <path d='M31.1741 19.6791H32.31V27.6303H31.1741V19.6791Z' fill={isHovered ? TEAL : RED} />
      </g>
    </svg>
  )
}

export default SoundControlIconOnSVG
