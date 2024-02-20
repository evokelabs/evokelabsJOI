import React, { useRef, useState } from 'react'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'
import { BLUE_DARK, RED } from '../libs/UIConstants'
import RedCRTBlur from './libs/RedCRTBlur'
import useButtonEventsController from './libs/useButtonEventsController'
import useButtonInteractionController from './libs/useButtonInteractionController'

const IconClose = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pathBGFillRef = useRef<SVGRectElement | null>(null)
  const pathFGFillRef = useRef<SVGRectElement | null>(null)
  const pathBGStrokeRef = useRef<SVGPathElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useButtonEventsController({
    svg: svgRef.current,
    setIsHovered,
    setIsMouseDown,
    setIsActive
  })

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
    <div className='cursor-pointer relative left-1.5' style={{ pointerEvents: isActive ? 'none' : 'all' }}>
      <svg width='44' height='34' viewBox='-1 0 44 34' ref={svgRef}>
        <rect ref={pathBGFillRef} x='0' y='0' width='34' height='34' fill={BLUE_DARK} fillOpacity='0.85' />
        <rect ref={pathFGFillRef} x='0' y='0' width='34' height='34' fill={RED} fillOpacity='0.1' />
        <rect x='0' y='0' width='34' height='34' fill='url(#redTile)' />
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <rect x='0' y='1' width='34' height='32' stroke={RED} strokeWidth='2' fillOpacity='0' />
          <path
            ref={pathBGStrokeRef}
            d='M23.338 8H25.9746L18.3183 17L26 26H23.338L17 18.575L10.6366 26H8L15.6563 17L8 8H10.6366L17 15.425L23.338 8Z'
            fill={RED}
          />
        </g>
        {RED_TILE_PATTERN}
      </svg>
    </div>
  )
}

export default IconClose
