import { createContext } from 'react'

export const SoundsContext = createContext({
  musicVolume: 0,
  setMusicVolume: (value: number) => {}
})
