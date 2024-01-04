import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, TransformControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import CyberpunkMap from './models/CyberpunkMap'

const Evokelabs3D = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, -1], fov: 30, near: 1, far: 200 }} shadows>
      <Perf position='top-right' />
      <OrbitControls makeDefault target={[-0, 1.2, 2.5]} />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
      <ambientLight intensity={1} />
      <TransformControls />
      <CyberpunkMap />
    </Canvas>
  )
}

export default Evokelabs3D
