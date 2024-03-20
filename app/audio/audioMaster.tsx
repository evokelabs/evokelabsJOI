import React, { createContext, useState, useContext, useEffect } from 'react'

// Define the paths to the sfx files
const sfx = {
  CyberpunkPunkAmbienceLoop: '/sounds/CyberpunkAmbienceLoop.ogg',
  engineLoop: '/sounds/engineLoop.ogg',
  shutters: '/sounds/shutters.mp3',
  TypeOnEnd: '/sounds/TypeOnEnd.ogg',
  TypeOnLoop: '/sounds/TypeOnLoop.ogg',
  scrabbleLoop: '/sounds/scrabbleLoop.ogg'
}

// Define the paths to the music files
const music = {
  musicLoop: '/sounds/musicLoop.ogg',
  musicStart: '/sounds/musicStart.mp3'
}

// Define the path to the rain file
const rain = {
  rainLoop: '/sounds/rainLoop.ogg'
}

// Define the shape of the context
interface AudioContextType {
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

// Create the context
const AudioContext = createContext<AudioContextType | undefined>(undefined)

// Create a provider component
export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [muteAll, setMuteAll] = useState(false)
  const [muteGroups, setMuteGroups] = useState({
    sfx: false,
    music: false,
    rain: false,
    speech: false
  })

  const setMuteGroup = (group: string, value: boolean) => {
    setMuteGroups(prevState => ({ ...prevState, [group]: value }))
  }

  const playAll = () => {
    // Create Audio objects for all audio files
    const sfxAudio = Object.values(sfx).map(src => new Audio(src))
    const musicAudio = Object.values(music).map(src => new Audio(src))
    const rainAudio = Object.values(rain).map(src => new Audio(src))

    // Play all audio
    sfxAudio.forEach(audio => audio.play())
    musicAudio.forEach(audio => audio.play())
    rainAudio.forEach(audio => audio.play())
  }

  useEffect(() => {
    playAll()
  }, [])

  return (
    <AudioContext.Provider value={{ muteAll, setMuteAll, muteGroups, setMuteGroup, audioGroups: { sfx, music, rain }, playAll }}>
      {children}
    </AudioContext.Provider>
  )
}

// Create a custom hook to use the AudioContext
export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
