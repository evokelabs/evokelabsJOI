import { RED, TEAL } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const SoundControlIconOffSVG = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg width='46' height='46' viewBox='0 0 46 46' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          d='M33.1521 19.0856L30.2413 21.9964L27.3305 19.0856L26.2045 20.2117L29.1153 23.1225L26.2045 26.0333L27.3305 27.1594L30.2413 24.2486L33.1521 27.1594L34.2808 26.0333L31.3701 23.1225L34.2808 20.2117L33.1521 19.0856Z'
          fill={isHovered ? TEAL : RED}
        />
        <path d='M24.4437 32.5111V14L17.1268 19.7233H12.3384V26.7878H17.1268L24.4437 32.5111Z' fill={isHovered ? TEAL : RED} />
      </g>
    </svg>
  )
}

export default SoundControlIconOffSVG
