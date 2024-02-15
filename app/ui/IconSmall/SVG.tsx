import React, { useRef } from 'react'
import RedCRTBlur from '../libs/RedCRTBlur'
import { BLUE_DARK, RED } from '@/app/libs/UIConstants'
import { TileFill } from '../libs/TileFill'

const SVG = ({
  svgRef,
  pathBGFillRef,
  pathBGStrokeRef,
  pathFGFillRef
}: {
  svgRef?: React.RefObject<SVGSVGElement>
  pathBGFillRef?: React.RefObject<SVGPathElement>
  pathBGStrokeRef?: React.RefObject<SVGPathElement>
  pathFGFillRef?: React.RefObject<SVGPathElement>
}) => {
  const dummyRef = useRef(null)
  return (
    <svg width='90' height='74' viewBox='-8 0 90 74' fill='none' ref={svgRef || dummyRef}>
      <path
        ref={pathBGFillRef || dummyRef}
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill={BLUE_DARK}
      />

      <path
        ref={pathFGFillRef || dummyRef}
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill='url(#IconSmallPattern)'
        fillOpacity='0.3'
      />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          ref={pathBGStrokeRef || dummyRef}
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

export default SVG
