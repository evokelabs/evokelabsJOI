import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, Vector3 } from 'three'

const CAMERA_DAMPING = 0.015
const CAMERA_X_OFFSET = 3
const CAMERA_Y_OFFSET = 0.5

const CameraRig = ({ fov, debug }: { fov: number; debug: boolean }) => {
  const { camera } = useThree()

  useFrame(state => {
    if (debug) return
    const XPosition = 0 - (state.pointer.x * state.viewport.width) / CAMERA_X_OFFSET
    const YPosition = (CAMERA_X_OFFSET + state.pointer.y) / 2
    const ZPosition = -CAMERA_Y_OFFSET
    const dampingValue = CAMERA_DAMPING

    const targetPosition = new Vector3(XPosition, YPosition, ZPosition)

    camera.position?.lerp(targetPosition, dampingValue)

    const perspectiveCamera = camera as PerspectiveCamera
    perspectiveCamera.fov = fov
    perspectiveCamera.updateProjectionMatrix()
  })

  return null
}

export default CameraRig
