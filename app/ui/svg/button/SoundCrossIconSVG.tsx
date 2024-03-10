import { RED, TEAL } from '@/app/libs/UIConstants'
import React from 'react'
import RedCRTBlur from '../../libs/RedCRTBlur'

const SoundCrossIconSVG = () => {
  return (
    <svg width='30' height='10' viewBox='0 0 10 10' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.40158 0.293385L9.70743 1.59659L6.30437 5.00016L9.70743 8.40373L8.40158 9.70694L4.99929 6.30414L1.59658 9.70735L0.292969 8.40331L3.69561 5.00016L0.292969 1.59701L1.59658 0.292969L4.99929 3.69618L8.40158 0.293385Z'
          fill={RED}
        />
      </g>
    </svg>
  )
}

export default SoundCrossIconSVG
