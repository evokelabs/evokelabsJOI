import { useEffect, useMemo, useRef, useState } from 'react'
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
import WideMonitor from './models/WideMonitor'
import DeskItems from './models/DeskItems'
import CyberpunkMapLowPoly from './models/CyberpunkMapLowPoly'

import { getGPUTier } from 'detect-gpu'
import { RoutesContext } from '../libs/RoutesContext'
import JOISubtitles from '../ui/JOISubtitles'
import { JOISpeechContext } from '../libs/JOISpeechContext'
import SoundControlIcons from '../ui/SoundControlIcons'
import { SoundControlContext } from '../libs/SoundControlContext'
import { PortfolioContext } from '../libs/PortfolioContext'

// Constants
// const debug = true
const debug = false
const INITIAL_CAMERA_POSITION = [0, 1.5, -1] as const
const MENU_HOME_WAIT_TIMER_COOKIE = 18000
const MENU_HOME_WAIT_TIMER_NOCOOKIE = 21000

const Evokelabs3D = ({ router }: { router: NextRouter }) => {
  // State
  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)
  const [shouldJOISpeak, setShouldJOISpeak] = useState(false)
  const [musicVolume, setMusicVolume] = useState(0)
  const [musicLoopTransitionDuration, setMusicLoopTransitionDuration] = useState(DEFAULT_MUSIC_LOOP_TRANSITION_DURATION)
  // Camera settings
  const { cameraTarget, fov } = useCameraSettings()

  const [isPreLoaderFinished, setIsPreLoaderFinished] = useState(false)
  const [isCarReady, setIsCarReady] = useState(false)

  //JOI Speech settings
  const [JOILineCaption, setJOILineCaption] = useState<string | null>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const visitedCookie =
    typeof document !== 'undefined' ? document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited=')) : null
  const initialTimer = visitedCookie ? MENU_HOME_WAIT_TIMER_COOKIE : MENU_HOME_WAIT_TIMER_NOCOOKIE

  useEffect(() => {
    const visitedCookie =
      typeof document !== 'undefined' ? document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited=')) : null
    const MENU_HOME_WAIT_TIMER = visitedCookie ? MENU_HOME_WAIT_TIMER_COOKIE : MENU_HOME_WAIT_TIMER_NOCOOKIE

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
  const currentRouteIndex = ROUTE_CONFIG.findIndex(route => route.route === router.pathname)
  const [currentRouteSelection, setCurrentRouteSelection] = useState<null | number>(currentRouteIndex)

  const [currentPortfolioSelection, setCurrentPortfolioSelection] = useState<null | string>(null)

  //ROUTING FUNCTIONS

  useEffect(() => {
    if (currentPortfolioSelection !== null && currentPortfolioSelection !== '') {
      router.push(`/portfolio/${currentPortfolioSelection}`)
      setCurrentRouteSelection(1)
    }
  }, [currentPortfolioSelection])

  useEffect(() => {
    // If the current route is '/', set currentRouteSelection to null
    if (router.pathname === '/') {
      setCurrentRouteSelection(null)
    } else {
      // Find the index of the current route in ROUTE_CONFIG

      const currentRouteIndex = ROUTE_CONFIG.findIndex(route => router.pathname.startsWith(route.route))

      // If the current route is found in ROUTE_CONFIG, update currentRouteSelection
      if (currentRouteIndex !== -1) {
        setCurrentRouteSelection(currentRouteIndex)
      }

      if (currentRouteIndex === 1 && router.pathname === '/portfolio' && currentPortfolioSelection !== null) {
        setCurrentPortfolioSelection(null)
      }
    }
  }, [router.pathname, ROUTE_CONFIG])

  useEffect(() => {
    if (currentRouteSelection !== null) {
      const selectedRoute = ROUTE_CONFIG[currentRouteSelection]

      if (selectedRoute && router.pathname !== selectedRoute.route) {
        router.push(selectedRoute.route)
      } else if (router.pathname !== '/') {
        setMenuHomeWaitTimer(0)
      }
    } else {
      // Check if the current route is defined in ROUTE_CONFIG
      const routeExists = ROUTE_CONFIG.some(route => router.pathname.startsWith(route.route))

      // If the current route is not defined in ROUTE_CONFIG, redirect to the root route

      if (!routeExists && router.pathname !== '/' && currentPortfolioSelection === null) {
        router.push('/')
      } else if (routeExists && router.pathname !== '/' && currentRouteSelection === null && currentPortfolioSelection === null) {
        setMenuHomeWaitTimer(0)
        router.push('/')
      }
    }
  }, [currentRouteSelection, ROUTE_CONFIG, currentPortfolioSelection])

  useEffect(() => {
    // If the current route is '/', set currentRouteSelection to null
    if (router.pathname === '/') {
      setCurrentRouteSelection(null)
    } else {
      // Find the index of the current route in ROUTE_CONFIG
      const currentRouteIndex = ROUTE_CONFIG.findIndex(route => route.route === router.pathname)

      // If the current route is found in ROUTE_CONFIG, update currentRouteSelection
      // If the current route is not found in ROUTE_CONFIG, set currentRouteSelection to null
      setCurrentRouteSelection(currentRouteIndex !== -1 ? currentRouteIndex : null)
    }
  }, [router.pathname, ROUTE_CONFIG])

  const [menuHomeWaitTimer, setMenuHomeWaitTimer] = useState(initialTimer)

  useEffect(() => {
    const menuTimer = setTimeout(() => {
      setIsPreLoaderFinished(true)
    }, menuHomeWaitTimer)

    const carTimer = setTimeout(() => {
      setIsCarReady(true)
    }, menuHomeWaitTimer / 2)

    // Cleanup function to clear the timeouts if the component unmounts before the timeouts finish
    return () => {
      clearTimeout(menuTimer)
      clearTimeout(carTimer)
    }
  }, [menuHomeWaitTimer])

  //JOi Route Speech function
  const [JOILineSpeak, setJOILineSpeak] = useState<null | number>(null)
  const [isChainPlaying, setIsChainPlaying] = useState(false)

  const prevPathname = useRef(router.pathname)

  useEffect(() => {
    if (
      !(prevPathname.current?.startsWith('/portfolio') && router.pathname.startsWith('/portfolio')) &&
      prevPathname.current !== router.pathname
    ) {
      setJOILineSpeak(currentRouteSelection)
    }
    prevPathname.current = router.pathname
  }, [router.pathname])

  //Sound Control Function
  const [muteAll, setMuteAll] = useState(true)
  const [muteMusic, setMuteMusic] = useState(true)
  const [muteSFX, setMuteSFX] = useState(true)
  const [muteRain, setMuteRain] = useState(true)
  const [muteJOI, setMuteJOI] = useState(true)

  const soundAudioLevelControls = {
    setMuteAll,
    setMuteMusic,
    setMuteRain,
    setMuteSFX,
    muteAll,
    muteMusic,
    muteRain,
    muteSFX
  }

  //Portfolio Pulldown states
  const [selectedShowOnlyOption, setSelectedShowOnlyOption] = useState('All')
  const [selectedSortByOption, setSelectedSortByOption] = useState('Date (Newest)')

  return (
    <>
      <SoundControlContext.Provider
        value={{ muteAll, setMuteAll, muteMusic, setMuteMusic, muteSFX, setMuteSFX, muteRain, setMuteRain, muteJOI, setMuteJOI }}
      >
        <JOISpeechContext.Provider
          value={{ JOILineCaption, setJOILineCaption, isAudioPlaying, setIsAudioPlaying, isChainPlaying, setIsChainPlaying }}
        >
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
                <PortfolioContext.Provider
                  value={{
                    selectedShowOnlyOption,
                    setSelectedShowOnlyOption,
                    selectedSortByOption,
                    setSelectedSortByOption
                  }}
                >
                  <RoutesContext.Provider
                    value={{
                      currentRouteSelection,
                      setCurrentRouteSelection,
                      currentPortfolioSelection,
                      setCurrentPortfolioSelection
                    }}
                  >
                    <div className='max-w-[1170px]'>
                      {isPreLoaderFinished && router.pathname === '/' && <Home muteSFX={muteSFX} />}
                      {router.pathname === '/services' && <Services />}
                      {router.pathname.startsWith('/portfolio') && <Portfolio soundAudioLevelControls={soundAudioLevelControls} />}
                      {router.pathname === '/history' && <History soundAudioLevelControls={soundAudioLevelControls} />}
                      {router.pathname === '/resume' && <Resume />}
                      {router.pathname === '/joi' && <JOISpecial soundAudioLevelControls={soundAudioLevelControls} />}
                      {router.pathname === '/availabilities' && <Availabilities />}
                      {isPreLoaderFinished && <MainMenu router={router} routeConfig={ROUTE_CONFIG} />}
                    </div>
                  </RoutesContext.Provider>
                </PortfolioContext.Provider>
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
          <SoundControlIcons />
          <JOISubtitles />
        </JOISpeechContext.Provider>
      </SoundControlContext.Provider>
    </>
  )
}

export default Evokelabs3D
