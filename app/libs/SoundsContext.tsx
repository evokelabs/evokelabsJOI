import { createContext } from 'react'

export const SoundsContext = createContext({
  musicVolume: 0.001,
  setMusicVolume: (value: number) => {}
})
