import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Vector3 } from 'three'

const CAMERA_DAMPING = 0.015
const CAMERA_X_OFFSET = 2.73
const CAMERA_X_OFFSET_BASE = 0.83
const CAMERA_Y_OFFSET = -1.25
const SM_BREAKPOINT = 640 // Tailwind CSS SM breakpoint

const CameraRig = ({ fov, debug }: { fov: number; debug: boolean }) => {
  const { camera } = useThree()

  useFrame(({ pointer, viewport }) => {
    if (debug) return

    // If the viewport width is smaller than SM, set pointer.x and pointer.y to 0
    const pointerX = window.innerWidth < SM_BREAKPOINT ? 0 : pointer.x
    const pointerY = window.innerWidth < SM_BREAKPOINT ? 0 : pointer.y

    // Calculate the target position of the camera
    const XPosition = CAMERA_X_OFFSET_BASE - (pointerX * viewport.width) / CAMERA_X_OFFSET
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
