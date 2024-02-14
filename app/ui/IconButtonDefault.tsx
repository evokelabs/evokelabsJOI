import { useRef } from 'react'
import { TileFill } from './libs/TileFill'
import { BLACK, RED } from '../libs/UIConstants'
import useButtonIconController from './libs/useButtonIconController'

const IconButtonDefault = ({ isHovered, isActive, isMouseDown }: { isHovered: boolean; isActive: boolean; isMouseDown: boolean }) => {
  const svgRef = useRef(null)
  const pathBGFillRef = useRef(null)
  const pathBGStrokeRef = useRef(null)
  const pathFGFillRef = useRef(null)

  useButtonIconController({ isHovered, isActive, isMouseDown, svgRef, pathBGFillRef, pathBGStrokeRef, pathFGFillRef })

  return (
    <svg width='50' height='50' viewBox='0 0 50 50' fill='none' ref={svgRef}>
      <path ref={pathBGFillRef} d='M2 2L2 48L48 48L48 11.0704L38.9296 2L2 2Z' fill={BLACK} fill-opacity='0.65' />
      <path ref={pathFGFillRef} d='M2 2L2 48L48 48L48 11.0704L38.9296 2L2 2Z' fill='url(#IconButtonDefaultPattern)' fill-opacity='0.3' />
      <path
        ref={pathBGStrokeRef}
        d='M1 48L1 49L2 49L48 49L49 49L49 48L49 11.0704L49 10.6562L48.7071 10.3633L39.6367 1.29289L39.3438 1L38.9296 1L2 1L1 1L1 2L1 48Z'
        stroke={RED}
        stroke-opacity='0.6'
        stroke-width='2'
      />
      <defs>
        <pattern id='IconButtonDefaultPattern' patternContentUnits='objectBoundingBox' width='0.0695652' height='0.0695652'>
          <use xlinkHref='#IconButtonDefaultImage' transform='scale(0.0173913)' />
        </pattern>
        <image id='IconButtonDefaultImage' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

export default IconButtonDefault
