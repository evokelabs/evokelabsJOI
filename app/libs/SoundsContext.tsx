import { createContext } from 'react'
import { DEFAULT_MUSIC_LOOP_TRANSITION_DURATION, DEFAULT_MUSIC_LOOP_VOLUME } from '../audio/ELAudioStartSoundControl'

export const SoundsContext = createContext({
  musicVolume: DEFAULT_MUSIC_LOOP_VOLUME,
  setMusicVolume: (value: number) => {},
  musicLoopTransitionDuration: DEFAULT_MUSIC_LOOP_TRANSITION_DURATION,
  setMusicLoopTransitionDuration: (value: number) => {},
  JOILineSpeak: null as null | number,
  setJOILineSpeak: (value: number | null) => {}
})
