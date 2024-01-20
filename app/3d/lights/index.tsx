import React, { useRef, useEffect, useContext } from 'react'
import { gsap } from 'gsap'

import PointLight from './PointLight'
import DirectionLight from './DirectionLight'

import { AnimationContext } from './../../libs/AnimationContext'

const LIGHT_INTENSITY = 90
const LIGHT_ANIMATION_DURATION = 4
const LIGHT_ANIMATION_DELAY = 0
const LIGHT_ANIMATION_EASE = 'Power1.easeIn'

export const Lights = () => {
  const light1Ref = useRef(null)
  const light2Ref = useRef(null)
  const ambientLightRef = useRef<THREE.AmbientLight>(null)
  const { shouldPointLightPlay, shouldAmbientLightPlay } = useContext(AnimationContext)

  useEffect(() => {
    if (shouldAmbientLightPlay) {
      gsap.fromTo(ambientLightRef.current, { intensity: 0 }, { intensity: 1.5, duration: LIGHT_ANIMATION_DURATION })
    }
  }, [shouldAmbientLightPlay])

  useEffect(() => {
    if (shouldPointLightPlay) {
      gsap.fromTo(
        [light1Ref.current, light2Ref.current],
        { intensity: 0 },
        { intensity: LIGHT_INTENSITY, duration: LIGHT_ANIMATION_DURATION, delay: LIGHT_ANIMATION_DELAY, ease: LIGHT_ANIMATION_EASE }
      )
    }
  }, [shouldPointLightPlay])

  return (
    <>
      <DirectionLight />
      <PointLight ref={light1Ref} />
      <PointLight ref={light2Ref} positionOffset={[2.88, 0, 0]} />
      <ambientLight ref={ambientLightRef} intensity={0} color={'#005068'} />
    </>
  )
}
