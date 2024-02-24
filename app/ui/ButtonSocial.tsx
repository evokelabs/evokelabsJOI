import RedCRTBlur from './libs/RedCRTBlur'
import { BLACK, BLUE_DARK, ORANGE, RED } from '../libs/UIConstants'
import { useRef, useState } from 'react'
import useButtonEventsController from './libs/useButtonEventsController'
import useButtonInteractionController from './libs/useButtonInteractionController'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'

const ButtonSocial = ({ SVGIcon }: { SVGIcon: JSX.Element }) => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pathBGFillRef = useRef<SVGPathElement | null>(null)
  const pathFGFillRef = useRef<SVGPathElement | null>(null)
  const pathBGStrokeRef = useRef<SVGPathElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isActiveTemp, setIsActive] = useState(false)
  const isActive = false

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

  const primaryColor = RED
  const secondaryColor = BLACK

  return (
    <div className={'cursor-pointer w-fit'} style={{ pointerEvents: isActive ? 'none' : 'all' }}>
      <svg width='66' height='47' viewBox='0 0 66 47' fill='none' ref={svgRef}>
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path ref={pathBGFillRef} d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill={secondaryColor} fillOpacity='0.85' />
          <path ref={pathFGFillRef} d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill={primaryColor} fillOpacity='0.1' />
          <path d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill='url(#redTile)' />
          <path
            ref={pathBGStrokeRef}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 47H35.166L47 34.8952V0H0V47ZM34.3242 45L45 34.08V2H2V45H34.3242Z'
            fill={primaryColor}
            fillOpacity='0.6'
          />
          {SVGIcon}
        </g>
        {RED_TILE_PATTERN}
      </svg>
    </div>
  )
}

export default ButtonSocial
