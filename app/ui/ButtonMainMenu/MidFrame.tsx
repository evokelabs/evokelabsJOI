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
          d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z'
          fill={secondaryColor}
          fillOpacity='0.85'
        />

        <path
          ref={pathFGFillRef}
          d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z'
          fill={primaryColor}
          fillOpacity='0.1'
        />
        <path d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z' fill='url(#redTile)' />
        <path
          ref={pathBGStrokeRef}
          d='M2.00098 3H1.00098V4V98V99H2.00098H331.001H331.412L331.704 98.7109L344.704 85.8507L345.001 85.5572V85.1398V20V19H344.001H97.4152L81.7081 3.29289L81.4152 3H81.001H2.00098Z'
          stroke={primaryColor}
          strokeOpacity='0.6'
          strokeWidth='2'
        />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

export default MidFrame
