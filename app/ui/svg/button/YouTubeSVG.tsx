import { RED } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const YouTubeSVG = () => {
  return (
    <svg width='46' height='46' viewBox='0 0 46 46' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          d='M30.2232 15H16.7768C14.1386 15 12 17.1025 12 19.696V26.304C12 28.8975 14.1386 31 16.7768 31H30.2232C32.8614 31 35 28.8975 35 26.304V19.696C35 17.1025 32.8614 15 30.2232 15ZM26.9927 23.3215L20.7034 26.2704C20.5358 26.3489 20.3422 26.2288 20.3422 26.0463V19.9643C20.3422 19.7792 20.5409 19.6592 20.7088 19.7429L26.9981 22.8761C27.1851 22.9692 27.1819 23.2328 26.9927 23.3215Z'
          fill={RED}
        />
      </g>
    </svg>
  )
}

export default YouTubeSVG
