import { createContext } from 'react'
import { gsap } from 'gsap'

export const AnimationContext = createContext({
  shouldPointLightPlay: false,
  setPointLightPlay: (value: boolean) => {},
  shouldAmbientLightPlay: false,
  setAmbientLightPlay: (value: boolean) => {}
})
