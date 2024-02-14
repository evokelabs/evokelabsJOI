import { useRef } from 'react'
import { TileFill } from './libs/TileFill'
import RedCRTBlur from './libs/RedCRTBlur'
import { BLUE_DARK, RED } from '../libs/UIConstants'
import useButtonIconController from './libs/useButtonIconController'

const IconSmallMainMenu = ({ isHovered, isActive, isMouseDown }: { isHovered: boolean; isActive: boolean; isMouseDown: boolean }) => {
  const svgRef = useRef(null)
  const pathBGFillRef = useRef(null)
  const pathBGStrokeRef = useRef(null)
  const pathFGFillRef = useRef(null)

  useButtonIconController({ isHovered, isActive, isMouseDown, svgRef, pathBGFillRef, pathBGStrokeRef, pathFGFillRef })

  return (
    <svg width='90' height='74' viewBox='-8 0 90 74' fill='none' ref={svgRef}>
      <path
        ref={pathBGFillRef}
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill={BLUE_DARK}
      />

      <path
        ref={pathFGFillRef}
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill='url(#IconSmallPattern)'
        fillOpacity='0.3'
      />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          ref={pathBGStrokeRef}
          d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
          stroke={RED}
          strokeOpacity='0.6'
          strokeWidth='2'
        />
      </g>
      <defs>
        <pattern id='IconSmallPattern' patternContentUnits='objectBoundingBox' width='0.0457143' height='0.0457143'>
          <use xlinkHref='#gridOverlay' transform='scale(0.0114286)' />
        </pattern>
        <image id='gridOverlay' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

export default IconSmallMainMenu
