import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { useCameraSettings } from '@/app/libs/useCameraSettings'
import { HTML_SCALE_RESPONSIVE, POSITION_REF_RESPONSIVE } from './responsiveValues'
import { LG_BREAKPOINT, MD_BREAKPOINT, SM_BREAKPOINT, XL_BREAKPOINT, _2XL_BREAKPOINT, _3XL_BREAKPOINT } from '@/app/libs/breakPoints'
import { useScreenSize } from '@/app/libs/useScreenSize'

export const useResponsive = (currentRouteSelection: number | null, currentPortfolioSelection: string | null) => {
  const [homePanelExpanded, setHomePanelExpanded] = useState(false)
  const screenSize = useScreenSize()
  const initialPosition = POSITION_REF_RESPONSIVE[screenSize]
  const [position, setPosition] = useState<[number, number, number]>(initialPosition)
  const positionRef = useRef<[number, number, number]>(initialPosition)
  const htmlRef = useRef<HTMLDivElement>(null)
  const { cameraTarget, fov } = useCameraSettings()
  const htmlScale = HTML_SCALE_RESPONSIVE[screenSize]

  useEffect(() => {
    const newPosition = POSITION_REF_RESPONSIVE[screenSize]
    setPosition(newPosition)
    positionRef.current = newPosition
  }, [screenSize])

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
