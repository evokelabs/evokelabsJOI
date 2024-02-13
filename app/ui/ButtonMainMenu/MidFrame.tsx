import { useEffect, useRef } from 'react'
import RedBlur from '../libs/RedBlur'
import { TileFill } from '../libs/TileFill'
import gsap from 'gsap'

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
        console.log('isHovered', isHovered)
        gsap.to(pathBGFill, { attr: { fill: '#502124' }, duration: 0.225, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '1' }, duration: 0.225, ease: 'power1.out' })
      } else {
        gsap.to(pathBGFill, { attr: { fill: '#0E0E17' }, duration: 0.225, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '0.6', strokeColor: '#F75049' }, duration: 0.225, ease: 'power1.out' })
      }

      if (isMouseDown) {
        gsap.to(pathFGFill, { attr: { 'fill-opacity': '0.5' }, duration: 0, ease: 'power1.out' })
      } else {
        gsap.to(pathFGFill, { attr: { 'fill-opacity': '0.1' }, duration: 0, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '1' }, duration: 0.225, ease: 'power1.out' })
      }

      if (isActive) {
        gsap.to(pathFGFill, { attr: { 'fill-opacity': '0.2' }, duration: 0.225, ease: 'power1.out' })
        gsap.to(pathBGFill, { attr: { fill: '#AE3A36 ', 'fill-opacity': '1' }, duration: 0.225, ease: 'power1.out' })
      } else if (!isHovered) {
        gsap.to(pathFGFill, { attr: { 'fill-opacity': '0.1' }, duration: 0.225, ease: 'power1.out' })
        gsap.to(pathBGFill, { attr: { fill: '#0E0E17 ', 'fill-opacity': '0.85' }, duration: 0.225, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': '0.6' }, duration: 0.225, ease: 'power1.out' })
      }
    }
  }, [isHovered, isActive, isMouseDown])

  return (
    <svg width='354' height='106' viewBox='0 0 354 106' fill='none' ref={svgRef}>
      <RedBlur />
      <g filter='url(#filter0_d_817_1881) url(#dropshadow1) url(#dropshadow2)'>
        <path d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z' fill='url(#pattern-midframe)' fillOpacity='0.1' />

        <path
          ref={pathBGFillRef}
          d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z'
          fill='#0E0E17'
          fillOpacity='0.85'
        />

        <path ref={pathFGFillRef} d='M2.00098 98V4H81.001L97.001 20H344.001V85.1398L331.001 98H2.00098Z' fill='#DE5456' fillOpacity='0.1' />

        <path
          ref={pathBGStrokeRef}
          d='M2.00098 3H1.00098V4V98V99H2.00098H331.001H331.412L331.704 98.7109L344.704 85.8507L345.001 85.5572V85.1398V20V19H344.001H97.4152L81.7081 3.29289L81.4152 3H81.001H2.00098Z'
          stroke='#F75049'
          strokeOpacity='0.6'
          strokeWidth='2'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_817_1881'
          x='0.000976562'
          y='0'
          width='354'
          height='106'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dx='4' dy='2' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_817_1881' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_817_1881' result='shape' />
        </filter>
        <pattern id='pattern-midframe' patternContentUnits='objectBoundingBox' width='0.00935673' height='0.0340426'>
          <use xlinkHref='#image0_817_1881' transform='scale(0.00233918 0.00851064)' />
        </pattern>
        <image id='image0_817_1881' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

export default MidFrame
