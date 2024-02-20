import { useRef } from 'react'
import { BLACK, RED } from '../libs/UIConstants'
import useButtonIconController from './libs/useButtonIconController'
import RedCRTBlur from './libs/RedCRTBlur'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'

const IconButtonDefault = ({ isHovered, isActive, isMouseDown }: { isHovered: boolean; isActive: boolean; isMouseDown: boolean }) => {
  const svgRef = useRef(null)
  const pathBGFillRef = useRef(null)
  const pathBGStrokeRef = useRef(null)
  const pathFGFillRef = useRef(null)

  useButtonIconController({ isHovered, isActive, isMouseDown, svgRef, pathBGFillRef, pathBGStrokeRef, pathFGFillRef })

  return (
    <svg width='60' height='52' viewBox='0 0 60 52' fill='none' ref={svgRef}>
      <path ref={pathBGFillRef} d='M2 2L2 50L50 50L50 11.4648L40.5352 2L2 2Z' fill={BLACK} />
      <path ref={pathFGFillRef} d='M2 2L2 50L50 50L50 11.4648L40.5352 2L2 2Z' fill='url(#redTile)' />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          ref={pathBGStrokeRef}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 52L6.20094e-07 0L41.3636 4.93256e-07L52 10.6364L52 52L0 52ZM50 11.4648L50 50L2 50L2 2L40.5352 2L50 11.4648Z'
          fill={RED}
          fillOpacity={0.6}
        />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

export default IconButtonDefault
