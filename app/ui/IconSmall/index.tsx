import React, { useRef } from 'react'
import RedCRTBlur from '../libs/RedCRTBlur'
import { BLUE_DARK, ORANGE, ORANGE_DARK, RED } from '@/app/libs/UIConstants'
import { BLUE_TILE_PATTERN } from '../libs/TitleFillsPatterns'
import OrangeCRTBlur from '../libs/OrangeCRTBlur'

const IconSmall = ({
  svgRef,
  pathBGFillRef,
  pathBGStrokeRef,
  pathFGFillRef,
  callToAction = false
}: {
  svgRef?: React.RefObject<SVGSVGElement>
  pathBGFillRef?: React.RefObject<SVGPathElement>
  pathBGStrokeRef?: React.RefObject<SVGPathElement>
  pathFGFillRef?: React.RefObject<SVGPathElement>
  callToAction?: boolean
}) => {
  const dummyRef = useRef(null)

  const primaryColor = callToAction ? ORANGE : RED
  const secondaryColor = callToAction ? ORANGE_DARK : BLUE_DARK
  const filterBlur = callToAction ? 'url(#OrangeCRTBlur1) url(#OrangeCRTBlur2)' : 'url(#RedCRTBlur1) url(#RedCRTBlur2)'

  return (
    <svg width='90' height='74' viewBox='0 0 90 74' fill='none' ref={svgRef || dummyRef}>
      <path
        ref={pathBGFillRef || dummyRef}
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill={secondaryColor}
      />

      <path
        ref={pathFGFillRef || dummyRef}
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill='url(#blueTile)'
      />
      <RedCRTBlur />
      <OrangeCRTBlur />
      <g filter={filterBlur}>
        <path
          ref={pathBGStrokeRef || dummyRef}
          d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
          stroke={primaryColor}
          strokeOpacity='0.6'
          strokeWidth='2'
        />
      </g>
      {BLUE_TILE_PATTERN}
    </svg>
  )
}

export default IconSmall
