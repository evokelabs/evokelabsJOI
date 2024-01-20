import { Suspense, useCallback, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Vector3, PerspectiveCamera } from 'three'

import { Lights } from './lights'
import CyberpunkMap from './models/CyberpunkMap'
import CyberpunkCar from './models/CyberpunkCar/index'
import VideoSkybox from './textures/VideoSkyBox'
import Rain from './particles/Rain'
import JOI from './models/JOI'
import Music from './audio/Music'

import { getFov } from '../libs/helpers'
import { AnimationContext } from '../libs/AnimationContext'

const MOBILE_WIDTH_THRESHOLD = 768
const INITIAL_TARGET_MOBILE = new Vector3(0.8, 1.4, 2.5)
const INITIAL_TARGET_DESKTOP = new Vector3(0.15, 1.4, 2.5)
const DEFAULT_FOV = 50
const CAMERA_DAMPING = 0.015
const CAMERA_X_OFFSET = 3
const CAMERA_Y_OFFSET = 0.5

const debug = false
// const debug = true

const CameraRig = ({ fov }: { fov: number }) => {
  const { camera } = useThree()

  useFrame(state => {
    if (debug) return
    const XPosition = 0 - (state.pointer.x * state.viewport.width) / CAMERA_X_OFFSET
    const YPosition = (CAMERA_X_OFFSET + state.pointer.y) / 2
    const ZPosition = -CAMERA_Y_OFFSET
    const dampingValue = CAMERA_DAMPING

    const targetPosition = new Vector3(XPosition, YPosition, ZPosition)

    camera.position?.lerp(targetPosition, dampingValue)

    const perspectiveCamera = camera as PerspectiveCamera
    perspectiveCamera.fov = fov
    perspectiveCamera.updateProjectionMatrix()
  })

  return null
}

const Evokelabs3D = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= MOBILE_WIDTH_THRESHOLD
  const initialTarget = isMobile ? INITIAL_TARGET_MOBILE : INITIAL_TARGET_DESKTOP
  const [cameraTarget, setCameraTarget] = useState(initialTarget)

  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)

  const initialFov = typeof window !== 'undefined' ? getFov(window.innerWidth) : DEFAULT_FOV
  const [fov, setFov] = useState(initialFov)

  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= MOBILE_WIDTH_THRESHOLD
    const newVector = isMobile ? INITIAL_TARGET_MOBILE : INITIAL_TARGET_DESKTOP
    setCameraTarget(newVector)
    const newFov = getFov(window.innerWidth)
    setFov(newFov)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <>
      <Canvas camera={{ position: [0, 1.5, -1], fov, near: 0.1, far: 2000 }} shadows>
        <VideoSkybox />
        {debug ? <Perf position='top-left' /> : <CameraRig fov={fov} />}
        <OrbitControls makeDefault target={cameraTarget} enableZoom={debug} enablePan={debug} enableRotate={debug} />
        <AnimationContext.Provider value={{ shouldAmbientLightPlay, shouldPointLightPlay, setAmbientLightPlay, setPointLightPlay }}>
          <Suspense fallback={null}>
            <Lights />
            <CyberpunkMap />
            <JOI />
            <CyberpunkCar />
            <Rain />
          </Suspense>
        </AnimationContext.Provider>
      </Canvas>
      <Music />
    </>
  )
}

export default Evokelabs3D
