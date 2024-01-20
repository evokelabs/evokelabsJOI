import React, { useContext, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { AnimationContext } from '../../libs/AnimationContext'

// Constants
const LIGHT_ANIMATION_DURATION = 4
const LIGHT_INTENSITY = 1.5

const AmbientLight = () => {
  const ambientLightRef = useRef<THREE.AmbientLight>(null)
  const { shouldAmbientLightPlay } = useContext(AnimationContext)

  useEffect(() => {
    if (shouldAmbientLightPlay && ambientLightRef.current) {
      gsap.fromTo(ambientLightRef.current, { intensity: 0 }, { intensity: LIGHT_INTENSITY, duration: LIGHT_ANIMATION_DURATION })
    }
  }, [shouldAmbientLightPlay])

  return <ambientLight ref={ambientLightRef} intensity={0} color={'#005068'} />
}

export default AmbientLight
