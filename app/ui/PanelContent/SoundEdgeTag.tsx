import { BLACK, RED } from '@/app/libs/UIConstants'
import React from 'react'
import { RED_TILE_PATTERN } from '../libs/TitleFillsPatterns'

const SoundEdgeTag = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute bottom-0 right-0 mr-[3.4rem] mb-[1.3rem] ${className}`}>
      <svg width='16' height='44' viewBox='0 0 17 44' fill='none'>
        <path
          d='M15.0717 1.97012L15.0717 42.2297H8.01707L4.99367 39.631L4.99367 32.4275L1.97026 29.8289L1.97026 15.2371L4.99367 12.6385L4.99367 4.56875L8.01709 1.97012L15.0717 1.97012Z'
          fill={BLACK}
          fillOpacity={0.85}
        />
        <path
          d='M15.0717 1.97012L15.0717 42.2297H8.01707L4.99367 39.631L4.99367 32.4275L1.97026 29.8289L1.97026 15.2371L4.99367 12.6385L4.99367 4.56875L8.01709 1.97012L15.0717 1.97012Z'
          fill={RED}
          fillOpacity={0.1}
        />
        <path
          d='M15.0717 1.97012L15.0717 42.2297H8.01707L4.99367 39.631L4.99367 32.4275L1.97026 29.8289L1.97026 15.2371L4.99367 12.6385L4.99367 4.56875L8.01709 1.97012L15.0717 1.97012Z'
          fill='url(#redTile)'
          fillOpacity='0.1'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.8 44.2H7.28668L3.02341 40.5357L3.02341 33.3322L0 30.7336L8.51899e-07 14.3327L3.02341 11.734L3.02341 3.6643L7.2867 0H16.8V44.2ZM4.99367 12.6385L1.97026 15.2371L1.97026 29.8289L4.99367 32.4275L4.99367 39.631L8.01707 42.2297H15.0717L15.0717 1.97012L8.01709 1.97012L4.99367 4.56875L4.99367 12.6385Z'
          fill={RED}
          fillOpacity='0.6'
        />
        {RED_TILE_PATTERN}
      </svg>
    </div>
  )
}

export default SoundEdgeTag
