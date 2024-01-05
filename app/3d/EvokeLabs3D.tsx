import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { PerspectiveCamera, Vector3 } from 'three'
import CyberpunkMap from './models/CyberpunkMap'
import { getFov } from '../libs/helpers'
import { useEffect, useRef } from 'react'

const debug = true
// const debug = false

const CameraRig = () => {
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

const PointLight = () => (
  <pointLight color={'#FFB31F'} position={[-1.9, 2.45, 1.1]} intensity={2} castShadow shadow-normalBias={0.04} decay={2} />
)

const ClonedPointLight = () => (
  <pointLight color={'#FFB31F'} position={[0.98, 2.45, 1.1]} intensity={2} castShadow shadow-normalBias={0.04} decay={2} />
)

const DirectionalLight = () => {
  const lightRef = useRef<any>(null)
  const { scene } = useThree()

  useEffect(() => {
    if (lightRef.current) {
      const targetObject = new THREE.Object3D()
      targetObject.position.set(0, 0.8, 2)
      scene.add(targetObject)
      lightRef.current.target = targetObject
    }
  }, [scene])

  return <directionalLight ref={lightRef} color={'#003C67'} position={[11, 6, 15]} intensity={150} shadow-normalBias={0.04} castShadow />
}

const Evokelabs3D = () => {
  const fov = typeof window !== 'undefined' ? getFov(window.innerWidth) : 50

  return (
    <Canvas camera={{ position: [0, 1.5, -1], fov: fov, near: 0.1, far: 200 }} shadows>
      <Environment background files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} path='/textures/cubeMap/' />
      <Perf position='top-right' />
      <OrbitControls makeDefault target={new Vector3(-0.2, 1.4, 2.5)} enableZoom={debug} enablePan={debug} enableRotate={debug} />

      <PointLight />
      <DirectionalLight />
      <ClonedPointLight />
      <ambientLight intensity={0.75} color={'#005068'} />
      <CyberpunkMap />
    </Canvas>
  )
}

export default Evokelabs3D
