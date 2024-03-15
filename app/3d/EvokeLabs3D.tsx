import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'

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
import Draggable from 'react-draggable'
import { GPUContext } from '../libs/GPUContext'
import gsap from 'gsap'

// Constants
// const debug = true
const debug = false
const INITIAL_CAMERA_POSITION = [0.84, 1.5, -15] as const
// const MENU_HOME_WAIT_TIMER_COOKIE = 18000
const MENU_HOME_WAIT_TIMER_COOKIE = 0
// const MENU_HOME_WAIT_TIMER_NOCOOKIE = 21000
const MENU_HOME_WAIT_TIMER_NOCOOKIE = 0

let tl = gsap.timeline() // Move this outside the function

const Evokelabs3D = ({ router }: { router: NextRouter }) => {
  type Y_VALUES_TYPE = Record<string, Record<string, number>>

  // State
  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)
  const [shouldJOISpeak, setShouldJOISpeak] = useState(false)
  const [musicVolume, setMusicVolume] = useState(0)
  const [musicLoopTransitionDuration, setMusicLoopTransitionDuration] = useState(DEFAULT_MUSIC_LOOP_TRANSITION_DURATION)
  //Animations states
  const [shouldMapDarkness, setShouldMapDarkness] = useState(false)
  // Camera settings
  const { cameraTarget, fov } = useCameraSettings()

  const [isPreLoaderFinished, setIsPreLoaderFinished] = useState(false)
  const [isCarReady, setIsCarReady] = useState(false)

  //JOI Speech settings
  const [JOILineCaption, setJOILineCaption] = useState<string | null>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  //Routes settings
  const [homePanelExpanded, setHomePanelExpanded] = useState(false)

  const visitedCookie =
    typeof document !== 'undefined' ? document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited=')) : null
  const initialTimer = visitedCookie ? MENU_HOME_WAIT_TIMER_COOKIE : MENU_HOME_WAIT_TIMER_NOCOOKIE

  // Use useRef to preserve the value of newY over time
  const newYRef = useRef(0)
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
  const [offset, setOffset] = useState(0)

  const useOffsetPosition = (position: [number, number, number], offset: number): [number, number, number] => {
    const [offsetPosition, setOffsetPosition] = useState<[number, number, number]>([0, 0, 0])

    useEffect(() => {
      setOffsetPosition([position[0], position[1] + offset, position[2]])
    }, [position, offset])

    return offsetPosition
  }

  const htmlRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<[number, number, number]>([0.67, 1.31, 1.7])

  const positionRef = useRef<[number, number, number]>([0.685, 0, 1.7])

  let newY = 0

  const getScreenSize = () => {
    const width = window.innerWidth

    if (width < 640) {
      return 'BASE'
    } else if (width >= 640 && width < 768) {
      return 'SM'
    } else if (width >= 768 && width < 1024) {
      return 'MD'
    } else if (width >= 1024 && width < 1280) {
      return 'LG'
    } else if (width >= 1280 && width < 1536) {
      return 'XL'
    } else {
      return '2XL'
    }
  }

  const offsetPosition = useOffsetPosition(position, 0)
  useEffect(() => {
    setOffset(50)
  }, [])

  const Y_VALUES: Y_VALUES_TYPE = {
    BASE: {
      0: 1.22,
      1: 1.22,
      2: 1.3, // Portfolio Item
      3: 1.22,
      4: 1.28,
      5: 1.22,
      6: 1.38, // Home Default
      7: 1.3, // Home Expanded
      8: 1.3 // Portfolio Item
    },
    SM: {
      // Add the y values for the SM display size
    },
    MD: {
      // Add the y values for the MD display size
    },
    LG: {
      // Add the y values for the LG display size
    },
    XL: {
      // Add the y values for the XL display size
    },
    '2XL': {
      0: 1.43,
      1: 1.43,
      2: 1.48,
      3: 1.43,
      4: 1.44,
      5: 1.55,
      6: 1.78, // Home Default
      7: 1.6, // Home Expanded
      8: 1.6 // Portfoio Item
    }
  }

  const moveHTMLPanel = (newY: number) => {
    tl.kill() // Stop any running animations
    const tempObj = { y: position[1] }
    tl = gsap.timeline()

    tl.to(tempObj, {
      duration: 0.35,
      ease: 'circ.out',
      y: newY,
      onUpdate: () => {
        positionRef.current = [positionRef.current[0], tempObj.y, positionRef.current[2]]
        setPosition([...positionRef.current])
      }
    })
  }
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

    const screenSize = getScreenSize()

    if (homePanelExpanded) {
      newYRef.current = Y_VALUES[screenSize]['7']
    } else if (currentRouteSelection === 1 && currentPortfolioSelection !== null) {
      newYRef.current = Y_VALUES[screenSize]['8']
    } else if (currentRouteSelection !== null) {
      newYRef.current = Y_VALUES[screenSize][currentRouteSelection.toString()]
    } else {
      newYRef.current = Y_VALUES[screenSize]['6']
    }

    // Calculate the new Y position with the offset
    const newYWithOffset = newYRef.current + offset

    moveHTMLPanel(newYWithOffset)
  }, [currentRouteSelection, ROUTE_CONFIG, currentPortfolioSelection, homePanelExpanded, offset])

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
    setMuteJOI,
    muteAll,
    muteMusic,
    muteRain,
    muteSFX,
    muteJOI
  }

  //Portfolio Pulldown states
  const [selectedShowOnlyOption, setSelectedShowOnlyOption] = useState('All')
  const [selectedSortByOption, setSelectedSortByOption] = useState('Date (Newest)')

  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      if (isDragging) {
        // Convert the mouse position to world coordinates
        const x = event.unprojectedPoint.x
        const y = event.unprojectedPoint.y
        setPosition([x, y, 2.1])
      }
    },
    [isDragging]
  )
  const container = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setEventSource(node)
    }
  }, [])
  const [eventSource, setEventSource] = useState<HTMLElement | undefined>()

  //ASPECT RATION FUNCTION
  useEffect(() => {
    // Function to log the aspect ratio and update the offset
    const logAspectRatioAndUpdateOffset = () => {
      const aspectRatio = window.innerHeight / window.innerWidth
      console.log('Aspect ratio:', aspectRatio)

      if (aspectRatio < 0.25) {
        setOffset(-0.06)
      } else if (aspectRatio > 0.27) {
        setOffset(0)
      }
    }

    // Log the aspect ratio and update the offset initially
    logAspectRatioAndUpdateOffset()

    // Set up the event listener
    window.addEventListener('resize', logAspectRatioAndUpdateOffset)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', logAspectRatioAndUpdateOffset)
    }
  }, []) // Empty dependency array so the effect only runs once

  // GPU
  const [gpuTier, setGpuTier] = useState<number | null>(null)
  const [lowGPU, setLowGPU] = useState<boolean | null>(null)

  useEffect(() => {
    const isLowGPU = gpuTier === null || gpuTier <= 2
    setLowGPU(isLowGPU)
    console.log('gpuTier set as ', gpuTier)
    console.log('setting low gpu as ', isLowGPU)
  }, [gpuTier])

  useEffect(() => {
    if (gpuTier !== null) {
      return
    }

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
  }, [gpuTier, debug])

  console.log('lowGPU before return', lowGPU)

  return (
    <>
      <SoundControlContext.Provider
        value={{ muteAll, setMuteAll, muteMusic, setMuteMusic, muteSFX, setMuteSFX, muteRain, setMuteRain, muteJOI, setMuteJOI }}
      >
        <JOISpeechContext.Provider
          value={{ JOILineCaption, setJOILineCaption, isAudioPlaying, setIsAudioPlaying, isChainPlaying, setIsChainPlaying }}
        >
          <div ref={container} className='h-full'>
            <Canvas
              camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.01, far: 200 }}
              shadows
              gl={{
                powerPreference: 'high-performance'
              }}
              style={{ pointerEvents: 'none' }}
              eventSource={eventSource}
              eventPrefix='page'
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
                <AnimationContext.Provider
                  value={{
                    shouldAmbientLightPlay,
                    shouldPointLightPlay,
                    shouldJOISpeak,
                    setAmbientLightPlay,
                    setPointLightPlay,
                    setShouldJOISpeak,
                    shouldMapDarkness,
                    setShouldMapDarkness
                  }}
                >
                  <Html
                    ref={htmlRef}
                    scale={0.032}
                    prepend
                    distanceFactor={10}
                    transform
                    className='scale-x-[-1]'
                    position={position}
                    onPointerDown={handleMouseDown}
                    onPointerUp={handleMouseUp}
                    onPointerMove={handleMouseMove}
                  >
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
                          setCurrentPortfolioSelection,
                          homePanelExpanded,
                          setHomePanelExpanded
                        }}
                      >
                        <Draggable>
                          <div
                            onPointerDown={handleMouseDown}
                            onPointerUp={handleMouseUp}
                            className='flex flex-col-reverse h-screen p-4 relative translate-y-10 '
                          >
                            <div className='left-1 scale-[54%] sm:scale-[62%] md:scale-[80%] lg:scale-90 2xl:scale-100 lg:w-[112%] 2xl:w-full origin-top-left min-w-[50em] '>
                              {isPreLoaderFinished && <MainMenu router={router} routeConfig={ROUTE_CONFIG} />}
                            </div>
                            <div className='max-w-[26.5em] sm:max-w-[30.5em] md:max-w-[39em] lg:max-w-[70em] 2xl:max-w-[73em] '>
                              {isPreLoaderFinished && router.pathname === '/' && <Home muteSFX={muteSFX} />}
                              {router.pathname === '/services' && <Services />}
                              {router.pathname.startsWith('/portfolio') && (
                                <Portfolio soundAudioLevelControls={soundAudioLevelControls} setShouldMapDarkness={setShouldMapDarkness} />
                              )}
                              {router.pathname === '/history' && (
                                <History soundAudioLevelControls={soundAudioLevelControls} setShouldMapDarkness={setShouldMapDarkness} />
                              )}
                              {router.pathname === '/resume' && <Resume />}
                              {router.pathname === '/joi' && (
                                <JOISpecial soundAudioLevelControls={soundAudioLevelControls} setShouldMapDarkness={setShouldMapDarkness} />
                              )}
                              {router.pathname === '/availabilities' && <Availabilities />}
                            </div>
                          </div>
                        </Draggable>
                      </RoutesContext.Provider>
                    </PortfolioContext.Provider>
                  </Html>
                  <GPUContext.Provider value={{ lowGPU, setLowGPU }}>
                    <VideoSkybox />
                    <ELAudioStartSoundControl />
                    <CameraRig fov={fov} debug={false} />
                    <OrbitControls makeDefault target={cameraTarget} enableZoom={false} enablePan={false} enableRotate={false} />

                    <Lights />
                    {isCarReady && <CyberpunkCar />}
                    <WideMonitor />
                    {!lowGPU && <DeskItems />}
                    {lowGPU ? <CyberpunkMapLowPoly /> : <CyberpunkMap />}
                    <JOI />
                    <Rain />
                  </GPUContext.Provider>
                </AnimationContext.Provider>
              </SoundsContext.Provider>
              {lowGPU ? (
                <EffectComposer disableNormalPass>
                  <Bloom mipmapBlur radius={0.65} luminanceThreshold={1} intensity={0.525} luminanceSmoothing={0.65} levels={5} />
                  <BrightnessContrast brightness={0.02} contrast={0.275} />
                  <Vignette offset={0.0} darkness={1} />
                </EffectComposer>
              ) : (
                <EffectComposer disableNormalPass>
                  <DepthOfField target={[0.8, 1.75, 2.1]} focusDistance={0.002} focusRange={0.0035} bokehScale={4} />
                  <Bloom mipmapBlur radius={0.65} luminanceThreshold={1} intensity={0.525} luminanceSmoothing={0.65} levels={5} />
                  <ChromaticAberration offset={new Vector2(0.02, 0.02)} radialModulation={true} modulationOffset={1.1} />
                  <Noise opacity={0.7} premultiply blendFunction={28} />
                  <BrightnessContrast brightness={0.02} contrast={0.275} />
                  <Vignette offset={0.0} darkness={1} />
                </EffectComposer>
              )}
            </Canvas>
          </div>
          <SocialIcons />
          <SoundControlIcons />
          <JOISubtitles />
        </JOISpeechContext.Provider>
      </SoundControlContext.Provider>
    </>
  )
}

export default Evokelabs3D
