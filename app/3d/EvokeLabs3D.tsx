import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import CameraRig from './cameras/CameraRig'
import { Lights } from './lights'
import CyberpunkMap from './models/CyberpunkMap'
import CyberpunkCar from './models/CyberpunkCar/index'
import VideoSkybox from './textures/VideoSkyBox'
import Rain from './particles/Rain'
import JOI from './models/JOI/index'
import Music from './audio/Music'

import { AnimationContext } from '../libs/AnimationContext'
import { useCameraSettings } from '../libs/useCameraSettings'

// Constants
const debug = false
// const debug = true

const INITIAL_CAMERA_POSITION = [0, 1.5, -1] as const

const Evokelabs3D = () => {
  // State
  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)

  // Camera settings
  const { cameraTarget, fov } = useCameraSettings()

  return (
    <>
      <Canvas camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.1, far: 2000 }} shadows>
        <VideoSkybox />
        {debug ? <Perf position='top-left' /> : <CameraRig fov={fov} debug={debug} />}
        <OrbitControls makeDefault target={cameraTarget} enableZoom={debug} enablePan={debug} enableRotate={debug} />
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
