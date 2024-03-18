import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useCameraSettings } from '@/app/libs/useCameraSettings'

type Y_VALUES_TYPE = Record<string, Record<string, number>>

export const useResponsive = (currentRouteSelection: number | null, currentPortfolioSelection: string | null) => {
  let tl = gsap.timeline()
  //Position of HTML panel in 3D space
  const [homePanelExpanded, setHomePanelExpanded] = useState(false)
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0])
  const positionRef = useRef<[number, number, number]>([-0.05, 0, 1.9])
  const htmlRef = useRef<HTMLDivElement>(null)

  // Use useRef to preserve the value of newY over time
  const newYRef = useRef(0)

  // Camera settings
  const { cameraTarget, fov } = useCameraSettings()

  //Resizing Functions
  const [offset, setOffset] = useState(0)

  const getScreenSize = () => {
    const width = window.innerWidth

    if (width < 640) {
      return 'BASE'
    } else if (width >= 640 && width < 768) {
      return 'SM'
    } else if (width >= 768 && width < 1024) {
      return 'MD'
    } else if (width >= 1024 && width < 1280) {
      return 'LG'
    } else if (width >= 1280 && width < 1536) {
      return 'XL'
    } else if (width >= 1536 && width < 1850) {
      return '2XL'
    } else {
      return '3XL'
    }
  }

  const Y_VALUES: Y_VALUES_TYPE = {
    BASE: {
      0: 1.22,
      1: 1.22,
      2: 1.3,
      3: 1.22,
      4: 1.28,
      5: 1.22,
      6: 1.38, // Home Default
      7: 1.3, // Home Expanded
      8: 1.3 // Portfolio Item
    },
    SM: {
      0: 1.31,
      1: 1.31,
      2: 1.36,
      3: 1.31,
      4: 1.36,
      5: 1.31,
      6: 1.38, // Home Default
      7: 1.36, // Home Expanded
      8: 1.3 // Portfolio Item
    },
    MD: {
      0: 1.34,
      1: 1.34,
      2: 1.38,
      3: 1.34,
      4: 1.33,
      5: 1.4,
      6: 1.58, // Home Default
      7: 1.45, // Home Expanded
      8: 1.35 // Portfoio Item
    },
    LG: {
      0: 1.34,
      1: 1.34,
      2: 1.38,
      3: 1.38,
      4: 1.33,
      5: 1.4,
      6: 1.58, // Home Default
      7: 1.45, // Home Expanded
      8: 1.35 // Portfoio Item
    },
    XL: {
      0: 1.41,
      1: 1.41,
      2: 1.49,
      3: 1.41,
      4: 1.425,
      5: 1.51,
      6: 1.74, // Home Default
      7: 1.2, // Home Expanded
      8: 1.2 // Portfoio Item
    },
    '2XL': {
      0: 1.48,
      1: 1.48,
      2: 1.5,
      3: 1.48,
      4: 1.5,
      5: 1.58,
      6: 1.82, // Home Default
      7: 1.64, // Home Expanded
      8: 1.5 // Portfoio Item
    },
    '3XL': {
      0: 1.7,
      1: 1.7,
      2: 1.74,
      3: 1.7,
      4: 1.72,
      5: 1.8,
      6: 2, // Home Default
      7: 1.85, // Home Expanded
      8: 1.74 // Portfoio Item
    }
  }
  //ASPECT RATIO FUNCTION
  useEffect(() => {
    // Function to log the aspect ratio and update the offset
    const logAspectRatioAndUpdateOffset = () => {
      const aspectRatio = window.innerHeight / window.innerWidth
      console.log('Aspect ratio:', aspectRatio)

      if (aspectRatio < 0.25) {
        setOffset(-0.3)
      } else if (aspectRatio > 0.27 && aspectRatio < 0.7) {
        setOffset(-0.2)
      } else if (aspectRatio > 0.7 && aspectRatio < 1.1) {
        setOffset(-0.1)
      } else if (aspectRatio > 1.1 && aspectRatio < 1.3) {
        setOffset(0.01)
      } else if (aspectRatio > 1.3 && aspectRatio < 1.5) {
        setOffset(0.05)
      } else if (aspectRatio > 1.5) {
        setOffset(0.1)
      }
    }

    // Log the aspect ratio and update the offset initially
    logAspectRatioAndUpdateOffset()

    // Set up the event listener
    window.addEventListener('resize', logAspectRatioAndUpdateOffset)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', logAspectRatioAndUpdateOffset)
    }
  }, []) // Empty dependency array so the effect only runs once

  const moveHTMLPanel = (newY: number) => {
    tl.kill() // Stop any running animations
    const tempObj = { y: position[1] }
    tl = gsap.timeline()

    tl.to(tempObj, {
      duration: 0.35,
      ease: 'circ.out',
      y: newY,
      onUpdate: () => {
        positionRef.current = [positionRef.current[0], tempObj.y, positionRef.current[2]]
        setPosition([...positionRef.current])
      }
    })
  }

  useEffect(() => {
    console.log('useEffect pass for responsive.tsx')
    const screenSize = getScreenSize()
    if (homePanelExpanded) {
      newYRef.current = Y_VALUES[screenSize]['7']
    } else if (currentRouteSelection === 1 && currentPortfolioSelection !== null) {
      newYRef.current = Y_VALUES[screenSize]['8']
      currentRouteSelection
    } else if (currentRouteSelection !== null) {
      newYRef.current = Y_VALUES[screenSize][currentRouteSelection.toString()]
    } else {
      newYRef.current = Y_VALUES[screenSize]['6']
    }

    // Calculate the new Y position with the offset
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
