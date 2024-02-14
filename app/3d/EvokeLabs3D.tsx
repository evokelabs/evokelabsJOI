import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
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

import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, ChromaticAberration, BrightnessContrast } from '@react-three/postprocessing'
import { Vector2 } from 'three'
import IconDefault from '../ui/IconDefault'
import ButtonMainMenu from '../ui/ButtonMainMenu'
import ButtonSocial from '../ui/ButtonSocial'
import ButtonDefault from '../ui/ButtonDefault'
import TitleHighlight from '../ui/TitleHighlight'
import { RED, TEAL } from '../libs/UIConstants'

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
          powerPreference: 'high-performance'
        }}
      >
        <Html scale={0.038} prepend distanceFactor={10} transform className='scale-x-[-1]' position={[0.5, 1.5, 2.1]}>
          <IconDefault />
          <ButtonSocial />
          <ButtonDefault />
          <ButtonDefault title='FIX A BOOKING' />
          <ButtonDefault title='SEND AN EMAIL' />
          <ButtonDefault title='BACK' />
          <ButtonDefault title='LAUNCH' />
          <ButtonDefault />
          <ButtonMainMenu />
          <ButtonMainMenu />
          <ButtonMainMenu />
          <TitleHighlight title='YOUR CREATIVE TECHNOLOGIST PARTNER' BGCOLOR={TEAL} />
          <TitleHighlight title='YOUR CREATIVE TECHNOLOGIST PARTNER' BGCOLOR={RED} />
          <TitleHighlight title='YOUR CREATIVE TECHNOLOGIST PARTNER' BGCOLOR={RED} />
        </Html>
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
          <DepthOfField target={[0.8, 1.75, 2.1]} focusDistance={0.002} focusRange={0.0035} bokehScale={4} />
          <Bloom mipmapBlur radius={0.65} luminanceThreshold={1} intensity={0.525} luminanceSmoothing={0.65} levels={5} />
          <ChromaticAberration offset={new Vector2(0.02, 0.02)} radialModulation={true} modulationOffset={1.1} />
          <Noise opacity={0.7} premultiply blendFunction={28} />
          <BrightnessContrast brightness={0.02} contrast={0.275} />
          <Vignette offset={0.0} darkness={1} />
        </EffectComposer>
      </Canvas>

      <Music />
    </>
  )
}

export default Evokelabs3D
