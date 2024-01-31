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

import { GUI } from 'dat.gui'

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

  const [gui, setGui] = useState(null)

  const [bloomEffect, setBloomEffect] = useState({
    radius: 0.7,
    luminanceThreshold: 0.9,
    intensity: 0.3,
    levels: 6,
    luminanceSmoothing: 0.65
  })

  useEffect(() => {
    const gui = new GUI()
    const bloomFolder = gui.addFolder('Bloom')
    bloomFolder.add(bloomEffect, 'radius', 0, 1).onChange(value => setBloomEffect({ ...bloomEffect, radius: value }))
    bloomFolder
      .add(bloomEffect, 'luminanceThreshold', 0, 1)
      .onChange(value => setBloomEffect({ ...bloomEffect, luminanceThreshold: value }))
    bloomFolder.add(bloomEffect, 'intensity', 0, 1).onChange(value => setBloomEffect({ ...bloomEffect, intensity: value }))
    bloomFolder
      .add(bloomEffect, 'levels', 0, 20)
      .step(1)
      .onChange(value => setBloomEffect({ ...bloomEffect, levels: value }))
    bloomFolder
      .add(bloomEffect, 'luminanceSmoothing', 0, 1)
      .onChange(value => setBloomEffect({ ...bloomEffect, luminanceSmoothing: value }))

    return () => {
      gui.destroy()
    }
  }, [])

  return (
    <>
      <Canvas
        camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.1, far: 2000 }}
        shadows
        gl={{
          powerPreference: 'high-performance',
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
          {/* <CyberpunkCar /> */}
          <JOI />
          <Rain />
        </AnimationContext.Provider>
        <EffectComposer disableNormalPass>
          <ChromaticAberration offset={new Vector2(0.025, 0.025)} radialModulation={true} modulationOffset={1.1} />
          <Bloom
            mipmapBlur
            radius={bloomEffect.radius}
            luminanceThreshold={bloomEffect.luminanceThreshold}
            intensity={bloomEffect.intensity}
            levels={bloomEffect.levels}
            luminanceSmoothing={bloomEffect.luminanceSmoothing}
          />
          <Vignette eskil={false} offset={0.0} darkness={1} />

          {/* <DepthOfField focusDistance={0.02} focalLength={0.5} bokehScale={2} height={480} /> */}

          {/* <Noise opacity={0.1} /> */}
          {/* <ToneMapping /> */}
        </EffectComposer>
      </Canvas>

      <Music />
    </>
  )
}

export default Evokelabs3D
