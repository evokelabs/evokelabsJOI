import React, { useContext, useRef, useState } from 'react'
import { BLACK, RED } from '../libs/UIConstants'
import useButtonInteractionController from './libs/useButtonInteractionController'
import RedCRTBlur from './libs/RedCRTBlur'
import IconButtonDefault from './IconButtonDefault'
import useButtonEventsController from './libs/useButtonEventsController'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'
import CloseSVG from './svg/button/CloseSVG'
import { RoutesContext } from '../libs/RoutesContext'

type SVGButtonProps = {
  svgRef: React.RefObject<SVGSVGElement>
  isActive: boolean
  isHovered: boolean
  label: string
  isMouseDown: boolean
  pathBGFillRef: React.RefObject<SVGPathElement>
  pathFGFillRef: React.RefObject<SVGPathElement>
  pathBGStrokeRef: React.RefObject<SVGPathElement>
  buttonProps: ButtonProps
  svgIcon: JSX.Element
  link?: string
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
  label,
  isMouseDown,
  pathBGFillRef,
  pathFGFillRef,
  pathBGStrokeRef,
  buttonProps: { width, viewBox, d1, d2 },
  svgIcon,
  link
}) => {
  const { setCurrentPortfolioSelection, setCurrentRouteSelection } = useContext(RoutesContext)

  const handleClick = () => {
    switch (label) {
      case 'CLOSE':
        setCurrentRouteSelection(null)
        setCurrentPortfolioSelection(null)
        break
      case 'FIX A BOOKING':
        setCurrentRouteSelection(5)
        break
      case 'HARDCOPY':
        window.open('/resume/AdrianPikios-Evokelabs-Resume.pdf', '_blank')
        break
      case '4K VERSION':
        window.open('https://www.youtube.com/evokelabs', '_self')
        break
      case 'SEND AN EMAIL':
        window.open('mailto:adrian@evokelabs.com?subject=Enquiry from Evokelabs.com', '_self')
        break
      case 'BACK':
        setCurrentRouteSelection(1)
        break
      case 'LAUNCH':
        if (link) {
          window.open(link, '_blank')
        } else {
          console.log('No link provided for LAUNCH')
        }
        break
      // Add more cases as needed
      // case 'OTHER_LABEL':
      //   // Do something else
      //   break
      default:
        console.log(`Unhandled label: ${label}`)
    }
  }
  return (
    <div className={`relative cursor-pointer uppercase w-fit`} style={{ pointerEvents: isActive ? 'none' : 'all' }} onClick={handleClick}>
      <svg ref={svgRef} width={width} height='71' viewBox={viewBox}>
        <path d={d1} fill={BLACK} ref={pathBGFillRef} />
        <path d={d1} fill={RED} ref={pathFGFillRef} />
        <path d={d1} fill='url(#redTile)' />
        <RedCRTBlur />
        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path fillRule='evenodd' clipRule='evenodd' ref={pathBGStrokeRef} d={d2} fill={RED} fillOpacity='0.6' />
        </g>
        {RED_TILE_PATTERN}
      </svg>
      <div className='absolute bottom-0 flex flex-row items-center justify-between w-full h-full pl-2.5 pr-12 pointer-events-none'>
        <IconButtonDefault isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
        <div className='absolute ml-0.5 w-[2.875rem] h-[2.875rem]'>{svgIcon}</div>
        <p className={'font-rajdhani text-[2rem] font-semibold text-teal-blur'}>{label}</p>
      </div>
    </div>
  )
}

const ButtonDefault = ({ label = 'CLOSE', svgIcon = <CloseSVG />, link }: { label?: string; svgIcon?: JSX.Element; link?: string }) => {
  const buttonControllers = useButtonControllers()

  return label.length > 8 ? (
    <SVGButton {...buttonControllers} label={label} buttonProps={BUTTON_LARGE} svgIcon={svgIcon} link={link} />
  ) : (
    <SVGButton {...buttonControllers} label={label} buttonProps={BUTTON_DEFAULT} svgIcon={svgIcon} link={link} />
  )
}

export default ButtonDefault
