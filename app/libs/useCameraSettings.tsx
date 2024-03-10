import { useCallback, useLayoutEffect, useState } from 'react'
import { Vector3 } from 'three'
import { getFov } from '../libs/helpers'

// Constants
const MOBILE_WIDTH_THRESHOLD = 768
const INITIAL_TARGET_MOBILE = new Vector3(0.8, 1.4, 2.5)
const DEFAULT_FOV = 50
// const INITIAL_TARGET_DESKTOP = new Vector3(0.15, 1.4, 2.5) OLD
const INITIAL_TARGET_DESKTOP = new Vector3(0.7, 1.6, 2.5)

export const useCameraSettings = () => {
  // Determine if the device is mobile based on the window width
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= MOBILE_WIDTH_THRESHOLD

  // Set the initial camera target based on the device type
  const initialTarget = isMobile ? INITIAL_TARGET_MOBILE : INITIAL_TARGET_DESKTOP
  const [cameraTarget, setCameraTarget] = useState(initialTarget)

  // Set the initial field of view based on the window width
  const initialFov = typeof window !== 'undefined' ? getFov(window.innerWidth) : DEFAULT_FOV
  const [fov, setFov] = useState(initialFov)

  // Add focusDistance state
  const [focusDistance, setFocusDistance] = useState(1)

  // Handle window resize events
  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= MOBILE_WIDTH_THRESHOLD
    const newVector = isMobile ? INITIAL_TARGET_MOBILE : INITIAL_TARGET_DESKTOP
    setCameraTarget(newVector)
    const newFov = getFov(window.innerWidth)
    setFov(newFov)
  }, [])

  // Add the resize event listener when the component mounts and remove it when it unmounts
  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return { cameraTarget, fov, focusDistance }
}
