import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const BASE_POSITION: [number, number, number] = [-0.6, 2.5, 0.7]
const LIGHT_COLOR = '#FFA775'
const LIGHT_INTENSITY = 90
const SHADOW_NORMAL_BIAS = 0.04
const DECAY = 4.85

const LIGHT_ANIMATION_DURATION = 4
const LIGHT_ANIMATION_DELAY = 4
const LIGHT_ANIMATION_EASE = 'Power1.easeIn'

type PointLightProps = {
  positionOffset?: [number, number, number]
}

const PointLight: React.FC<PointLightProps> = ({ positionOffset = [0, 0, 0] }) => {
  const position: [number, number, number] = [
    BASE_POSITION[0] + positionOffset[0],
    BASE_POSITION[1] + positionOffset[1],
    BASE_POSITION[2] + positionOffset[2]
  ]
  const lightRef = useRef<THREE.PointLight>(null)

  useEffect(() => {
    if (lightRef.current) {
      gsap.fromTo(
        lightRef.current,
        { intensity: 0 },
        { intensity: LIGHT_INTENSITY, duration: LIGHT_ANIMATION_DURATION, delay: LIGHT_ANIMATION_DELAY, ease: LIGHT_ANIMATION_EASE }
      )
    }
  }, [])

  return (
    <pointLight
      ref={lightRef}
      color={LIGHT_COLOR}
      position={position}
      intensity={LIGHT_INTENSITY}
      castShadow
      shadow-normalBias={SHADOW_NORMAL_BIAS}
      decay={DECAY}
    />
  )
}

export default PointLight
