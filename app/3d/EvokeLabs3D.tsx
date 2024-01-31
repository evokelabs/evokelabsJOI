import { useEffect, useState } from 'react'
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

import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, ChromaticAberration, ToneMapping } from '@react-three/postprocessing'
import { Vector2 } from 'three'

// Constants
const debug = true
// const debug = false
const INITIAL_CAMERA_POSITION = [0, 1.5, -1] as const

const Evokelabs3D = () => {
  // State
  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)
  const [shouldJOISpeak, setShouldJOISpeak] = useState(false)

  // Camera settings
  const { cameraTarget, fov } = useCameraSettings()

  return (
    <>
      <Canvas
        camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.1, far: 2000 }}
        shadows
        gl={{
          powerPreference: 'high-performance'
        }}
      >
        <VideoSkybox />
        {debug ? <Perf position='top-left' /> : <CameraRig fov={fov} debug={debug} />}
        <OrbitControls makeDefault target={cameraTarget} enableZoom={debug} enablePan={debug} enableRotate={debug} />
        <AnimationContext.Provider
          value={{
            shouldAmbientLightPlay,
            shouldPointLightPlay,
            shouldJOISpeak,
            setAmbientLightPlay,
            setPointLightPlay,
            setShouldJOISpeak
          }}
        >
          <Lights />
          <CyberpunkMap />
          {/* <CyberpunkCar /> */}
          <JOI />
          <Rain />
        </AnimationContext.Provider>
        <EffectComposer disableNormalPass>
          <ChromaticAberration offset={new Vector2(0.025, 0.025)} radialModulation={true} modulationOffset={1.1} />
          <Bloom mipmapBlur radius={0.6} luminanceThreshold={0.95} intensity={0.45} luminanceSmoothing={0.65} levels={5} />
          <Noise opacity={0.04} />
          <Vignette eskil={false} offset={0.0} darkness={1} />

          {/* <DepthOfField focusDistance={0.02} focalLength={0.5} bokehScale={2} height={480} /> */}

          {/* <ToneMapping /> */}
        </EffectComposer>
      </Canvas>

      <Music />
    </>
  )
}

export default Evokelabs3D
