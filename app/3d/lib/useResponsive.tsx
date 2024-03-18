import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { useCameraSettings } from '@/app/libs/useCameraSettings'
import { ASPECT_RATIO_OFFSET, HTML_SCALE_RESPONSIVE, OFFSET_Y_VALUES, POSITION_REF_RESPONSIVE } from './responsiveValues'
import { LG_BREAKPOINT, MD_BREAKPOINT, SM_BREAKPOINT, XL_BREAKPOINT, _2XL_BREAKPOINT, _3XL_BREAKPOINT } from '@/app/libs/breakPoints'
import { useScreenSize } from '@/app/libs/useScreenSize'

export const useResponsive = (currentRouteSelection: number | null, currentPortfolioSelection: string | null) => {
  const tl = useRef(gsap.timeline())
  const [homePanelExpanded, setHomePanelExpanded] = useState(false)
  const screenSize = useScreenSize()
  const initialPosition = POSITION_REF_RESPONSIVE[screenSize]
  const [position, setPosition] = useState<[number, number, number]>(initialPosition)
  const positionRef = useRef<[number, number, number]>(initialPosition)
  const htmlRef = useRef<HTMLDivElement>(null)
  const newYRef = useRef(0)
  const { cameraTarget, fov } = useCameraSettings()
  const [offset, setOffset] = useState(0)
  const htmlScale = HTML_SCALE_RESPONSIVE[screenSize]

  useEffect(() => {
    const newPosition = POSITION_REF_RESPONSIVE[screenSize]
    setPosition(newPosition)
    positionRef.current = newPosition
  }, [screenSize])

  useEffect(() => {
    const logAspectRatioAndUpdateOffset = () => {
      const aspectRatio = window.innerHeight / window.innerWidth
      let newOffset = 0

      for (const range of ASPECT_RATIO_OFFSET[screenSize]) {
        if (aspectRatio >= range.min && aspectRatio < range.max) {
          newOffset = range.offset
          console.log('newOffset:', newOffset, 'aspectRatio:', aspectRatio, 'range:', range)
          break
        }
      }

      setOffset(newOffset)
    }

    logAspectRatioAndUpdateOffset()
    window.addEventListener('resize', logAspectRatioAndUpdateOffset)

    return () => {
      window.removeEventListener('resize', logAspectRatioAndUpdateOffset)
    }
  }, [screenSize])

  const moveHTMLPanel = useCallback(
    (newY: number) => {
      tl.current.kill()
      const tempObj = { y: position[1] }
      tl.current = gsap.timeline()

      tl.current.to(tempObj, {
        duration: 0.35,
        ease: 'circ.out',
        y: newY,
        onUpdate: () => {
          const newPosition: [number, number, number] = [positionRef.current[0], tempObj.y, positionRef.current[2]]
          positionRef.current = newPosition
          setPosition(newPosition)
        }
      })
    },
    [position]
  )

  useEffect(() => {
    if (homePanelExpanded) {
      newYRef.current = OFFSET_Y_VALUES[screenSize]['7']
    } else if (currentRouteSelection === 1 && currentPortfolioSelection !== null) {
      newYRef.current = OFFSET_Y_VALUES[screenSize]['8']
    } else if (currentRouteSelection !== null) {
      newYRef.current = OFFSET_Y_VALUES[screenSize][currentRouteSelection.toString()]
    } else {
      newYRef.current = OFFSET_Y_VALUES[screenSize]['6']
    }

    const newYWithOffset = newYRef.current + offset
    moveHTMLPanel(newYWithOffset)
  }, [currentRouteSelection, currentPortfolioSelection, homePanelExpanded, offset, screenSize])

  return {
    htmlRef,
    setPosition,
    position,
    fov,
    cameraTarget,
    homePanelExpanded,
    setHomePanelExpanded,
    htmlScale
  }
}

// getFov is a helper function that returns the Field of View (FOV) based on the viewport width.
// It uses different FOV values for different viewport widths to ensure the best user experience on all devices.
export const getFov = (width: number): number => {
  switch (true) {
    case width <= SM_BREAKPOINT:
      return 85 // Mobile devices
    case width <= MD_BREAKPOINT:
      return 68 // Desktop Min
    case width <= LG_BREAKPOINT:
      return 35 // Desktop Min
    case width <= XL_BREAKPOINT:
      return 30 // Desktop Med
    case width <= _2XL_BREAKPOINT:
      return 29 // Desktop 2xl
    case width <= _3XL_BREAKPOINT:
      return 28 // Desktop 3xl
    default:
      return 26 // Widescreen Max
  }
}
