import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Vector3, PerspectiveCamera } from 'three'
import { Perf } from 'r3f-perf'
import { Suspense, useEffect, useState } from 'react'
import { gsap } from 'gsap'

import CyberpunkMap from './models/CyberpunkMap'
import { getFov } from '../libs/helpers'
import { Lights } from './lights'
import Rain from './particles/Rain'
import VideoSkybox from './textures/VideoSkyBox'
import CyberpunkCar from './models/CyberpunkCar/index'
import JOI from './models/JOI'
import Music from './audio/Music'
import { AnimationContext } from '../libs/AnimationContext'

// const debug = false
const debug = true

const CameraRig = () => {
  const { camera, size } = useThree()

  useFrame(state => {
    if (debug) return
    const XPosition = 0 - (state.pointer.x * state.viewport.width) / 3
    const YPosition = (3 + state.pointer.y) / 2
    const ZPosition = -0.5
    const dampingValue = 0.015

    const targetPosition = new Vector3(XPosition, YPosition, ZPosition)

    camera.position?.lerp(targetPosition, dampingValue)

    const perspectiveCamera = camera as PerspectiveCamera
    perspectiveCamera.fov = getFov(size.width)
    perspectiveCamera.updateProjectionMatrix()
  })

  return null
}

const Evokelabs3D = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const initialVector = isMobile ? new Vector3(0.8, 1.4, 2.5) : new Vector3(0.15, 1.4, 2.5)
  const [vector, setVector] = useState(initialVector)

  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768
      const newVector = isMobile ? new Vector3(0.8, 1.4, 2.5) : new Vector3(0.15, 1.4, 2.5)
      setVector(newVector)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const fov = typeof window !== 'undefined' ? getFov(window.innerWidth) : 50

  return (
    <>
      <Canvas camera={{ position: [0, 1.5, -1], fov, near: 0.1, far: 2000 }} shadows>
        <VideoSkybox />
        {debug ? <Perf position='top-left' /> : <CameraRig />}
        <OrbitControls makeDefault target={vector} enableZoom={debug} enablePan={debug} enableRotate={debug} />
        <AnimationContext.Provider value={{ shouldAmbientLightPlay, shouldPointLightPlay, setAmbientLightPlay, setPointLightPlay }}>
          <Suspense fallback={null}>
            <Lights />
            <CyberpunkMap />
            <JOI />
            <CyberpunkCar />
            <Rain />
          </Suspense>
        </AnimationContext.Provider>
      </Canvas>
      <Music />
    </>
  )
}

export default Evokelabs3D
