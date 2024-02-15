import React, { useRef, useState } from 'react'
import { TileFill } from './libs/TileFill'
import { BLACK, RED } from '../libs/UIConstants'
import useButtonInteractionController from './libs/useButtonInteractionController'
import RedCRTBlur from './libs/RedCRTBlur'
import IconButtonDefault from './IconButtonDefault'
import useButtonEventsController from './libs/useButtonEventsController'

type SVGButtonProps = {
  svgRef: React.RefObject<SVGSVGElement>
  isActive: boolean
  isHovered: boolean
  title: string
  isMouseDown: boolean
  pathBGFillRef: React.RefObject<SVGPathElement>
  pathFGFillRef: React.RefObject<SVGPathElement>
  pathBGStrokeRef: React.RefObject<SVGPathElement>
  buttonProps: ButtonProps
}

type ButtonProps = {
  width: string
  viewBox: string
  d1: string
  d2: string
}

const BUTTON_LARGE: ButtonProps = {
  width: '342',
  viewBox: '0 0 342 71',
  d1: 'M322 45V2H2V69H298L322 45Z',
  d2: 'M324 0H0V71H298.828L324 45.8284V0ZM298 69L322 45V2H2V69H298Z'
}

const BUTTON_DEFAULT: ButtonProps = {
  width: '278',
  viewBox: '0 0 278 71',
  d1: 'M262 45V2H2V69H238L262 45Z',
  d2: 'M264 0H0V71H238.828L264 45.8284V0ZM238 69L262 45V2H2V69H238Z'
}

const useButtonControllers = () => {
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

  return {
    svgRef,
    isActive,
    isHovered,
    isMouseDown,
    pathBGFillRef,
    pathFGFillRef,
    pathBGStrokeRef
  }
}

const SVGButton: React.FC<SVGButtonProps> = ({
  svgRef,
  isActive,
  isHovered,
  title,
  isMouseDown,
  pathBGFillRef,
  pathFGFillRef,
  pathBGStrokeRef,
  buttonProps: { width, viewBox, d1, d2 }
}) => {
  return (
    <div className={'relative cursor-pointer w-fit left-3.5'} style={{ pointerEvents: isActive ? 'none' : 'all' }}>
      <svg ref={svgRef} width={width} height='71' viewBox={viewBox}>
        <path d={d1} fill={BLACK} ref={pathBGFillRef} />
        <path d={d1} fill={RED} ref={pathFGFillRef} />
        <path d={d1} fill='url(#ButtonDefaultPattern)' fillOpacity='0.1' />
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path fillRule='evenodd' clipRule='evenodd' ref={pathBGStrokeRef} d={d2} fill={RED} fillOpacity='0.6' />
        </g>
        <defs>
          <pattern id='ButtonDefaultPattern' patternContentUnits='objectBoundingBox' width='0.01' height='0.0477612'>
            <use xlinkHref='#ButtonDefaultOverlay' transform='scale(0.0025 0.0119403)' />
          </pattern>
          <image id='ButtonDefaultOverlay' width='4' height='4' xlinkHref={TileFill} />
        </defs>
      </svg>
      <div className='absolute bottom-0 flex flex-row items-center justify-between w-full h-full pl-2.5 pr-12 pointer-events-none'>
        <IconButtonDefault isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />

        <p className={'font-rajdhani text-[2rem] font-semibold text-teal-blur'}>{title}</p>
      </div>
    </div>
  )
}

const ButtonDefault = ({ title = 'CLOSE' }: { title?: string }) => {
  const buttonControllers = useButtonControllers()

  return title.length > 8 ? (
    <SVGButton {...buttonControllers} title={title} buttonProps={BUTTON_LARGE} />
  ) : (
    <SVGButton {...buttonControllers} title={title} buttonProps={BUTTON_DEFAULT} />
  )
}

export default ButtonDefault
