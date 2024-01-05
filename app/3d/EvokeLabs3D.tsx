import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { PerspectiveCamera, Vector3, DirectionalLight } from 'three'
import CyberpunkMap from './models/CyberpunkMap'
import { getFov } from '../libs/helpers'
import { useRef } from 'react'

const debug = true
// const debug = false

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

function DirectionalLightWithHelper() {
  const lightRef = useRef<any>(null)

  useHelper(lightRef, THREE.DirectionalLightHelper, 0.5, 'hotpink')

  return <directionalLight ref={lightRef} position={[5, 2, 5]} intensity={5.5} shadow-normalBias={0.04} castShadow />
}
const Evokelabs3D = () => {
  const fov = typeof window !== 'undefined' ? getFov(window.innerWidth) : 50

  return (
    <Canvas camera={{ position: [0, 1.5, -1], fov: fov, near: 0.1, far: 200 }} shadows>
      <Environment background files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} path='/textures/cubeMap/' />
      <Perf position='top-right' />
      <OrbitControls makeDefault target={new Vector3(-0.2, 1.4, 2.5)} enableZoom={debug} enablePan={debug} enableRotate={debug} />

      {/* <DirectionalLightWithHelper /> */}
      {/* <ambientLight intensity={0.75} color={'#005068'} /> */}
      <CyberpunkMap />
      {!debug && <CameraRig />}
    </Canvas>
  )
}

export default Evokelabs3D
