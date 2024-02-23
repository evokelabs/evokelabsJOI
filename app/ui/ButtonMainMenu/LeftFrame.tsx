import { useRef } from 'react'
import RedCRTBlur from '../libs/RedCRTBlur'
import OrangeCRTBlur from '../libs/OrangeCRTBlur'
import { BLACK, ORANGE, RED } from '@/app/libs/UIConstants'
import useButtonInteractionController from '../libs/useButtonInteractionController'
import { RED_TILE_PATTERN } from '../libs/TitleFillsPatterns'

const LeftFrame = ({
  isHovered,
  isActive,
  isMouseDown,
  callToAction = false
}: {
  isHovered: boolean
  isActive: boolean
  isMouseDown: boolean
  callToAction?: boolean
}) => {
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
    pathFGFillRef,
    callToAction
  })

  const primaryColor = callToAction ? ORANGE : RED
  const secondaryColor = BLACK
  const filterBlur = callToAction ? 'url(#OrangeCRTBlur1) url(#OrangeCRTBlur2)' : 'url(#RedCRTBlur1) url(#RedCRTBlur2)'

  return (
    <svg width='16' height='68' viewBox='0 0 16 68' fill='none' ref={svgRef}>
      <path
        ref={pathBGFillRef}
        d='M14 2L14 66L8.99805 66L2 59L2 49L6.99805 44L6.99805 25L2 20L2 8.99999L8.99805 2L14 2Z'
        fill={secondaryColor}
        fillOpacity='0.85'
      />

      <path
        ref={pathFGFillRef}
        d='M14 2L14 66L8.99805 66L2 59L2 49L6.99805 44L6.99805 25L2 20L2 8.99999L8.99805 2L14 2Z'
        fill={primaryColor}
        fillOpacity='0.1'
      />

      <path d='M14 2L14 66L8.99805 66L2 59L2 49L6.99805 44L6.99805 25L2 20L2 8.99999L8.99805 2L14 2Z' fill='url(#redTile)' />
      <RedCRTBlur />
      <OrangeCRTBlur />
      <g filter={filterBlur}>
        <path
          ref={pathBGStrokeRef}
          d='M16 68L8.16946 68L-6.91895e-07 59.8283L2.28507e-07 48.1718L4.99805 43.1718L4.99805 25.8282L-1.79309e-07 20.8282L-2.97249e-07 8.17173L8.16946 7.06829e-07L16 0L16 68ZM6.99805 25L6.99805 44L2 49L2 59L8.99805 66L14 66L14 2L8.99805 2L2 8.99999L2 20L6.99805 25Z'
          fill={primaryColor}
          fillOpacity='0.6'
          fillRule='evenodd'
          clipRule='evenodd'
        />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

export default LeftFrame
