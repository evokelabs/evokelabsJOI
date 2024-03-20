import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react'
import { playAudio, pauseAudio, loopAudio, startUpAudio } from './audioMaster'
import { AudioControls, AudioProviderProps } from './audioTypes'

import { muteTheme as muteThemeMaster, unmuteTheme as unmuteThemeMaster } from './audioMaster'

export const AudioContext = createContext<AudioControls>({
  playAudio: (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => {},
  pauseAudio: (source: AudioBufferSourceNode) => {},
  loopAudio: (audioBuffer: AudioBuffer, theme: string) => {},
  muteTheme: (theme: string) => {},
  unmuteTheme: (theme: string) => {},
  muteMusic: false,
  muteSFX: false,
  muteRain: false,
  muteSpeech: false,
  muteAll: false,
  setMuteMusic: (value: boolean) => {},
  setMuteSFX: (value: boolean) => {},
  setMuteRain: (value: boolean) => {},
  setMuteSpeech: (value: boolean) => {},
  setMuteAll: (value: boolean) => {}
})

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [muteMusic, setMuteMusic] = useState(false)
  const [muteSFX, setMuteSFX] = useState(false)
  const [muteRain, setMuteRain] = useState(false)
  const [muteSpeech, setMuteSpeech] = useState(false)
  const [muteAll, setMuteAll] = useState(false)

  const muteTheme = (theme: string) => {
    console.log('mute theme called', theme)
    muteThemeMaster(theme)
    switch (theme) {
      case 'music':
        setMuteMusic(true)
        break
      case 'sfx':
        setMuteSFX(true)
        break
      case 'rain':
        setMuteRain(true)
        break
      case 'joi':
        setMuteSpeech(true)
        break
      default:
        break
    }
  }

  const unmuteTheme = (theme: string) => {
    console.log('unmute theme called', theme)
    unmuteThemeMaster(theme)
    switch (theme) {
      case 'music':
        setMuteMusic(false)
        break
      case 'sfx':
        setMuteSFX(false)
        break
      case 'rain':
        setMuteRain(false)
        break
      case 'joi':
        setMuteSpeech(false)
        break
      default:
        break
    }
  }

  useEffect(() => {
    startUpAudio()
  }, [])

  return (
    <AudioContext.Provider
      value={{
        playAudio,
        pauseAudio,
        loopAudio,
        muteTheme,
        unmuteTheme,
        muteMusic,
        muteSFX,
        muteRain,
        muteSpeech,
        muteAll,
        setMuteMusic,
        setMuteSFX,
        setMuteRain,
        setMuteSpeech,
        setMuteAll
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
