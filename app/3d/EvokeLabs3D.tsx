import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Vector3, PerspectiveCamera } from 'three'
import { Perf } from 'r3f-perf'

import CyberpunkMap from './models/CyberpunkMap'
import { getFov } from '../libs/helpers'

import { Lights } from './lights'
import Rain from './particles/Rain'
import VideoSkybox from './textures/VideoSkyBox'
import CyberpunkCar from './models/CyberpunkCar/index'
import JOI from './models/JOI'
import { useEffect, useState } from 'react'

// const debug = true
const debug = false

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

const Evokelabs3D = () => {
  const fov = typeof window !== 'undefined' ? getFov(window.innerWidth) : 50
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768 // Change 768 to the maximum width of a mobile screen in your case
  const initialVector = isMobile ? new Vector3(0.8, 1.4, 2.5) : new Vector3(0.15, 1.4, 2.5)

  const [vector, setVector] = useState(initialVector)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768 // Change 768 to the maximum width of a mobile screen in your case
      const newVector = isMobile ? new Vector3(0.8, 1.4, 2.5) : new Vector3(0.15, 1.4, 2.5)
      setVector(newVector)
    }

    // Update the vector when the window size changes
    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Canvas camera={{ position: [0, 1.5, -1], fov: fov, near: 0.1, far: 2000 }} shadows>
      <VideoSkybox />
      <Environment background files={'./hdr/cyberpunk.hdr'} />
      {debug && <Perf position='top-left' />}
      {!debug && <CameraRig />}
      <OrbitControls makeDefault target={vector} enableZoom={debug} enablePan={debug} enableRotate={debug} />
      <Lights />
      <CyberpunkMap />
      <JOI />
      <CyberpunkCar />
      <Rain />
    </Canvas>
  )
}

export default Evokelabs3D
