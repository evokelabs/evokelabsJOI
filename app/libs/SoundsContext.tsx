import { createContext } from 'react'
import { DEFAULT_MUSIC_LOOP_TRANSITION_DURATION } from '../audio/ELAudioStartSoundControl'

export const SoundsContext = createContext({
  musicVolume: 0,
  setMusicVolume: (value: number) => {},
  musicLoopTransitionDuration: DEFAULT_MUSIC_LOOP_TRANSITION_DURATION,
  setMusicLoopTransitionDuration: (value: number) => {},
  JOILineSpeak: null as null | number,
  setJOILineSpeak: (value: number | null) => {}
})
