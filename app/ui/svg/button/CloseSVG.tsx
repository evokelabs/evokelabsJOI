import { RED } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const CloseSVG = () => {
  return (
    <svg width='46' height='46' viewBox='0 0 46 46' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M32.8592 9H36.9606L25.0507 23L37 37H32.8592L23 25.45L13.1014 37H9L20.9099 23L9 9H13.1014L23 20.55L32.8592 9Z' fill={RED} />
      </g>
    </svg>
  )
}

export default CloseSVG
