import React, { useRef, useState } from 'react'
import { TileFill } from './libs/TileFill'
import { BLACK, RED, TEAL } from '../libs/UIConstants'
import useButtonInteractionController from './libs/useButtonInteractionController'
import RedCRTBlur from './libs/RedCRTBlur'
import IconButtonDefault from './IconButtonDefault'
import useButtonEventsController from './libs/useButtonEventsController'

const SVGLarge = ({
  svgRef,
  isActive,
  isHovered,
  title,
  isMouseDown,
  pathBGFillRef,
  pathFGFillRef,
  pathBGStrokeRef
}: {
  svgRef: React.RefObject<SVGSVGElement>
  isActive: boolean
  isHovered: boolean
  title: string
  isMouseDown: boolean
  pathBGFillRef: React.RefObject<SVGPathElement>
  pathFGFillRef: React.RefObject<SVGPathElement>
  pathBGStrokeRef: React.RefObject<SVGPathElement>
}) => {
  return (
    <div className={'relative cursor-pointer w-fit '} style={{ pointerEvents: isActive ? 'none' : 'all' }}>
      <svg ref={svgRef} width='340' height='80' viewBox='-8 0 340 80' fill='none'>
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path ref={pathBGFillRef} d='M322 47V4H2V71H298L322 47Z' fill={BLACK} fillOpacity='0.85' />
          <path ref={pathFGFillRef} d='M322 47V4H2V71H298L322 47Z' fill={RED} fillOpacity='0.1' />
          <path d='M322 47V4H2V71H298L322 47Z' fill='url(#ButtonDefaultPattern)' fillOpacity='0.1' />

          <path
            ref={pathBGStrokeRef}
            d='M322 3H323V4V47V47.4142L322.707 47.7071L298.707 71.7071L298.414 72H298H2H1V71V4V3H2H322Z'
            stroke={RED}
            strokeOpacity='0.6'
            strokeWidth='2'
          />
        </g>
        <defs>
          <pattern id='ButtonDefaultPattern' patternContentUnits='objectBoundingBox' width='0.01' height='0.0477612'>
            <use xlinkHref='#ButtonDefaultOverlay' transform='scale(0.0025 0.0119403)' />
          </pattern>
          <image id='ButtonDefaultOverlay' width='4' height='4' xlinkHref={TileFill} />
        </defs>
      </svg>
      <div className='absolute bottom-0.5 flex flex-row items-center justify-between w-full h-full pl-5 pr-10 pointer-events-none'>
        <IconButtonDefault isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />

        <p className={'font-rajdhani text-[2rem] font-semibold text-teal-blur'}>{title}</p>
      </div>
    </div>
  )
}

const SVGDefault = ({
  svgRef,
  isActive,
  isHovered,
  title,
  isMouseDown,
  pathBGFillRef,
  pathFGFillRef,
  pathBGStrokeRef
}: {
  svgRef: React.RefObject<SVGSVGElement>
  isActive: boolean
  isHovered: boolean
  title: string
  isMouseDown: boolean
  pathBGFillRef: React.RefObject<SVGPathElement>
  pathFGFillRef: React.RefObject<SVGPathElement>
  pathBGStrokeRef: React.RefObject<SVGPathElement>
}) => {
  return (
    <div className={'relative cursor-pointer w-fit'} style={{ pointerEvents: isActive ? 'none' : 'all' }}>
      <svg ref={svgRef} width='264' height='71' viewBox='0 0 264 71' fill='none'>
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path ref={pathBGFillRef} d='M262 45V2H2V69H238L262 45Z' fill={BLACK} fillOpacity='0.85' />
          <path ref={pathFGFillRef} d='M262 45V2H2V69H238L262 45Z' fill={RED} fillOpacity='0.1' />
          <path d='M262 45V2H2V69H238L262 45Z' fill='url(#ButtonDefaultPattern)' fillOpacity='0.1' />

          <path
            ref={pathBGStrokeRef}
            d='M262 1H263V2V45V45.4142L262.707 45.7071L238.707 69.7071L238.414 70H238H2H1V69V2V1H2H262Z'
            stroke={RED}
            strokeOpacity='0.6'
            strokeWidth='2'
          />
        </g>
        <defs>
          <pattern id='ButtonDefaultPattern' patternContentUnits='objectBoundingBox' width='0.01' height='0.0477612'>
            <use xlinkHref='#ButtonDefaultOverlay' transform='scale(0.0025 0.0119403)' />
          </pattern>
          <image id='ButtonDefaultOverlay' width='4' height='4' xlinkHref={TileFill} />
        </defs>
      </svg>
      <div className='absolute bottom-0 flex flex-row items-center justify-between w-full h-full pl-2 pr-10 pointer-events-none'>
        <IconButtonDefault isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
        <p className={'font-rajdhani text-[2rem] font-semibold text-teal-blur'}>{title}</p>
      </div>
    </div>
  )
}

const ButtonDefault = ({ title = 'CLOSE' }: { title?: string }) => {
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

  return title.length > 8 ? (
    <SVGLarge
      svgRef={svgRef}
      isActive={isActive}
      isHovered={isHovered}
      title={title}
      isMouseDown={isMouseDown}
      pathBGFillRef={pathBGFillRef}
      pathFGFillRef={pathFGFillRef}
      pathBGStrokeRef={pathBGStrokeRef}
    />
  ) : (
    <SVGDefault
      svgRef={svgRef}
      isActive={isActive}
      isHovered={isHovered}
      title={title}
      isMouseDown={isMouseDown}
      pathBGFillRef={pathBGFillRef}
      pathFGFillRef={pathFGFillRef}
      pathBGStrokeRef={pathBGStrokeRef}
    />
  )
}

export default ButtonDefault
