import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'

import { Lights } from './lights'

import CameraRig from './cameras/CameraRig'
import CyberpunkMap from './models/CyberpunkMap'
import CyberpunkCar from './models/CyberpunkCar/index'
import JOI from './models/JOI/index'

import VideoSkybox from './textures/VideoSkyBox'
import Rain from './particles/Rain'

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
import ELAudioStartSoundControl from '../audio/ELAudioStartSoundControl'
import { SoundsContext } from '../libs/SoundsContext'
import WideMonitor from './models/WideMonitor'
import DeskItems from './models/DeskItems'
import CyberpunkMapLowPoly from './models/CyberpunkMapLowPoly'

import { RoutesContext } from '../libs/RoutesContext'
import JOISubtitles from '../ui/JOISubtitles'
import { JOISpeechContext } from '../libs/JOISpeechContext'
import SoundControlIcons from '../ui/SoundControlIcons'
import { SoundControlContext } from '../libs/SoundControlContext'
import { PortfolioContext } from '../libs/PortfolioContext'
import Draggable from 'react-draggable'
import { GPUContext } from '../libs/GPUContext'
import { useGPU } from './lib/useGPU'
import { useSounds } from './lib/useSounds'
import { useRoutes } from './lib/useRoutes'
import { useUI } from './lib/useUI'

import gsap from 'gsap'
import { usePreloader } from './lib/usePreloader'

// Constants
// const debug = true
const debug = false
const INITIAL_CAMERA_POSITION = [0.84, 1.5, 0] as const

let tl = gsap.timeline()

