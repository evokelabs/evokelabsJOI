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
import HeadingHighlight from '../ui/HeadingHighlight'
import { RED, TEAL } from '../libs/UIConstants'
import ParagraphHighlight from '../ui/ParagraphHighlight'
import RowThird from '../ui/RowThird'
import RowFull from '../ui/RowFull'
import HR from '../ui/HR'
import RowHalf from '../ui/RowHalf'
import PanelBackground from '../ui/PanelBackground'
import MainMenu from '../sections/MainMenu'
import { NextRouter } from 'next/router'
import Home from '../sections/Home'

// Constants
const debug = true
// const debug = false
const INITIAL_CAMERA_POSITION = [0, 1.5, -1] as const

const Evokelabs3D = ({ router }: { router: NextRouter }) => {
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
        <Html scale={0.03} prepend distanceFactor={10} transform className='scale-x-[-1]' position={[0.5, 1.5, 2.1]}>
          {router.pathname === '/' && <Home />}
          <MainMenu router={router} />
          {/* 
          <IconDefault />
          <ButtonSocial />
          <ButtonDefault />
          <ButtonDefault label='FIX A BOOKING' />
          <ButtonDefault label='SEND AN EMAIL' />
          <ButtonDefault label='BACK' />
          <ButtonDefault label='LAUNCH' />
          <ButtonDefault />
          <ButtonMainMenu />
          <ButtonMainMenu />
          <ButtonMainMenu />

          <HeadingHighlight heading='YOUR CREATIVE TECHNOLOGIST PARTNER FULL WIDTH' fullWidth={true} BGColor={TEAL} />
          <HeadingHighlight heading='YOUR CREATIVE TECHNOLOGIST PARTNER' fullWidth={false} BGColor={RED} />
          <HeadingHighlight heading='YOUR CREATIVE TECHNOLOGIST PARTNER FULL WIDTH' fullWidth={true} BGColor={TEAL} />
          <HeadingHighlight heading='YOUR CREATIVE TECHNOLOGIST PARTNER' fullWidth={false} BGColor={RED} />
          <ParagraphHighlight
            paragraph='Creative Technologists combine <b>creative</b>, <b>development</b>, and <b>technology</b> to address digital challenges and deliver online projects of exceptional quality.'
            BGColor={TEAL}
          />
          <ParagraphHighlight
            paragraph='“You are amazing Adrian! Seriously – you always impress me by going above and beyond!”'
            BGColor={RED}
          />

          <RowFull
            heading='FRONT END DEVELOPMENT'
            subHeading='HO HOH HO'
            paragraph='Coding UI/UX designs into working builds using the latest JS libraries. Landing pages, HTML5 banners, single page applications, multi page applications with API / GraphQL. Coding UI/UX designs into working builds using the latest JS libraries. Land'
          />
          <RowHalf
            heading='FRONT END DEVELOPMENT'
            paragraph='Coding UI/UX designs into working builds using the latest JS libraries. Landing pages, '
          />
          <RowThird
            heading='THE VERSATILITY FACTOR'
            paragraph='Why settle for one expertise when you can have it all? Visionary, developer, designer - my versatile skill set is your secret weapon. Unleash the boundless innovation that comes from a true Renaissance professional.'
          />

          <HeadingHighlight heading='YOUR CREATIVE TECHNOLOGIST PARTNER FULL WIDTH' fullWidth={true} BGColor={TEAL} />
          <PanelBackground />
          */}
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
