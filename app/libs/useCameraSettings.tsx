import { useState, useEffect } from 'react'
import { Vector3 } from 'three'
import { getFov } from '../3d/lib/useResponsive'
import { useScreenSize } from './useScreenSize'
import { CAMERA_TARGET_RESPONSIVE } from '../3d/lib/responsiveValues'

export const useCameraSettings = () => {
  const screenSize = useScreenSize()

  // Initialize cameraTarget state
  const [cameraTarget, setCameraTarget] = useState(new Vector3())
  const [resizeTimestamp, setResizeTimestamp] = useState(Date.now())

  // Set the initial field of view based on the window width
  const initialFov = typeof window !== 'undefined' ? getFov(window.innerWidth) : 50
  const [fov, setFov] = useState(initialFov)

  // Update cameraTarget whenever screenSize changes or a resize event is triggered
  useEffect(() => {
    const newTarget = new Vector3(...CAMERA_TARGET_RESPONSIVE[screenSize])
    setCameraTarget(newTarget)
  }, [screenSize, resizeTimestamp])

  // Update fov and resizeTimestamp whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        const width = window.visualViewport ? window.visualViewport.width : window.innerWidth
        setFov(getFov(width))
        setResizeTimestamp(Date.now())
      }, 50)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { cameraTarget, fov }
}
