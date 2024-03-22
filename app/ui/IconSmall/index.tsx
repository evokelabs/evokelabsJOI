import React, { useRef } from 'react'
import RedCRTBlur from '../libs/RedCRTBlur'
import { BLACK, BLUE_DARK, ORANGE, ORANGE_DARK, RED, TEAL } from '@/app/libs/UIConstants'
import { BLUE_TILE_PATTERN } from '../libs/TitleFillsPatterns'
import OrangeCRTBlur from '../libs/OrangeCRTBlur'
import TealCRTBlur from '../libs/TealCRTBlur'

const IconSmall = ({
  svgRef,
  pathBGFillRef,
  pathBGStrokeRef,
  pathFGFillRef,
  callToAction = false,
  teal = false
}: {
  svgRef?: React.RefObject<SVGSVGElement>
  pathBGFillRef?: React.RefObject<SVGPathElement>
  pathBGStrokeRef?: React.RefObject<SVGPathElement>
  pathFGFillRef?: React.RefObject<SVGPathElement>
  callToAction?: boolean
  teal?: boolean
}) => {
  const dummyRef = useRef(null)

  const primaryColor = teal ? TEAL : callToAction ? ORANGE : RED
  const secondaryColor = callToAction ? ORANGE_DARK : BLACK
  const filterBlur = teal
    ? 'url(#TealCRTBlur1) url(#TealCRTBlur2)'
    : callToAction
    ? 'url(#OrangeCRTBlur1) url(#OrangeCRTBlur2)'
    : 'url(#RedCRTBlur1) url(#RedCRTBlur2)'

  return (
    <>
      <svg width='84' height='75' viewBox='0 0 84 75' fill='none' ref={svgRef || dummyRef}>
        <path ref={pathBGFillRef || dummyRef} d='M2 2L2 72L72 72L72 15.8028L58.1972 2L2 2Z' fill={secondaryColor} />

        <path ref={pathFGFillRef || dummyRef} d='M2 2L2 72L72 72L72 15.8028L58.1972 2L2 2Z' fill='url(#blueTile)' />

        <path
          ref={pathBGStrokeRef || dummyRef}
          d='M0 74L8.82441e-07 0L59.0256 7.03873e-07L74 14.9744L74 74L0 74ZM72 15.8028L72 72L2 72L2 2L58.1972 2L72 15.8028Z'
          fill={secondaryColor}
          fillOpacity={0.6}
        />
        <TealCRTBlur />
        <RedCRTBlur />
        <OrangeCRTBlur />
        <g filter={filterBlur}>
          <path
            ref={pathBGStrokeRef || dummyRef}
            d='M0 74L8.82441e-07 0L59.0256 7.03873e-07L74 14.9744L74 74L0 74ZM72 15.8028L72 72L2 72L2 2L58.1972 2L72 15.8028Z'
            fill={primaryColor}
            fillRule='evenodd'
            fillOpacity={0.6}
          />
        </g>
        {BLUE_TILE_PATTERN}
      </svg>
    </>
  )
}

export default IconSmall
