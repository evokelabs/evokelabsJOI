import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import * as dat from 'dat.gui'
import { BlendFunction } from 'postprocessing'

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
const INITIAL_CAMERA_POSITION = [0, 1.5, -1] as const

const Evokelabs3D = () => {
  // State
  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)
  const [shouldJOISpeak, setShouldJOISpeak] = useState(false)
  // Effects
  const [blendFunction, setBlendFunction] = useState(BlendFunction.NORMAL)
  const [offset, setOffset] = useState(new Vector2(0.001, 0.001))
  const [radialModulation, setRadialModulation] = useState(true)
  const [modulationOffset, setModulationOffset] = useState(1)
  const [opacity, setOpacity] = useState(1)

  //

  // Camera settings
  const { cameraTarget, fov } = useCameraSettings()

  // ChromaticAberration instance
  useEffect(() => {
    const gui = new dat.GUI()
    const folder = gui.addFolder('ChromaticAberration')

    const chromaticAberrationSettings = {
      blendFunction,
      offset,
      radialModulation,
      modulationOffset,
      opacity
    }

    folder.add(chromaticAberrationSettings, 'blendFunction', Object.values(BlendFunction)).onChange(value => setBlendFunction(value))
    folder.add(chromaticAberrationSettings, 'opacity', 0, 1).onChange(value => setOpacity(value))
    folder.add(chromaticAberrationSettings.offset, 'x', -0.01, 0.01).onChange(value => setOffset(offset.setX(value)))
    folder.add(chromaticAberrationSettings.offset, 'y', -0.01, 0.01).onChange(value => setOffset(offset.setY(value)))
    folder.add(chromaticAberrationSettings, 'radialModulation', 0, 1).onChange(value => setRadialModulation(value))
    folder.add(chromaticAberrationSettings, 'modulationOffset', -0.01, 0.01).onChange(value => setModulationOffset(value))

    return () => gui.destroy()
  }, [blendFunction, modulationOffset, offset, opacity, radialModulation])

  return (
    <>
      <Canvas
        camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.1, far: 2000 }}
        shadows
        gl={{
          powerPreference: 'high-performance',
          antialias: false,
          stencil: false,
          depth: false
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
          <CyberpunkCar />
          <JOI />
          <Rain />
        </AnimationContext.Provider>
        <EffectComposer disableNormalPass>
          <ChromaticAberration
            blendFunction={blendFunction}
            offset={offset}
            radialModulation={radialModulation}
            modulationOffset={modulationOffset}
            opacity={opacity}
          />
          {/* <DepthOfField focusDistance={0.02} focalLength={0.5} bokehScale={2} height={480} /> */}

          {/* <Bloom luminanceThreshold={0.5} mipmapBlur luminanceSmoothing={0} intensity={1.5} /> */}
          {/* <Noise opacity={0.1} /> */}
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
          {/* <ToneMapping /> */}
        </EffectComposer>
      </Canvas>

      <Music />
    </>
  )
}

export default Evokelabs3D
