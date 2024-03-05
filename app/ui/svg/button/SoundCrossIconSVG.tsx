import { RED, TEAL } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const SoundCrossIconSVG = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg width='46' height='46' viewBox='0 0 46 46' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M33 31H29.0961V24.3508C29.0961 22.5277 28.4034 21.509 26.9604 21.509C25.3907 21.509 24.5706 22.5692 24.5706 24.3508V31H20.8083V18.3333H24.5706V20.0395C24.5706 20.0395 25.7018 17.9463 28.3898 17.9463C31.0765 17.9463 33 19.587 33 22.9803V31ZM16.32 16.6747C15.0384 16.6747 14 15.6281 14 14.3374C14 13.0466 15.0384 12 16.32 12C17.6015 12 18.6393 13.0466 18.6393 14.3374C18.6393 15.6281 17.6015 16.6747 16.32 16.6747ZM14.3773 31H18.3004V18.3333H14.3773V31Z'
          fill={isHovered ? TEAL : RED}
        />
      </g>
    </svg>
  )
}

export default SoundCrossIconSVG
