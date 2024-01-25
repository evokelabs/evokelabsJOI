import { createContext } from 'react'

export const AnimationContext = createContext({
  shouldPointLightPlay: false,
  setPointLightPlay: (value: boolean) => {},
  shouldAmbientLightPlay: false,
  setAmbientLightPlay: (value: boolean) => {},
  shouldJOISpeak: false,
  setShouldJOISpeak: (value: boolean) => {}
})
