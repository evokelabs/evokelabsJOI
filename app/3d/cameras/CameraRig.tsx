import { MD_BREAKPOINT } from '@/app/libs/breakPoints'
import { useScreenSize } from '@/app/libs/useScreenSize'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Vector3 } from 'three'
import {
  CAMERA_X_OFFSET_BASE_RESPONSIVE,
  CAMERA_X_OFFSET_RESPONSIVE,
  CAMERA_Y_OFFSET_RESPONSIVE,
  X_POSITION_VIEWPORT_RESPONSIVE
} from '../lib/responsiveValues'

const DEFAULT_CAMERA_DAMPING = 0.015

const CameraRig = ({ fov, debug }: { fov: number; debug: boolean }) => {
  const { camera } = useThree()
  const screenSize = useScreenSize()
  const CAMERA_X_OFFSET = CAMERA_X_OFFSET_RESPONSIVE[screenSize]
  const CAMERA_X_OFFSET_BASE = CAMERA_X_OFFSET_BASE_RESPONSIVE[screenSize]
  const CAMERA_Y_OFFSET = CAMERA_Y_OFFSET_RESPONSIVE[screenSize]
  const X_POSITION_VIEWPORT = X_POSITION_VIEWPORT_RESPONSIVE[screenSize]
  const CAMERA_DAMPING = window.innerWidth < MD_BREAKPOINT ? 0.7 : DEFAULT_CAMERA_DAMPING

  useFrame(({ pointer, viewport }) => {
    if (debug) return

    // If the viewport width is smaller than SM, set pointer.x and pointer.y to 0
    const pointerX = window.innerWidth < MD_BREAKPOINT ? 0 : pointer.x
    const pointerY = window.innerWidth < MD_BREAKPOINT ? 0 : pointer.y

    // Calculate the target position of the camera
    const XPosition = CAMERA_X_OFFSET_BASE - (pointerX * (viewport.width / X_POSITION_VIEWPORT)) / CAMERA_X_OFFSET
    const YPosition = (CAMERA_X_OFFSET + pointerY) / 2
    const ZPosition = -CAMERA_Y_OFFSET
    const targetPosition = new Vector3(XPosition, YPosition, ZPosition)

    // Move the camera towards the target position
    camera.position?.lerp(targetPosition, CAMERA_DAMPING)

    // Update the field of view and the projection matrix of the camera
    const perspectiveCamera = camera as PerspectiveCamera
    perspectiveCamera.fov = fov
    perspectiveCamera.updateProjectionMatrix()
  })

  return null
}

export default CameraRig
