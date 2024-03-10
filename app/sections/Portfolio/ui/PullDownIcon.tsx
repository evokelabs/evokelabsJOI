import React from 'react'
import { BLACK, RED } from '@/app/libs/UIConstants'

const ArrowDownIcon = () => (
  <div className='relative -mt-0.5 '>
    <svg width='26' height='26' viewBox='0 0 26 26' fill='none'>
      <path d='M0 0H26V26H0V0Z' fill={BLACK} fillOpacity='0.85' />
      <path d='M0 0H26V26H0V0Z' fill={RED} fillOpacity='0.1' />
      <path d='M0 0H26V26H0V0Z' fill='url(#redTile)' fillOpacity='0.1' />
      <path fillRule='evenodd' clipRule='evenodd' d='M0 0H26V26H0V0ZM1 1V25H25V1H1Z' fill={RED} fillOpacity='0.6' />
      <path d='M8 10L18 10L13 16L8 10Z' fill={RED} />
    </svg>
  </div>
)

export default ArrowDownIcon
