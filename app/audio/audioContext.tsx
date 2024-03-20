import React, { createContext, useContext, ReactNode, useEffect } from 'react'
import { playAudio, pauseAudio, loopAudio, startUpAudio, muteTheme, unmuteTheme } from './audioMaster'
import { AudioControls, AudioProviderProps } from './audioTypes'

export const AudioContext = createContext<AudioControls>({
  playAudio: (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => {},
  pauseAudio: (source: AudioBufferSourceNode) => {},
  loopAudio: (audioBuffer: AudioBuffer, theme: string) => {}, // Update this line
  muteTheme: (theme: string) => {},
  unmuteTheme: (theme: string) => {}
})

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  useEffect(() => {
    startUpAudio()
  }, [])

  return <AudioContext.Provider value={{ playAudio, pauseAudio, loopAudio, muteTheme, unmuteTheme }}>{children}</AudioContext.Provider>
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
