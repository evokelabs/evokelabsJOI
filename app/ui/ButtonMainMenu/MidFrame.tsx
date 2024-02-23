import { useRef } from 'react'
import RedCRTBlur from '../libs/RedCRTBlur'
import OrangeCRTBlur from '../libs/OrangeCRTBlur'
import { BLACK, ORANGE, RED } from '@/app/libs/UIConstants'
import useButtonInteractionController from '../libs/useButtonInteractionController'
import { RED_TILE_PATTERN } from '../libs/TitleFillsPatterns'

const MidFrame = ({
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
    <svg width='354' height='106' viewBox='0 0 354 106' fill='none' ref={svgRef}>
      <RedCRTBlur />
      <OrangeCRTBlur />
      <g filter={filterBlur}>
        <path
          ref={pathBGFillRef}
          d='M1.99902 98V4H80.999L96.999 20H343.999V85.1398L330.999 98H1.99902Z'
          fill={secondaryColor}
          fillOpacity='0.85'
        />

        <path
          ref={pathFGFillRef}
          d='M1.99902 98V4H80.999L96.999 20H343.999V85.1398L330.999 98H1.99902Z'
          fill={primaryColor}
          fillOpacity='0.1'
        />
        <path d='M1.99902 98V4H80.999L96.999 20H343.999V85.1398L330.999 98H1.99902Z' fill='url(#redTile)' />
        <path
          ref={pathBGStrokeRef}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M-0.000976562 2H81.8275L97.8275 18H345.999V85.9746L331.821 100H-0.000976562V2ZM96.999 20L80.999 4H1.99902V98H330.999L343.999 85.1398V20H96.999Z'
          fill={primaryColor}
          fillOpacity='0.6'
        />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

export default MidFrame
