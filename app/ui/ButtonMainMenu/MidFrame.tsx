import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TileFill } from '../libs/TileFill'
import RedCRTBlur from '../libs/RedCRTBlur'
import { BLACK, RED, RED_DARK, RED_DULL, UI_DURATION_TIME } from '@/app/libs/UIConstants'

const MidFrame = ({ isHovered, isActive, isMouseDown }: { isHovered: boolean; isActive: boolean; isMouseDown: boolean }) => {
  const svgRef = useRef(null)
  const pathBGFillRef = useRef(null)
  const pathBGStrokeRef = useRef(null)
  const pathFGFillRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    const pathBGFill = pathBGFillRef.current
    const pathBGStroke = pathBGStrokeRef.current
    const pathFGFill = pathFGFillRef.current
    if (svg) {
      if (isHovered) {
        gsap.to(pathBGFill, { attr: { fill: RED_DARK }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '1' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      } else {
        gsap.to(pathBGFill, { attr: { fill: BLACK }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '0.6', strokeColor: RED }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      }

      if (isMouseDown) {
        gsap.to(pathFGFill, { attr: { 'fill-opacity': '0.5' }, duration: 0, ease: 'power1.out' })
      } else {
        gsap.to(pathFGFill, { attr: { 'fill-opacity': '0.1' }, duration: 0, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '1' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      }

      if (isActive) {
        gsap.fromTo(
          pathFGFill,
          { attr: { fill: RED, 'fill-opacity': '0.5' } },
          { attr: { fill: RED_DULL, 'fill-opacity': '0.2' }, duration: UI_DURATION_TIME, ease: 'power1.out' }
        )
        gsap.fromTo(
          pathBGFill,
          { attr: { fill: RED_DARK, 'fill-opacity': '0.85' } },
          { attr: { fill: RED_DULL, 'fill-opacity': '1' }, duration: UI_DURATION_TIME, ease: 'power1.out' }
        )
      } else if (!isHovered) {
        gsap.to(pathFGFill, { attr: { 'fill-opacity': '0.1' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGFill, { attr: { fill: BLACK, 'fill-opacity': '0.85' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '0.6' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      }
    }
  }, [isHovered, isActive, isMouseDown])

  return (
    <svg width='354' height='106' viewBox='0 0 354 106' fill='none' ref={svgRef}>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path ref={pathBGFillRef} d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z' fill={BLACK} fillOpacity='0.85' />

        <path d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z' fill='url(#IconMidFrame)' fillOpacity='0.3' />

        <path ref={pathFGFillRef} d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z' fill={RED} fillOpacity='0.1' />

        <path
          ref={pathBGStrokeRef}
          d='M2.00098 3H1.00098V4V98V99H2.00098H331.001H331.412L331.704 98.7109L344.704 85.8507L345.001 85.5572V85.1398V20V19H344.001H97.4152L81.7081 3.29289L81.4152 3H81.001H2.00098Z'
          stroke={RED}
          strokeOpacity='0.6'
          strokeWidth='2'
        />
      </g>
      <defs>
        <pattern id='IconMidFrame' patternContentUnits='objectBoundingBox' width='0.00935673' height='0.0340426'>
          <use xlinkHref='#gridOverlay' transform='scale(0.00233918 0.00851064)' />
        </pattern>
        <image id='gridOverlay' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

export default MidFrame
