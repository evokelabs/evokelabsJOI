import RedCRTBlur from './libs/RedCRTBlur'
import { BLACK, BLUE_DARK, ORANGE, RED } from '../libs/UIConstants'
import { useRef, useState } from 'react'
import useButtonEventsController from './libs/useButtonEventsController'
import useButtonInteractionController from './libs/useButtonInteractionController'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'

const ButtonAlternative = ({ SVGIcon }: { SVGIcon: (props: { isHovered: boolean }) => JSX.Element }) => {
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
      <svg width='60' height='47' viewBox='0 0 60 47' fill='none' ref={svgRef}>
        <RedCRTBlur />

        <path d='M2 2V45H8.45333L12.56 40.8718H35.44L39.5467 45H46V10.2564L37.7867 2H2Z' fill='#0E0E17' fill-opacity='0.85' />
        <g clip-path='url(#clip0_905_698)' filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path d='M2 2V45H8.45333L12.56 40.8718H35.44L39.5467 45H46V10.2564L37.7867 2H2Z' fill='#DE5456' fill-opacity='0.1' />
          <path d='M2 2V45H8.45333L12.56 40.8718H35.44L39.5467 45H46V10.2564L37.7867 2H2Z' fill='url(#pattern0)' fill-opacity='0.1' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 47V0H38.6182L48 9.43105V47H38.7152L34.6085 42.8718H13.3915L9.28483 47H0ZM12.56 40.8718H35.44L39.5467 45H46V10.2564L37.7867 2H2V45H8.45333L12.56 40.8718Z'
            fill={primaryColor}
            fillOpacity='0.6'
          />
        </g>

        {SVGIcon({ isHovered })}

        {RED_TILE_PATTERN}
      </svg>
    </div>
  )
}

export default ButtonAlternative
