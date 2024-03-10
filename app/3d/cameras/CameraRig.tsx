import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Vector3 } from 'three'

const CAMERA_DAMPING = 0.015
const CAMERA_X_OFFSET = 3.3
const CAMERA_Y_OFFSET = -0.3
const CAMERA_XX_OFFSET = 0.5

const CameraRig = ({ fov, debug }: { fov: number; debug: boolean }) => {
  const { camera } = useThree()

  useFrame(({ pointer, viewport }) => {
    if (debug) return

    // Calculate the target position of the camera
    const XPosition = CAMERA_XX_OFFSET - (pointer.x * viewport.width) / CAMERA_X_OFFSET
    const YPosition = (CAMERA_X_OFFSET + pointer.y) / 2
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
