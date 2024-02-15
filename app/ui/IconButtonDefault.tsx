import { useRef } from 'react'
import { TileFill } from './libs/TileFill'
import { BLACK, RED } from '../libs/UIConstants'
import useButtonIconController from './libs/useButtonIconController'
import RedCRTBlur from './libs/RedCRTBlur'
import { RED_TILE_PATTERN } from './libs/SVGTileFills'

const IconButtonDefault = ({ isHovered, isActive, isMouseDown }: { isHovered: boolean; isActive: boolean; isMouseDown: boolean }) => {
  const svgRef = useRef(null)
  const pathBGFillRef = useRef(null)
  const pathBGStrokeRef = useRef(null)
  const pathFGFillRef = useRef(null)

  useButtonIconController({ isHovered, isActive, isMouseDown, svgRef, pathBGFillRef, pathBGStrokeRef, pathFGFillRef })

  return (
    <svg width='60' height='50' viewBox='0 0 60 50' fill='none' ref={svgRef}>
      <path ref={pathBGFillRef} d='M2 2L2 48L48 48L48 11.0704L38.9296 2L2 2Z' fill={BLACK} fillOpacity='0.35' />
      <path ref={pathFGFillRef} d='M2 2L2 48L48 48L48 11.0704L38.9296 2L2 2Z' fill='url(#redTile)' />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          ref={pathBGStrokeRef}
          d='M1 48L1 49L2 49L48 49L49 49L49 48L49 11.0704L49 10.6562L48.7071 10.3633L39.6367 1.29289L39.3438 1L38.9296 1L2 1L1 1L1 2L1 48Z'
          stroke={RED}
          strokeOpacity='0.6'
          strokeWidth='2'
        />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

export default IconButtonDefault