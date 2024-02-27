import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import CameraRig from './cameras/CameraRig'
import { Lights } from './lights'
import CyberpunkMap from './models/CyberpunkMap'
import CyberpunkCar from './models/CyberpunkCar/index'
import VideoSkybox from './textures/VideoSkyBox'
import Rain from './particles/Rain'
import JOI from './models/JOI/index'

import { AnimationContext } from '../libs/AnimationContext'
import { useCameraSettings } from '../libs/useCameraSettings'

import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, ChromaticAberration, BrightnessContrast } from '@react-three/postprocessing'
import { Vector2 } from 'three'
import MainMenu from '../sections/MainMenu'
import { NextRouter } from 'next/router'
import Home from '../sections/Home'
import JOISpecial from '../sections/JOISpecial'
import History from '../sections/History'
import Resume from '../sections/Resume'
import Availabilities from '../sections/Availabilities'
import Services from '../sections/Services'
import Portfolio from '../sections/Portfolio'
import SocialIcons from '../ui/SocialIcons'
import ELAudioStartSoundControl, {
  DEFAULT_MUSIC_LOOP_TRANSITION_DURATION,
  DEFAULT_MUSIC_LOOP_VOLUME
} from '../audio/ELAudioStartSoundControl'
import { SoundsContext } from '../libs/SoundsContext'

// Constants
// const debug = true
const debug = false
const INITIAL_CAMERA_POSITION = [0, 1.5, -1] as const
const MENU_HOME_WAIT_TIMER = 20000

const Evokelabs3D = ({ router }: { router: NextRouter }) => {
  // State
  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)
  const [shouldJOISpeak, setShouldJOISpeak] = useState(false)
  const [musicVolume, setMusicVolume] = useState(DEFAULT_MUSIC_LOOP_VOLUME)
  const [musicLoopTransitionDuration, setMusicLoopTransitionDuration] = useState(DEFAULT_MUSIC_LOOP_TRANSITION_DURATION)
  // Camera settings
  const { cameraTarget, fov } = useCameraSettings()

  const [isPreLoaderFinished, setIsPreLoaderFinished] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreLoaderFinished(true)
    }, MENU_HOME_WAIT_TIMER) // 5 seconds

    // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SoundsContext.Provider value={{ musicVolume, setMusicVolume, musicLoopTransitionDuration, setMusicLoopTransitionDuration }}>
        <Canvas
          camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.01, far: 200 }}
          shadows
          gl={{
            powerPreference: 'high-performance'
          }}
        >
          <Html scale={0.034} prepend distanceFactor={10} transform className='scale-x-[-1]' position={[0, 1.42, 2.1]}>
            <div className='max-w-[1170px]'>
              {isPreLoaderFinished && router.pathname === '/' && <Home />}
              {router.pathname === '/services' && <Services />}
              {router.pathname === '/portfolio' && <Portfolio />}
              {router.pathname === '/history' && <History />}
              {router.pathname === '/resume' && <Resume />}
              {router.pathname === '/joi' && <JOISpecial />}
              {router.pathname === '/availabilities' && <Availabilities />}
              {isPreLoaderFinished && <MainMenu router={router} />}
            </div>
          </Html>
          <VideoSkybox />
          {debug ? <Perf position='top-left' /> : null}
          {/* <Perf position='top-left' /> */}
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
            <CyberpunkCar />
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
        <SocialIcons />
        <ELAudioStartSoundControl />
      </SoundsContext.Provider>
    </>
  )
}

export default Evokelabs3D