const Evokelabs3D = ({ router }: { router: NextRouter }) => {
  type Y_VALUES_TYPE = Record<string, Record<string, number>>

  // State
  const [shouldJOISpeak, setShouldJOISpeak] = useState(false)

  // Camera settings
  const { cameraTarget, fov } = useCameraSettings()

  //JOI Speech settings
  const [JOILineCaption, setJOILineCaption] = useState<string | null>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  // Calculate visitedCookie and initialTimer once outside the useEffect
  // Use useRef to preserve the value of newY over time
  const newYRef = useRef(0)

  //Routes settings
  const [homePanelExpanded, setHomePanelExpanded] = useState(false)

  //Resizing Functions
  const [offset, setOffset] = useState(0)
  //Position of HTML panel in 3D space
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0])
  const positionRef = useRef<[number, number, number]>([-0.05, 0, 1.9])
  const htmlRef = useRef<HTMLDivElement>(null)

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
    } else if (width >= 1536 && width < 1850) {
      return '2XL'
    } else {
      return '3XL'
    }
  }

  const Y_VALUES: Y_VALUES_TYPE = {
    BASE: {
      0: 1.22,
      1: 1.22,
      2: 1.3,
      3: 1.22,
      4: 1.28,
      5: 1.22,
      6: 1.38, // Home Default
      7: 1.3, // Home Expanded
      8: 1.3 // Portfolio Item
    },
    SM: {
      0: 1.31,
      1: 1.31,
      2: 1.36,
      3: 1.31,
      4: 1.36,
      5: 1.31,
      6: 1.38, // Home Default
      7: 1.36, // Home Expanded
      8: 1.3 // Portfolio Item
    },
    MD: {
      0: 1.34,
      1: 1.34,
      2: 1.38,
      3: 1.34,
      4: 1.33,
      5: 1.4,
      6: 1.58, // Home Default
      7: 1.45, // Home Expanded
      8: 1.35 // Portfoio Item
    },
    LG: {
      0: 1.34,
      1: 1.34,
      2: 1.38,
      3: 1.38,
      4: 1.33,
      5: 1.4,
      6: 1.58, // Home Default
      7: 1.45, // Home Expanded
      8: 1.35 // Portfoio Item
    },
    XL: {
      0: 1.41,
      1: 1.41,
      2: 1.49,
      3: 1.41,
      4: 1.425,
      5: 1.51,
      6: 1.74, // Home Default
      7: 1.2, // Home Expanded
      8: 1.2 // Portfoio Item
    },
    '2XL': {
      0: 1.48,
      1: 1.48,
      2: 1.5,
      3: 1.48,
      4: 1.5,
      5: 1.58,
      6: 1.82, // Home Default
      7: 1.64, // Home Expanded
      8: 1.5 // Portfoio Item
    },
    '3XL': {
      0: 1.7,
      1: 1.7,
      2: 1.74,
      3: 1.7,
      4: 1.72,
      5: 1.8,
      6: 2, // Home Default
      7: 1.85, // Home Expanded
      8: 1.74 // Portfoio Item
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

  //ASPECT RATIO FUNCTION
  useEffect(() => {
    // Function to log the aspect ratio and update the offset
    const logAspectRatioAndUpdateOffset = () => {
      const aspectRatio = window.innerHeight / window.innerWidth
      console.log('Aspect ratio:', aspectRatio)

      if (aspectRatio < 0.25) {
        setOffset(-0.3)
      } else if (aspectRatio > 0.27 && aspectRatio < 0.7) {
        setOffset(-0.2)
      } else if (aspectRatio > 0.7 && aspectRatio < 1.1) {
        setOffset(-0.1)
      } else if (aspectRatio > 1.1 && aspectRatio < 1.3) {
        setOffset(0.01)
      } else if (aspectRatio > 1.3 && aspectRatio < 1.5) {
        setOffset(0.05)
      } else if (aspectRatio > 1.5) {
        setOffset(0.1)
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

  //Preloader hook
  const {
    shouldMapDarkness,
    setShouldMapDarkness,
    setAmbientLightPlay,
    setPointLightPlay,
    shouldAmbientLightPlay,
    shouldPointLightPlay,
    isPreLoaderFinished,
    isCarReady
  } = usePreloader()

  //UI handlers hook
  const {
    selectedShowOnlyOption,
    setSelectedShowOnlyOption,
    selectedSortByOption,
    setSelectedSortByOption,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    container,
    eventSource
  } = useUI(setPosition)

  //Sounds Hook
  const {
    musicVolume,
    setMusicVolume,
    musicLoopTransitionDuration,
    setMusicLoopTransitionDuration,
    soundAudioLevelControls,
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
  } = useSounds()

  // Route Hook
  const {
    currentRouteSelection,
    currentPortfolioSelection,
    JOILineSpeak,
    setJOILineSpeak,
    setCurrentRouteSelection,
    setCurrentPortfolioSelection,
    ROUTE_CONFIG,
    isChainPlaying,
    setIsChainPlaying
  } = useRoutes()

  // GPU Hook
  const { lowGPU, setLowGPU } = useGPU()

  useEffect(() => {
    const screenSize = getScreenSize()
    if (homePanelExpanded) {
      newYRef.current = Y_VALUES[screenSize]['7']
    } else if (currentRouteSelection === 1 && currentPortfolioSelection !== null) {
      newYRef.current = Y_VALUES[screenSize]['8']
      currentRouteSelection
    } else if (currentRouteSelection !== null) {
      newYRef.current = Y_VALUES[screenSize][currentRouteSelection.toString()]
    } else {
      newYRef.current = Y_VALUES[screenSize]['6']
    }

    // Calculate the new Y position with the offset
    const newYWithOffset = newYRef.current + offset

    moveHTMLPanel(newYWithOffset)
  }, [currentRouteSelection, currentPortfolioSelection, homePanelExpanded, offset])

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
                    scale={0.031}
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
                            <div className='left-1 scale-[54%] sm:scale-[54%] md:scale-[100%] md:w-full origin-top-left min-w-[50em] md:min-w-[74em] '>
                              {isPreLoaderFinished && <MainMenu router={router} routeConfig={ROUTE_CONFIG} />}
                            </div>
                            <div className='max-w-[26.5em] sm:max-w-[26.5em] md:max-w-[73em]'>
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
