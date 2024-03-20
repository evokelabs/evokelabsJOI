import React, { createContext, useContext, ReactNode } from 'react'
import { useSounds } from '../3d/lib/useSounds'

interface SoundControls {}

export const AudioContext = createContext<SoundControls | undefined>(undefined)

interface AudioProviderProps {
  children: ReactNode
}

export const AudioProvider = ({ children }: AudioProviderProps) => {
  const soundControls = useSounds()

  return <AudioContext.Provider value={soundControls}>{children}</AudioContext.Provider>
}

export const useAudio = () => {
  const context = useContext(AudioContext)

  if (context === undefined) {
    throw new Error('useAudio must be used within a AudioProvider')
  }

  return context
}
