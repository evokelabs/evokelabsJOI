// Importing necessary libraries and components
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, TransformControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { PerspectiveCamera, Vector3 } from 'three'
import CyberpunkMap from './models/CyberpunkMap'
import { getFov } from '../libs/helpers'

const debug = true

// CameraRig component
function CameraRig() {
  const { camera, size } = useThree()

  useFrame(state => {
    if (debug) return null
    const XPosition = 0 - (state.pointer.x * state.viewport.width) / 3
    const YPosition = (3 + state.pointer.y) / 2
    const ZPosition = -0.5
    const dampingValue = 0.015

    const targetPosition = new Vector3(XPosition, YPosition, ZPosition)

    if (camera.position) {
      camera.position.lerp(targetPosition, dampingValue)
    }

    const perspectiveCamera = camera as PerspectiveCamera

    perspectiveCamera.fov = getFov(size.width)
    perspectiveCamera.updateProjectionMatrix()
  })

  return null
}

// Main component
const Evokelabs3D = () => {
  const fov = typeof window !== 'undefined' ? getFov(window.innerWidth) : 20 // Default to 20 if window object does not exist

  return (
    <Canvas camera={{ position: [0, 1.5, -1], fov: fov, near: 1, far: 200 }} shadows>
      <Perf position='top-right' />
      <OrbitControls makeDefault target={new Vector3(-0.2, 1.4, 2.5)} enableZoom={debug} enablePan={debug} enableRotate={debug} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
      <ambientLight intensity={1} />
      <TransformControls />
      <CyberpunkMap />
      {!debug && <CameraRig />}
    </Canvas>
  )
}

export default Evokelabs3D
