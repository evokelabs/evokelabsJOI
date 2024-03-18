import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { useCameraSettings } from '@/app/libs/useCameraSettings'
import { ASPECT_RATIO_OFFSET, OFFSET_Y_VALUES } from './responsiveValues'

export const useResponsive = (currentRouteSelection: number | null, currentPortfolioSelection: string | null) => {
  const tl = useRef(gsap.timeline())
  const [homePanelExpanded, setHomePanelExpanded] = useState(false)
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0])
  const positionRef = useRef<[number, number, number]>([-0.05, 0, 1.9])
  const htmlRef = useRef<HTMLDivElement>(null)
  const newYRef = useRef(0)
  const { cameraTarget, fov } = useCameraSettings()
  const [offset, setOffset] = useState(0)

  const getScreenSize = useCallback(() => {
    const width = window.innerWidth
    const breakpoints = [640, 768, 1024, 1280, 1536, 1850]
    const sizes = ['BASE', 'SM', 'MD', 'LG', 'XL', '2XL', '3XL']
    let size = '3XL'

    for (let i = 0; i < breakpoints.length; i++) {
      if (width < breakpoints[i]) {
        size = sizes[i]
        break
      }
    }

    return size
  }, [])

  useEffect(() => {
    const logAspectRatioAndUpdateOffset = () => {
      const aspectRatio = window.innerHeight / window.innerWidth
      let newOffset = 0
      const screenSize = getScreenSize()

      for (const range of ASPECT_RATIO_OFFSET[screenSize]) {
        if (aspectRatio >= range.min && aspectRatio < range.max) {
          newOffset = range.offset
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
  }, [getScreenSize])

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
    const screenSize = getScreenSize()
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
  }, [currentRouteSelection, currentPortfolioSelection, homePanelExpanded, offset])

  return {
    htmlRef,
    setPosition,
    position,
    fov,
    cameraTarget,
    homePanelExpanded,
    setHomePanelExpanded
  }
}
