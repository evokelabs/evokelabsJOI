import { TileFill } from './libs/TileFill'
import { gsap } from 'gsap'
import RedCRTBlur from './libs/RedCRTBlur'
import { BLACK, RED, RED_DARK, RED_DULL, UI_DURATION_TIME } from '../libs/UIConstants'
import { useEffect, useRef, useState } from 'react'

const ButtonSocial = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pathBGFillRef = useRef<SVGPathElement | null>(null)
  const pathFGFillRef = useRef<SVGPathElement | null>(null)
  const pathBGStrokeRef = useRef<SVGPathElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const svg = svgRef.current
    if (svg) {
      svg.addEventListener('mouseenter', () => {
        setIsHovered(true)
      })
      svg.addEventListener('mouseleave', () => {
        setIsHovered(false)
      })
      svg.addEventListener('mousedown', () => {
        setIsMouseDown(true)
      })
      svg.addEventListener('mouseup', () => {
        setIsMouseDown(false)
      })
      svg.addEventListener('click', () => {
        setIsActive(true)
      })
    }
  }, [])

  useEffect(() => {
    const pathBGFill = pathBGFillRef.current
    const pathBGStroke = pathBGStrokeRef.current
    const pathFGFill = pathFGFillRef.current
    if (isHovered) {
      gsap.to(pathBGFill, { attr: { fill: RED_DARK }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      gsap.to(pathBGStroke, { attr: { 'stroke-opacity': 1 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    } else {
      gsap.to(pathBGFill, { attr: { fill: BLACK }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      gsap.to(pathBGStroke, { attr: { 'stroke-opacity': 0.6 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    }
    if (isMouseDown) {
      gsap.to(pathFGFill, { attr: { 'fill-opacity': 0.5 }, duration: 0, ease: 'power1.out' })
    } else {
      gsap.to(pathFGFill, { attr: { 'fill-opacity': 0.1 }, duration: 0, ease: 'power1.out' })
      gsap.to(pathBGStroke, { attr: { 'stroke-opacity': 1 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    }
    if (isActive) {
      gsap.fromTo(
        pathFGFill,
        { attr: { fill: RED, 'fill-opacity': 0.5 } },
        { attr: { fill: RED_DULL, 'fill-opacity': 0.2 }, duration: UI_DURATION_TIME, ease: 'power1.out' }
      )
      gsap.fromTo(
        pathBGFill,
        { attr: { fill: RED_DARK, 'fill-opacity': 0.85 } },
        { attr: { fill: RED_DULL, 'fill-opacity': 1 }, duration: UI_DURATION_TIME, ease: 'power1.out' }
      )
    } else if (!isHovered) {
      gsap.to(pathFGFill, { attr: { 'fill-opacity': 0.1 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      gsap.to(pathBGFill, { attr: { fill: BLACK, 'fill-opacity': 0.85 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      gsap.to(pathBGStroke, { attr: { 'stroke-opacity': 0.6 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    }
  }, [isActive, isHovered, isMouseDown])

  return (
    <div className={'cursor-pointer w-fit'} style={{ pointerEvents: isActive ? 'none' : 'all' }}>
      <svg width='66' height='47' viewBox='-8 0 66 47' fill='none' ref={svgRef}>
        <RedCRTBlur />
        <path d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill='url(#pattern2)' fill-opacity='0.1' />
        <path d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill={RED} fill-opacity='0.1' ref={pathFGFillRef} />
        <path ref={pathBGFillRef} d='M34.3242 45H2V2H45V34.08L34.3242 45Z' fill={BLACK} fill-opacity='0.85' />

        <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
          <path
            ref={pathBGStrokeRef}
            d='M2 46H1V45V2V1H2H45H46V2V34.08V34.4876L45.7151 34.7791L35.0393 45.6991L34.7451 46H34.3242H2Z'
            stroke={RED}
            stroke-opacity='0.6'
            stroke-width='2'
          />
        </g>
        <defs>
          <pattern id='pattern2' patternContentUnits='objectBoundingBox' width='0.0744186' height='0.0744186'>
            <use xlinkHref='#gridOverlay' transform='scale(0.0186047)' />
          </pattern>
          <image id='gridOverlay' width='4' height='4' xlinkHref={TileFill} />
        </defs>
      </svg>
    </div>
  )
}

export default ButtonSocial
