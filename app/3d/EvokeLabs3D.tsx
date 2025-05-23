import { useState } from 'react'
import { NextRouter } from 'next/router'
import { Vector2, Vector3 } from 'three'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, ChromaticAberration, BrightnessContrast } from '@react-three/postprocessing'
import Draggable from 'react-draggable'

import { Lights } from './lights'

import CameraRig from './cameras/CameraRig'

import CyberpunkMap from './models/CyberpunkMap'
import CyberpunkCar from './models/CyberpunkCar/index'
import JOI from './models/JOI/index'
import WideMonitor from './models/WideMonitor'
import DeskItems from './models/DeskItems'
import CyberpunkMapLowPoly from './models/CyberpunkMapLowPoly'

import VideoSkybox from './textures/VideoSkyBox'

import Rain from './particles/Rain'

import { AnimationContext } from '../libs/AnimationContext'

import MainMenu from '../sections/MainMenu'
import Home from '../sections/Home'
import JOISpecial from '../sections/JOISpecial'
import History from '../sections/History'
import Resume from '../sections/Resume'
import Availabilities from '../sections/Availabilities'
import Services from '../sections/Services'
import Portfolio from '../sections/Portfolio'

import JOISubtitles from '../ui/JOISubtitles'
import SocialIcons from '../ui/SocialIcons'
import SoundControlIcons from '../ui/SoundControlIcons'

import ELAudioStartSoundControl from '../audio/ELAudioStartSoundControl'

import { SoundsContext } from '../libs/SoundsContext'
import { JOISpeechContext } from '../libs/JOISpeechContext'
import { RoutesContext } from '../libs/RoutesContext'
import { SoundControlContext } from '../libs/SoundControlContext'
import { PortfolioContext } from '../libs/PortfolioContext'
import { GPUContext } from '../libs/GPUContext'

import { useGPU } from './lib/useGPU'
import { useSounds } from './lib/useSounds'
import { useRoutes } from './lib/useRoutes'
import { useUI } from './lib/useUI'
import { usePreloader } from './lib/usePreloader'
import { useResponsive } from './lib/useResponsive'
import { ROUTE_CONFIG } from '../libs/ROUTE_CONFIG'
import Preloader from '../ui/Preloader'

import { usePreloaderMasking } from './lib/usePreloaderMasking'
import PreloaderLogoIntroEffect from '../ui/PreloaderLogoIntroEffect'
import { useScreenSize } from '../libs/useScreenSize'

const RainOverlay = ({
  fov,
  eventSource,
  isPreLoaderFinished,
  cameraTarget,
}: {
  fov: number
  eventSource: any
  isPreLoaderFinished: boolean
  cameraTarget: Vector3
}) => {
  return (
    <div className='h-full w-full pointer-events-none relative top-[-100%] z-[-10] '>
      <Canvas
        camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.01, far: 200 }}
        shadows
        gl={{
          powerPreference: 'high-performance',
        }}
        style={{ pointerEvents: 'none' }}
        eventSource={eventSource}
        eventPrefix='page'>
        <Rain isPreLoaderFinished={isPreLoaderFinished} />
        <CameraRig
          fov={fov}
          debug={false}
        />
        <OrbitControls
          target={cameraTarget}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  )
}

// Constants
const INITIAL_CAMERA_POSITION = [-0.3, 1.5, -1] as const

