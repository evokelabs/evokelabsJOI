import React, { useContext, useEffect } from 'react'
import { gsap } from 'gsap'

import { AnimationContext } from '@/app/libs/AnimationContext'

// Constants
const BASE_POSITION: [number, number, number] = [-0.6, 2.5, 0.7]
const LIGHT_COLOR = '#FFA775'
const SHADOW_NORMAL_BIAS = 0.04
const DECAY = 4.85
const LIGHT_INTENSITY = 90
const LIGHT_ANIMATION_DURATION = 4
const LIGHT_ANIMATION_DELAY = 0
const LIGHT_ANIMATION_EASE = 'Power1.easeIn'

const PointLight = ({ positionOffset = [0, 0, 0] }) => {
  const pointLightRef = React.useRef<THREE.PointLight>(null)
  const { shouldPointLightPlay } = useContext(AnimationContext)

  // Calculate the position of the light
  const position: [number, number, number] = [
    BASE_POSITION[0] + positionOffset[0],
    BASE_POSITION[1] + positionOffset[1],
    BASE_POSITION[2] + positionOffset[2]
  ]

  useEffect(() => {
    if (shouldPointLightPlay && pointLightRef.current) {
      gsap.fromTo(
        pointLightRef.current,
        { intensity: 0 },
        {
          intensity: LIGHT_INTENSITY,
          duration: LIGHT_ANIMATION_DURATION,
          delay: LIGHT_ANIMATION_DELAY,
          ease: LIGHT_ANIMATION_EASE
        }
      )
    }
  }, [shouldPointLightPlay])

  return (
    <pointLight
      ref={pointLightRef}
      color={LIGHT_COLOR}
      position={position}
      intensity={0}
      castShadow
      shadow-normalBias={SHADOW_NORMAL_BIAS}
      decay={DECAY}
    />
  )
}

export default PointLight
