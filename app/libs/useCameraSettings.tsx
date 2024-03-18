import { useState, useEffect } from 'react'
import { Vector3 } from 'three'
import { getFov } from '../3d/lib/useResponsive'
import { useScreenSize } from './useScreenSize'

// Constants
const DEFAULT_FOV = 50
const INITIAL_TARGET_DESKTOP = new Vector3(-0.05, 1.39, 2.1)

export const useCameraSettings = () => {
  const screenSize = useScreenSize()

  // Set the initial camera target based on the device type
  const [cameraTarget, setCameraTarget] = useState(INITIAL_TARGET_DESKTOP)

  // Set the initial field of view based on the window width
  const initialFov = typeof window !== 'undefined' ? getFov(window.innerWidth) : DEFAULT_FOV
  const [fov, setFov] = useState(initialFov)

  // Handle window resize events
  const handleResize = () => {
    setFov(getFov(window.innerWidth))
  }

  // Add the resize event listener when the component mounts and remove it when it unmounts
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { cameraTarget, fov }
}
