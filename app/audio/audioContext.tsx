import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react'
import { playAudio, pauseAudio, loopAudio, startUpAudio } from './audioMaster'
import { AudioControls, AudioProviderProps } from './audioTypes'

import { muteTheme as muteThemeMaster, unmuteTheme as unmuteThemeMaster } from './audioMaster'

export const AudioContext = createContext<AudioControls>({
  playAudio: (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => {},
  pauseAudio: (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => {},
  loopAudio: (audioBuffer: AudioBuffer, theme: string) => {},
  muteTheme: (theme: string) => {},
  unmuteTheme: (theme: string) => {},
  muteMusic: true,
  muteSFX: true,
  muteRain: true,
  muteSpeech: true,
  muteAll: true,
  setMuteMusic: (value: boolean) => {},
  setMuteSFX: (value: boolean) => {},
  setMuteRain: (value: boolean) => {},
  setMuteSpeech: (value: boolean) => {},
  setMuteAll: (value: boolean) => {}
})

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [muteMusic, setMuteMusic] = useState(true)
  const [muteSFX, setMuteSFX] = useState(true)
  const [muteRain, setMuteRain] = useState(true)
  const [muteSpeech, setMuteSpeech] = useState(true)
  const [muteAll, setMuteAll] = useState(true)

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
    const enableAudio = () => {
      setMuteAll(false)
      setMuteMusic(false)
      setMuteSFX(false)
      setMuteRain(false)
      setMuteSpeech(false)
      window.removeEventListener('click', enableAudio)
      window.removeEventListener('touchstart', enableAudio)
      startUpAudio()
    }

    window.addEventListener('click', enableAudio)
    window.addEventListener('touchstart', enableAudio)

    return () => {
      window.removeEventListener('click', enableAudio)
      window.removeEventListener('touchstart', enableAudio)
    }
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
