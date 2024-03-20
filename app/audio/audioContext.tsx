import React, { createContext, useContext, ReactNode, useEffect } from 'react'
import { playAudio, pauseAudio, loopAudio, startUpAudio, muteTheme, unmuteTheme } from './audioMaster'

interface AudioControls {
  playAudio: (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => void
  pauseAudio: (source: AudioBufferSourceNode) => void
  loopAudio: (audioBuffer: AudioBuffer) => void
  muteTheme: (theme: string) => void // Add this line
  unmuteTheme: (theme: string) => void // Add this line
}

export const AudioContext = createContext<AudioControls>({
  playAudio: (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => {},
  pauseAudio: (source: AudioBufferSourceNode) => {},
  loopAudio: (audioBuffer: AudioBuffer) => {},
  muteTheme: (theme: string) => {}, // Add this line
  unmuteTheme: (theme: string) => {} // Add this line
})

interface AudioProviderProps {
  children: ReactNode
}

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
