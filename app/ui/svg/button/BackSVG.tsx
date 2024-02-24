import { RED } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const BackSVG = () => {
  return (
    <svg width='46' height='46' viewBox='-1 0 46 46' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M27 15L27 32L15 23.0278L27 15Z' fill={RED} />
      </g>
    </svg>
  )
}

export default BackSVG
