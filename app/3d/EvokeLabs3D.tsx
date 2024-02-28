import { useEffect, useMemo, useState } from 'react'
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
import { Vector2, WebGLRenderer } from 'three'
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
import WideMonitor from './models/WideMonitor'
import DeskItems from './models/DeskItems'
import CyberpunkMapLowPoly from './models/CyberpunkMapLowPoly'

import { getGPUTier } from 'detect-gpu'
import { RoutesContext } from '../libs/RoutesContext'

// Constants
// const debug = true
const debug = false
const INITIAL_CAMERA_POSITION = [0, 1.5, -1] as const
const MENU_HOME_WAIT_TIMER = 18000

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
  const [isCarReady, setIsCarReady] = useState(false)

  useEffect(() => {
    const menuTimer = setTimeout(() => {
      setIsPreLoaderFinished(true)
    }, MENU_HOME_WAIT_TIMER)

    const carTimer = setTimeout(() => {
      setIsCarReady(true)
    }, MENU_HOME_WAIT_TIMER / 2)

    // Cleanup function to clear the timeouts if the component unmounts before the timeouts finish
    return () => {
      clearTimeout(menuTimer)
      clearTimeout(carTimer)
    }
  }, [])

  const [gpuTier, setGpuTier] = useState<number | null>(0)
  useEffect(() => {
    const fetchGpuTier = async () => {
      if (debug) {
        setGpuTier(0) // Set to low GPU tier when in debug mode
        return
      }

      const canvasContext = document.createElement('canvas').getContext('webgl2')
      if (!canvasContext) {
        console.error('WebGL 2 not supported')
        return
      }

      const gpuInfo = await getGPUTier({ glContext: canvasContext })
      if (!gpuInfo || gpuInfo.tier === undefined) {
        console.error('Could not determine GPU tier')
        return
      }

      setGpuTier(gpuInfo.tier)
    }

    fetchGpuTier()
  }, [])

  const ROUTE_CONFIG = useMemo(
    () => [
      { labels: ['CORPO GUIDE', 'SERVICES'], route: '/services' },
      { labels: ['PAST GIGS', 'PORTFOLIO'], route: '/portfolio' },
      { labels: ['BACKSTORY', 'HISTORY'], route: '/history' },
      { labels: ['DOSSIER', 'RESUME'], route: '/resume' },
      { labels: ['JOI SPECIAL', 'INTRODUCING JOI'], route: '/joi' },
      { labels: ['FIX A BOOKING', 'AVAILABILITIES'], route: '/availabilities', callToAction: true }
    ],
    []
  )

  //JOi Route Speech function
  const [JOILineSpeak, setJOILineSpeak] = useState<null | number>(null)

  //Routes Function
  const [currentRouteSelection, setCurrentRouteSelection] = useState<null | number>(null)

  useEffect(() => {
    if (currentRouteSelection !== null) {
      const selectedRoute = ROUTE_CONFIG[currentRouteSelection]
      if (selectedRoute && router.pathname !== selectedRoute.route) {
        router.push(selectedRoute.route)
      }
    } else if (router.pathname !== '/') {
      router.push('/')
    }
  }, [currentRouteSelection, router, ROUTE_CONFIG])

  useEffect(() => {
    setJOILineSpeak(currentRouteSelection)
  }, [currentRouteSelection])

  return (
    <>
      <Canvas
        camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.01, far: 200 }}
        shadows
        gl={{
          powerPreference: 'high-performance'
        }}
      >
        <SoundsContext.Provider
          value={{
            musicVolume,
            setMusicVolume,
            musicLoopTransitionDuration,
            setMusicLoopTransitionDuration,
            JOILineSpeak,
            setJOILineSpeak
          }}
        >
          <Html scale={0.034} prepend distanceFactor={10} transform className='scale-x-[-1]' position={[0, 1.42, 2.1]}>
            <RoutesContext.Provider value={{ currentRouteSelection, setCurrentRouteSelection }}>
              <div className='max-w-[1170px]'>
                {isPreLoaderFinished && router.pathname === '/' && <Home />}
                {router.pathname === '/services' && <Services />}
                {router.pathname === '/portfolio' && <Portfolio />}
                {router.pathname === '/history' && <History />}
                {router.pathname === '/resume' && <Resume />}
                {router.pathname === '/joi' && <JOISpecial />}
                {router.pathname === '/availabilities' && <Availabilities />}
                {isPreLoaderFinished && <MainMenu router={router} routeConfig={ROUTE_CONFIG} />}
              </div>
            </RoutesContext.Provider>
          </Html>
          <VideoSkybox />
          <ELAudioStartSoundControl />
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
            {isCarReady && <CyberpunkCar />}
            <WideMonitor />
            <DeskItems />
            {gpuTier !== null && gpuTier >= 2 ? <CyberpunkMap /> : <CyberpunkMapLowPoly />}
            <JOI />
            <Rain />
          </AnimationContext.Provider>
        </SoundsContext.Provider>
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
    </>
  )
}

export default Evokelabs3D
