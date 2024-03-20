import { ReactNode } from 'react'
import { sfx, music, rain } from './audioFiles'

export interface AudioContextType {
  muteAll: boolean
  setMuteAll: (value: boolean) => void
  muteGroups: {
    sfx: boolean
    music: boolean
    rain: boolean
    speech: boolean
  }
  setMuteGroup: (group: string, value: boolean) => void
  audioGroups: {
    sfx: typeof sfx
    music: typeof music
    rain: typeof rain
  }
  playAll: () => void
}

export interface AudioContextType {
  playSpecificSfx: (soundKey: keyof typeof sfx) => void
}

export interface Theme {
  [key: string]: {
    [key: string]: {
      src: string
      volume: number
      loop?: boolean
      fadeIn?: number
      delay?: number
    }
  }
}

export interface AudioProviderProps {
  children: ReactNode
}

export interface AudioControls {
  muteMusic: boolean
  setMuteMusic: (value: boolean) => void
  muteSFX: boolean
  setMuteSFX: (value: boolean) => void
  muteRain: boolean
  setMuteRain: (value: boolean) => void
  muteSpeech: boolean
  setMuteAll: (value: boolean) => void
  muteAll: boolean
  setMuteSpeech: (value: boolean) => void
  // playAudio: (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => void
  // pauseAudio: (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => void
  // loopAudio: (audioBuffer: AudioBuffer, theme: string) => void // Update this line
  // muteTheme: (theme: string) => void
  // unmuteTheme: (theme: string) => void
}

export type ThemeGroups = 'music' | 'sfx' | 'rain' | 'joi'
