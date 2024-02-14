import { MutableRefObject, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { BLACK, RED, RED_DARK, RED_DULL, UI_DURATION_TIME } from '@/app/libs/UIConstants'

const useButtonInteractionController = ({
  isHovered,
  isActive,
  isMouseDown,
  svgRef,
  pathBGFillRef,
  pathBGStrokeRef,
  pathFGFillRef
}: {
  isHovered: boolean
  isActive: boolean
  isMouseDown: boolean
  svgRef: MutableRefObject<SVGSVGElement | null>
  pathBGFillRef: MutableRefObject<SVGPathElement | null>
  pathBGStrokeRef: MutableRefObject<SVGPathElement | null>
  pathFGFillRef: MutableRefObject<SVGPathElement | null>
}) => {
  const buttonTextRef = useRef<HTMLDivElement>(null)
  const leftFrameRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)
  const isActiveRef = useRef(isActive)

  useEffect(() => {
    isActiveRef.current = isActive
  }, [isActive])

  useEffect(() => {
    const svg = svgRef.current
    const pathBGFill = pathBGFillRef.current
    const pathBGStroke = pathBGStrokeRef.current
    const pathFGFill = pathFGFillRef.current
    if (svg) {
      console.log('is hovered', isHovered)
      if (isHovered) {
        gsap.to(pathBGFill, { attr: { fill: RED_DARK }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': 1 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      } else {
        gsap.to(pathBGFill, { attr: { fill: BLACK }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': 0.6, strokeColor: RED }, duration: UI_DURATION_TIME, ease: 'power1.out' })
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
    }
  }, [isHovered, isActive, isMouseDown, svgRef, pathBGFillRef, pathBGStrokeRef, pathFGFillRef])

  return { buttonTextRef, leftFrameRef, mainFrameRef }
}

export default useButtonInteractionController
