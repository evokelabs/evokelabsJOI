import { useState, useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { getFov } from '../3d/lib/useResponsive'
import { useScreenSize } from './useScreenSize'
import { CAMERA_TARGET_RESPONSIVE } from '../3d/lib/responsiveValues'

export const useCameraSettings = () => {
  const screenSize = useScreenSize()
  const screenSizeRef = useRef(screenSize)

  // Update screenSizeRef whenever screenSize changes
  useEffect(() => {
    screenSizeRef.current = screenSize
  }, [screenSize])

  // Set the initial camera target based on the device type
  const initialTarget = new Vector3(...CAMERA_TARGET_RESPONSIVE[screenSize])
  const [cameraTarget, setCameraTarget] = useState(initialTarget)

  // Set the initial field of view based on the window width
  const initialFov = typeof window !== 'undefined' ? getFov(window.innerWidth) : 50
  const [fov, setFov] = useState(initialFov)

  // Handle window resize events
  const handleResize = () => {
    setFov(getFov(window.innerWidth))
    const newTarget = new Vector3(...CAMERA_TARGET_RESPONSIVE[screenSizeRef.current])
    setCameraTarget(newTarget)
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
