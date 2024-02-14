import { MutableRefObject, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { BLACK, BLUE_DARK, RED, RED_DARK, RED_DULL, UI_DURATION_TIME } from '@/app/libs/UIConstants'

const useButtonIconController = ({
  isHovered,
  isActive,
  isMouseDown,
  svgRef,
  pathBGFillRef,
  pathBGStrokeRef
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
    const pathBGStroke = pathBGStrokeRef.current
    const pathBGFill = pathBGFillRef.current
    if (svg) {
      if (isHovered) {
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': 1 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(pathBGFill, { attr: { fill: BLACK, 'fill-opacity': 0.5 }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      } else {
        gsap.to(pathBGStroke, { attr: { 'stroke-opacity': 0.6, strokeColor: RED }, duration: UI_DURATION_TIME, ease: 'power1.out' })
      }

      if (isActive) {
        gsap.fromTo(
          pathBGFill,
          { attr: { fill: BLACK, 'fill-opacity': 0.5 } },
          { attr: { fill: BLACK, 'fill-opacity': 0.4 }, duration: 0.5, ease: 'power1.out' }
        )
      }
    }
  }, [isHovered, isActive, isMouseDown, svgRef, pathBGStrokeRef, pathBGFillRef])

  return { buttonTextRef, leftFrameRef, mainFrameRef }
}

export default useButtonIconController
