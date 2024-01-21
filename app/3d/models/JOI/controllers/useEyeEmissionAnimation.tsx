import { useCallback } from 'react'
import { gsap } from 'gsap'

// Constants
const EMISSIVE_INTENSITY_RANGE = { min: 0.65, max: 2.25 }
const DURATION = 0.35

export const useEyeEmissionAnimation = () => {
  const startEyeEmissionAnimation = useCallback((material: gsap.TweenTarget) => {
    // Generate a new random value for emissiveIntensity
    const newEmissiveIntensity = gsap.utils.random(EMISSIVE_INTENSITY_RANGE.min, EMISSIVE_INTENSITY_RANGE.max)

    // Create a new tween that transitions to the new random value over the constant duration
    gsap.to(material, {
      emissiveIntensity: newEmissiveIntensity,
      duration: DURATION
    })
  }, [])

  return startEyeEmissionAnimation
}
