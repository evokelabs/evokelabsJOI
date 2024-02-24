import { RED } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const YouTubeSVG = () => {
  return (
    <svg width='46' height='46' viewBox='0 0 46 46' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          d='M29.0539 16H17.9461C15.7667 16 14 17.8397 14 20.109V25.891C14 28.1603 15.7667 30 17.9461 30H29.0539C31.2333 30 33 28.1603 33 25.891V20.109C33 17.8397 31.2333 16 29.0539 16ZM26.3853 23.2813L21.1897 25.8616C21.0513 25.9303 20.8914 25.8252 20.8914 25.6655V20.3437C20.8914 20.1818 21.0555 20.0768 21.1942 20.15L26.3897 22.8916C26.5442 22.973 26.5415 23.2037 26.3853 23.2813Z'
          fill={RED}
        />
      </g>
    </svg>
  )
}

export default YouTubeSVG
