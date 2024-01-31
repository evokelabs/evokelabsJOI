import { useState } from 'react'
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
// const debug = true
const debug = false
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
        camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.01, far: 200 }}
        shadows
        gl={{
          powerPreference: 'high-performance',
          antialias: true
        }}
      >
        <VideoSkybox />
        {debug ? <Perf position='top-left' /> : null}
        <Perf position='top-left' />
        <CameraRig fov={fov} debug={debug} />
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
          <DepthOfField focusDistance={0.0115} focusRange={0.0085} bokehScale={3} />
          <Bloom mipmapBlur radius={0.65} luminanceThreshold={0.9} intensity={0.325} luminanceSmoothing={0.65} levels={5} />
          <ChromaticAberration offset={new Vector2(0.02, 0.02)} radialModulation={true} modulationOffset={1.1} />
          <Noise opacity={1} premultiply blendFunction={28} />
          <Vignette eskil={false} offset={0.0} darkness={1} />
        </EffectComposer>
        {/* <ToneMapping /> */}
      </Canvas>

      <Music />
    </>
  )
}

export default Evokelabs3D
