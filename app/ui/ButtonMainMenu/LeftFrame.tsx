import { useRef } from 'react'
import { TileFill } from '../libs/TileFill'
import RedCRTBlur from '../libs/RedCRTBlur'
import { BLACK, RED } from '@/app/libs/UIConstants'
import useButtonInteractionController from '../libs/useButtonInteractionController'

const LeftFrame = ({ isHovered, isActive, isMouseDown }: { isHovered: boolean; isActive: boolean; isMouseDown: boolean }) => {
  const svgRef = useRef(null)
  const pathBGFillRef = useRef(null)
  const pathBGStrokeRef = useRef(null)
  const pathFGFillRef = useRef(null)

  useButtonInteractionController({
    isHovered,
    isActive,
    isMouseDown,
    svgRef,
    pathBGFillRef,
    pathBGStrokeRef,
    pathFGFillRef
  })

  return (
    <svg width='16' height='68' viewBox='0 0 16 68' fill='none' ref={svgRef}>
      <RedCRTBlur />

      <path
        ref={pathBGFillRef}
        d='M14.0019 2L14.002 66L9 66L2.00195 59L2.00195 49L7 44L7 25L2.00195 20L2.00195 8.99999L9 2L14.0019 2Z'
        fill={BLACK}
        fill-opacity='0.85'
      />

      <path
        d='M14.0019 2L14.002 66L9 66L2.00195 59L2.00195 49L7 44L7 25L2.00195 20L2.00195 8.99999L9 2L14.0019 2Z'
        fill='url(#LeftFramePattern)'
        fill-opacity='0.3'
      />
      <path
        ref={pathFGFillRef}
        d='M14.0019 2L14.002 66L9 66L2.00195 59L2.00195 49L7 44L7 25L2.00195 20L2.00195 8.99999L9 2L14.0019 2Z'
        fill={RED}
        fill-opacity='0.1'
      />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          ref={pathBGStrokeRef}
          d='M14.002 67L15.002 67L15.002 66L15.0019 2L15.0019 1L14.0019 1L9 1L8.5857 1L8.29279 1.29299L1.29475 8.29299L1.00195 8.58586L1.00195 8.99999L1.00195 20L1.00195 20.4141L1.29471 20.707L6 25.4141L6 43.5859L1.29471 48.293L1.00195 48.5859L1.00195 49L1.00195 59L1.00195 59.4141L1.29475 59.707L8.29279 66.707L8.58571 67L9 67L14.002 67Z'
          stroke={RED}
          stroke-opacity='0.6'
          stroke-width='2'
        />
      </g>
      <defs>
        <pattern id='LeftFramePattern' patternContentUnits='objectBoundingBox' width='0.266667' height='0.05'>
          <use xlinkHref='#IconLeftFrame' transform='scale(0.0666667 0.0125)' />
        </pattern>
        <image id='IconLeftFrame' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

export default LeftFrame
