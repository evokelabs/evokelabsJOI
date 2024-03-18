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

export const getFov = (width: number): number => {
  const isPortrait = window.innerHeight > window.innerWidth
  switch (true) {
    case width <= SM_BREAKPOINT:
      return isPortrait ? 90 : 85 // Mobile devices
    case width <= MD_BREAKPOINT:
      return isPortrait ? 70 : 68 // Desktop Min
    case width <= LG_BREAKPOINT:
      return isPortrait ? 40 : 35 // Desktop Min
    case width <= XL_BREAKPOINT:
      return isPortrait ? 35 : 30 // Desktop Med
    case width <= _2XL_BREAKPOINT:
      return isPortrait ? 34 : 29 // Desktop 2xl
    case width <= _3XL_BREAKPOINT:
      return isPortrait ? 33 : 26 // Desktop 3xl
    default:
      return isPortrait ? 30 : 26 // Widescreen Max
  }
}
