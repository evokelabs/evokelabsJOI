import { TileFill } from './libs/TileFill'
import RedCRTBlur from './libs/RedCRTBlur'
import { BLUE_DARK, RED } from '../libs/UIConstants'
import { useRef, useState } from 'react'
import useButtonEventsController from './libs/useButtonEventsController'
import useButtonInteractionController from './libs/useButtonInteractionController'
import { RED_TILE_PATTERN } from './libs/SVGTileFills'

const ButtonSocial = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pathBGFillRef = useRef<SVGPathElement | null>(null)
  const pathFGFillRef = useRef<SVGPathElement | null>(null)
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
    <div className={'cursor-pointer w-fit'} style={{ pointerEvents: isActive ? 'none' : 'all' }}>
      <svg width='66' height='47' viewBox='0 0 66 47' fill='none' ref={svgRef}>
        <path ref={pathBGFillRef} d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill={BLUE_DARK} fillOpacity='0.85' />
        <path ref={pathFGFillRef} d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill={RED} fillOpacity='0.1' />
        <path d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill='url(#redTile)' />
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path
            ref={pathBGStrokeRef}
            d='M2 46H1V45V2V1H2H45H46V2V34.08V34.4876L45.7151 34.7791L35.0393 45.6991L34.7451 46H34.3242H2Z'
            stroke={RED}
            strokeOpacity='0.6'
            strokeWidth='2'
          />
        </g>
        {RED_TILE_PATTERN}
      </svg>
    </div>
  )
}

export default ButtonSocial