const Evokelabs3D = ({ router }: { router: NextRouter }) => {
  // State
  const [shouldJOISpeak, setShouldJOISpeak] = useState(false)
  const [maskRemoved, setMaskRemoved] = useState(false)

  //JOI Speech settings
  const [JOILineCaption, setJOILineCaption] = useState<string | null>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  //Preloader hook
  const {
    shouldMapDarkness,
    setShouldMapDarkness,
    setAmbientLightPlay,
    setPointLightPlay,
    shouldAmbientLightPlay,
    shouldPointLightPlay,
    setIsPreLoaderFinished,
    isPreLoaderFinished,
    isCarReady,
    setMenuHomeWaitTimer,
    isHomeReady,
  } = usePreloader()

  // Route Hook
  const currentRouteIndex = ROUTE_CONFIG.findIndex((route) => route.route === router.pathname)

  const [currentRouteSelection, setCurrentRouteSelection] = useState<null | number>(currentRouteIndex)
  const [currentPortfolioSelection, setCurrentPortfolioSelection] = useState<null | string>(null)

  const { JOILineSpeak, setJOILineSpeak, isChainPlaying, setIsChainPlaying } = useRoutes(
    currentRouteSelection,
    currentPortfolioSelection,
    setCurrentRouteSelection,
    setCurrentPortfolioSelection,
    ROUTE_CONFIG,
    setMenuHomeWaitTimer,
    setIsPreLoaderFinished,
    setMaskRemoved,
  )

  //Responsive Hook
  const { htmlRef, setPosition, position, fov, cameraTarget, homePanelExpanded, setHomePanelExpanded, htmlScale } = useResponsive(
    currentRouteSelection,
    currentPortfolioSelection,
  )

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
    eventSource,
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
    muteJOI,
  } = useSounds()

  // GPU Hook
  const { lowGPU, setLowGPU } = useGPU()

  // Preloader Masking Hook
  usePreloaderMasking(isPreLoaderFinished, currentRouteSelection, setMaskRemoved)

  const screenSize = useScreenSize()

  return (
    <>
      <SoundControlContext.Provider
        value={{ muteAll, setMuteAll, muteMusic, setMuteMusic, muteSFX, setMuteSFX, muteRain, setMuteRain, muteJOI, setMuteJOI }}>
        <JOISpeechContext.Provider
          value={{ JOILineCaption, setJOILineCaption, isAudioPlaying, setIsAudioPlaying, isChainPlaying, setIsChainPlaying }}>
          <div
            ref={container}
            className='h-full overflow-hidden  '>
            <div
              className={`relative bg-no-repeat top-0 left-0 w-full h-full z-0 ${
                !maskRemoved && isPreLoaderFinished && currentRouteSelection === null ? 'masked-element' : ''
              }`}>
              <Canvas
                camera={{ position: INITIAL_CAMERA_POSITION, fov, near: 0.01, far: 200 }}
                shadows
                gl={{
                  powerPreference: 'high-performance',
                }}
                style={{ pointerEvents: 'none' }}
                eventSource={eventSource}
                eventPrefix='page'>
                <SoundsContext.Provider
                  value={{
                    musicVolume,
                    setMusicVolume,
                    musicLoopTransitionDuration,
                    setMusicLoopTransitionDuration,
                    JOILineSpeak,
                    setJOILineSpeak,
                  }}>
                  <AnimationContext.Provider
                    value={{
                      shouldAmbientLightPlay,
                      shouldPointLightPlay,
                      shouldJOISpeak,
                      setAmbientLightPlay,
                      setPointLightPlay,
                      setShouldJOISpeak,
                      shouldMapDarkness,
                      setShouldMapDarkness,
                    }}>
                    <Html
                      ref={htmlRef}
                      scale={htmlScale}
                      prepend
                      distanceFactor={10}
                      transform
                      className='scale-x-[-1]'
                      position={position}
                      onPointerDown={handleMouseDown}
                      onPointerUp={handleMouseUp}
                      onPointerMove={handleMouseMove}
                      lang='en'>
                      <PortfolioContext.Provider
                        value={{
                          selectedShowOnlyOption,
                          setSelectedShowOnlyOption,
                          selectedSortByOption,
                          setSelectedSortByOption,
                        }}>
                        <RoutesContext.Provider
                          value={{
                            currentRouteSelection,
                            setCurrentRouteSelection,
                            currentPortfolioSelection,
                            setCurrentPortfolioSelection,
                            homePanelExpanded,
                            setHomePanelExpanded,
                          }}>
                          <Draggable disabled={screenSize === 'BASE' || screenSize === 'SM'}>
                            <div
                              onPointerDown={handleMouseDown}
                              onPointerUp={handleMouseUp}
                              className='flex flex-col-reverse p-4 relative translate-y-10 '>
                              <div className='left-1 scale-[54%] sm:scale-[54%] md:scale-[100%] md:w-full origin-top-left min-w-[50em] md:min-w-[74em] '>
                                {isPreLoaderFinished && isHomeReady && (
                                  <MainMenu
                                    router={router}
                                    routeConfig={ROUTE_CONFIG}
                                  />
                                )}
                              </div>
                              <div className='max-w-[26.5em] sm:max-w-[26.5em] md:max-w-[73em]'>
                                {isPreLoaderFinished && isHomeReady && router.pathname === '/' && <Home muteSFX={muteSFX} />}
                                {router.pathname === '/services' && <Services />}
                                {router.pathname.startsWith('/portfolio') && (
                                  <Portfolio
                                    soundAudioLevelControls={soundAudioLevelControls}
                                    setShouldMapDarkness={setShouldMapDarkness}
                                  />
                                )}
                                {router.pathname === '/history' && (
                                  <History
                                    soundAudioLevelControls={soundAudioLevelControls}
                                    setShouldMapDarkness={setShouldMapDarkness}
                                  />
                                )}
                                {router.pathname === '/resume' && <Resume soundAudioLevelControls={soundAudioLevelControls} />}
                                {router.pathname === '/joi' && (
                                  <JOISpecial
                                    soundAudioLevelControls={soundAudioLevelControls}
                                    setShouldMapDarkness={setShouldMapDarkness}
                                  />
                                )}
                                {router.pathname === '/availabilities' && <Availabilities />}
                              </div>
                            </div>
                          </Draggable>
                        </RoutesContext.Provider>
                      </PortfolioContext.Provider>
                    </Html>

                    <GPUContext.Provider value={{ lowGPU, setLowGPU }}>
                      {isPreLoaderFinished && <ELAudioStartSoundControl />}
                      {isPreLoaderFinished ? (
                        <>
                          <VideoSkybox />
                          <Rain isPreLoaderFinished={isPreLoaderFinished} />
                          <Lights />
                          {isCarReady && <CyberpunkCar />}
                          <WideMonitor />
                          {!lowGPU && <DeskItems />}
                          {lowGPU ? <CyberpunkMapLowPoly /> : <CyberpunkMap />}
                          <JOI />

                          {lowGPU ? (
                            <EffectComposer disableNormalPass>
                              <Bloom
                                mipmapBlur
                                radius={0.65}
                                luminanceThreshold={1}
                                intensity={0.525}
                                luminanceSmoothing={0.65}
                                levels={5}
                              />
                              <BrightnessContrast
                                brightness={0.02}
                                contrast={0.275}
                              />
                              <Vignette
                                offset={0.0}
                                darkness={1}
                              />
                            </EffectComposer>
                          ) : (
                            <EffectComposer disableNormalPass>
                              <DepthOfField
                                target={[0.8, 1.75, 2.1]}
                                focusDistance={0.002}
                                focusRange={0.0035}
                                bokehScale={2}
                              />
                              <Bloom
                                mipmapBlur
                                radius={0.65}
                                luminanceThreshold={1}
                                intensity={0.525}
                                luminanceSmoothing={0.65}
                                levels={5}
                              />
                              <ChromaticAberration
                                offset={new Vector2(0.02, 0.02)}
                                radialModulation={true}
                                modulationOffset={1.1}
                              />
                              <Noise
                                opacity={0.7}
                                premultiply
                                blendFunction={28}
                              />
                              <BrightnessContrast
                                brightness={0.02}
                                contrast={0.275}
                              />
                              <Vignette
                                offset={0.0}
                                darkness={1}
                              />
                            </EffectComposer>
                          )}
                        </>
                      ) : (
                        <>
                          <Rain isPreLoaderFinished={isPreLoaderFinished} />
                        </>
                      )}

                      <CameraRig
                        fov={fov}
                        debug={false}
                      />
                      <OrbitControls
                        target={cameraTarget}
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                      />
                    </GPUContext.Provider>
                  </AnimationContext.Provider>
                </SoundsContext.Provider>
              </Canvas>
              d
            </div>
            {/* end masked elemnts */}
          </div>
          {!isPreLoaderFinished && (
            <Preloader
              setIsPreLoaderFinished={setIsPreLoaderFinished}
              soundAudioLevelControls={soundAudioLevelControls}
            />
          )}

          {currentRouteSelection === null && isPreLoaderFinished && !maskRemoved && (
            <PreloaderLogoIntroEffect isPreLoaderFinished={isPreLoaderFinished} />
          )}
          <SocialIcons soundAudioLevelControls={soundAudioLevelControls} />
          <JOISubtitles />
          {isPreLoaderFinished && <SoundControlIcons />}
          {!maskRemoved && (
            <RainOverlay
              fov={fov}
              eventSource={eventSource}
              isPreLoaderFinished={false}
              cameraTarget={cameraTarget}
            />
          )}
        </JOISpeechContext.Provider>
      </SoundControlContext.Provider>
    </>
  )
}

export default Evokelabs3D
