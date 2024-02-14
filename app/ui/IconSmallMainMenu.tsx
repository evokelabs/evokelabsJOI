import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TileFill } from './libs/TileFill'
import RedCRTBlur from './libs/RedCRTBlur'
import { BLUE_DARK, RED, UI_DURATION_TIME } from '../libs/UIConstants'

const IconSmallMainMenu = ({ isHovered, isActive, isMouseDown }: { isHovered?: boolean; isActive?: boolean; isMouseDown?: boolean }) => {
  const svgRef = useRef(null)
  const pathBGFillRef = useRef(null)
  const pathBGStrokeRef = useRef(null)
  const pathFGFillRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    const pathBGStroke = pathBGStrokeRef.current
    const pathBGFill = pathBGFillRef.current

    if (svg) {
      if (isHovered) {
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '1' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGFill, { attr: { 'fill-opacity': '0.5' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      } else {
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '0.6', strokeColor: RED }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGFill, { attr: { 'fill-opacity': '1' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      }

      if (isActive) {
        gsap.fromTo(
          pathBGFill,
          { attr: { 'fill-opacity': '0.5' } },
          { attr: { 'fill-opacity': '0.4' }, duration: UI_DURATION_TIME, ease: 'power1.out' }
        )
      }
    }
  }, [isHovered, isActive, isMouseDown])

  return (
    <svg width='90' height='74' viewBox='-8 0 90 74' fill='none' ref={svgRef}>
      <path
        ref={pathBGFillRef}
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill={BLUE_DARK}
      />

      <path
        ref={pathFGFillRef}
        d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
        fill='url(#IconSmallPattern)'
        fill-opacity='0.3'
      />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path
          ref={pathBGStrokeRef}
          d='M1 72L1 73L2 73L72 73L73 73L73 72L73 15.8028L73 15.3886L72.7071 15.0957L58.9043 1.29289L58.6114 1L58.1972 1L2 1L1 1L1 2L1 72Z'
          stroke={RED}
          stroke-opacity='0.6'
          stroke-width='2'
        />
      </g>
      <defs>
        <pattern id='IconSmallPattern' patternContentUnits='objectBoundingBox' width='0.0457143' height='0.0457143'>
          <use xlinkHref='#gridOverlay' transform='scale(0.0114286)' />
        </pattern>
        <image id='gridOverlay' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

export default IconSmallMainMenu
