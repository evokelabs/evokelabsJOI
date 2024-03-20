import React, { createContext, useContext, ReactNode, useEffect } from 'react'
import { playAudio, pauseAudio, loopAudio, startUpAudio } from './audioMaster'

interface AudioControls {
  playAudio: (audioBuffer: AudioBuffer, volume: number, loop?: boolean) => void
  pauseAudio: (source: AudioBufferSourceNode) => void
  loopAudio: (audioBuffer: AudioBuffer) => void
}

export const AudioContext = createContext<AudioControls>({
  playAudio: (audioBuffer: AudioBuffer) => {},
  pauseAudio: (source: AudioBufferSourceNode) => {},
  loopAudio: (audioBuffer: AudioBuffer) => {}
})

interface AudioProviderProps {
  children: ReactNode
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  useEffect(() => {
    startUpAudio()
  }, [])

  return <AudioContext.Provider value={{ playAudio, pauseAudio, loopAudio }}>{children}</AudioContext.Provider>
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
