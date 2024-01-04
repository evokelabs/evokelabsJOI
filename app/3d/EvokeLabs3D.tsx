import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, TransformControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import CyberpunkMap from './models/CyberpunkMap'

const Evokelabs3D = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, -1], fov: 25, near: 1, far: 200 }} shadows>
      <Perf position='top-right' />
      <OrbitControls
        makeDefault
        target={[-0.25, 1.2, 2.5]}
        enableZoom={false}
        enablePan={false}
        minAzimuthAngle={2.75}
        maxAzimuthAngle={3.5}
        minPolarAngle={1.2}
        maxPolarAngle={1.8}
      />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias={0.04} />
      <ambientLight intensity={1} />
      <TransformControls />
      <CyberpunkMap />
    </Canvas>
  )
}

export default Evokelabs3D
