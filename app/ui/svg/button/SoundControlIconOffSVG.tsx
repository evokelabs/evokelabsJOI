import { RED, TEAL } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const SoundControlIconOffSVG = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg width='44' height='43' viewBox='0 0 44 43' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          d='M35.1521 19.0856L32.2413 21.9964L29.3305 19.0856L28.2045 20.2117L31.1153 23.1225L28.2045 26.0333L29.3305 27.1594L32.2413 24.2486L35.1521 27.1594L36.2808 26.0333L33.3701 23.1225L36.2808 20.2117L35.1521 19.0856Z'
          fill={isHovered ? TEAL : RED}
        />
        <path d='M26.4437 32.5111V14L19.1268 19.7233H14.3384V26.7878H19.1268L26.4437 32.5111Z' fill={isHovered ? TEAL : RED} />
      </g>
    </svg>
  )
}

export default SoundControlIconOffSVG
