import { useState, useEffect } from 'react'
import { Vector3 } from 'three'
import { getFov } from '../3d/lib/useResponsive'
import { useScreenSize } from './useScreenSize'
import { CAMERA_TARGET_RESPONSIVE } from '../3d/lib/responsiveValues'

export const useCameraSettings = () => {
  const screenSize = useScreenSize()

  // Initialize cameraTarget state
  const [cameraTarget, setCameraTarget] = useState(new Vector3())

  // Set the initial field of view based on the window width
  const initialFov = typeof window !== 'undefined' ? getFov(window.innerWidth) : 50
  const [fov, setFov] = useState(initialFov)

  // Update cameraTarget whenever screenSize changes
  useEffect(() => {
    const newTarget = new Vector3(...CAMERA_TARGET_RESPONSIVE[screenSize])
    setCameraTarget(newTarget)
  }, [screenSize])

  // Update fov whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setFov(getFov(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { cameraTarget, fov }
}
