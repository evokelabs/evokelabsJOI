import { createContext } from 'react'

export const DEFAULT_MUSIC_LOOP_TRANSITION_DURATION = 0.5

export const SoundsContext = createContext({
  musicVolume: 0,
  setMusicVolume: (value: number) => {},
  musicLoopTransitionDuration: DEFAULT_MUSIC_LOOP_TRANSITION_DURATION,
  setMusicLoopTransitionDuration: (value: number) => {},
  JOILineSpeak: null as null | number,
  setJOILineSpeak: (value: number | null) => {}
})
