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
  callToAction = false,
  svgIcon
}: {
  svgRef?: React.RefObject<SVGSVGElement>
  pathBGFillRef?: React.RefObject<SVGPathElement>
  pathBGStrokeRef?: React.RefObject<SVGPathElement>
  pathFGFillRef?: React.RefObject<SVGPathElement>
  callToAction?: boolean
  svgIcon: JSX.Element
}) => {
  const dummyRef = useRef(null)

  const primaryColor = callToAction ? ORANGE : RED
  const secondaryColor = callToAction ? ORANGE_DARK : BLUE_DARK
  const filterBlur = callToAction ? 'url(#OrangeCRTBlur1) url(#OrangeCRTBlur2)' : 'url(#RedCRTBlur1) url(#RedCRTBlur2)'

  return (
    <>
      <svg width='75' height='75' viewBox='0 0 75 75' fill='none' ref={svgRef || dummyRef}>
        <path ref={pathBGFillRef || dummyRef} d='M2 2L2 72L72 72L72 15.8028L58.1972 2L2 2Z' fill={secondaryColor} />

        <path ref={pathFGFillRef || dummyRef} d='M2 2L2 72L72 72L72 15.8028L58.1972 2L2 2Z' fill='url(#blueTile)' />

        <path
          ref={pathBGStrokeRef || dummyRef}
          d='M0 74L8.82441e-07 0L59.0256 7.03873e-07L74 14.9744L74 74L0 74ZM72 15.8028L72 72L2 72L2 2L58.1972 2L72 15.8028Z'
          fill={secondaryColor}
          fillOpacity={0.6}
        />
        <RedCRTBlur />
        <OrangeCRTBlur />
        <g filter={filterBlur}>
          <path
            ref={pathBGStrokeRef || dummyRef}
            d='M0 74L8.82441e-07 0L59.0256 7.03873e-07L74 14.9744L74 74L0 74ZM72 15.8028L72 72L2 72L2 2L58.1972 2L72 15.8028Z'
            fill={primaryColor}
            fillRule='evenodd'
          />
          {svgIcon}
        </g>
        {BLUE_TILE_PATTERN}
      </svg>
    </>
  )
}

export default IconSmall
