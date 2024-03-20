import React, { createContext, useState, useContext, useEffect } from 'react'

const CYBERPUNK_AMBIENCE_FADE_IN = 3000
const RAIN_FADE_IN = 3000
const MUSIC_START_FADE_IN = 3000
const MUSIC_LOOP_FADE_IN = 3000
const MUSIC_LOOP_DELAY = 7000

// Define the paths to the sfx files
const sfx = {
  CyberpunkPunkAmbienceLoop: { src: '/sounds/CyberpunkAmbienceLoop.ogg', volume: 0.3 },
  engineLoop: { src: '/sounds/engineLoop.ogg', volume: 0.55 },
  shutters: { src: '/sounds/shutters.mp3', volume: 0.5 },
  TypeOnEnd: { src: '/sounds/TypeOnEnd.ogg', volume: 0.5 },
  TypeOnLoop: { src: '/sounds/TypeOnLoop.ogg', volume: 0.5 },
  scrabbleLoop: { src: '/sounds/scrabbleLoop.ogg', volume: 0.5 }
}

// Define the paths to the music files
const music = {
  musicLoop: { src: '/sounds/musicLoop.ogg', volume: 0.45 },
  musicStart: { src: '/sounds/musicStart.mp3', volume: 0.45 }
}

// Define the path to the rain file
const rain = {
  rainLoop: { src: '/sounds/rainLoop.ogg', volume: 0.15 }
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

// Define the shape of the context
interface AudioContextType {
  playSpecificSfx: (soundKey: keyof typeof sfx) => void
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

  const fadeIn = (audio: HTMLAudioElement, duration: number, targetVolume: number) => {
    const step = targetVolume / (duration / 100)
    audio.volume = 0
    audio.play()

    const interval = setInterval(() => {
      if (audio.volume < targetVolume) {
        audio.volume = Math.min(audio.volume + step, targetVolume)
      } else {
        clearInterval(interval)
      }
    }, 100)
  }

  const setMuteGroup = (group: string, value: boolean) => {
    setMuteGroups(prevState => ({ ...prevState, [group]: value }))
  }

  const playSpecificSfx = (soundKey: keyof typeof sfx) => {
    // Create an Audio object for the specified sfx file
    const { src, volume } = sfx[soundKey]
    const audio = new Audio(src)
    audio.volume = volume
    audio.play()
  }

  const playAll = () => {
    // Create Audio objects for all audio files
    const sfxAudio = Object.entries(sfx).map(([key, { src, volume }]) => {
      const audio = new Audio(src)
      audio.volume = volume
      if (key === 'CyberpunkPunkAmbienceLoop') {
        fadeIn(audio, CYBERPUNK_AMBIENCE_FADE_IN, volume)
      } else if (key !== 'TypeOnEnd' && key !== 'TypeOnLoop' && key !== 'scrabbleLoop' && key !== 'shutters' && key !== 'engineLoop') {
        audio.play()
      }
      return audio
    })
    const musicAudio = Object.entries(music).map(([key, { src, volume }]) => {
      const audio = new Audio(src)
      audio.volume = volume
      audio.loop = key === 'musicLoop' // Loop if it's musicLoop
      if (key === 'musicStart') {
        fadeIn(audio, MUSIC_START_FADE_IN, volume)
      } else if (key === 'musicLoop') {
        setTimeout(() => {
          fadeIn(audio, MUSIC_LOOP_FADE_IN, volume)
        }, MUSIC_LOOP_DELAY)
      }
      return audio
    })
    const rainAudio = Object.entries(rain).map(([key, { src, volume }]) => {
      const audio = new Audio(src)
      audio.volume = volume
      audio.loop = true // Loop the rain sound
      fadeIn(audio, RAIN_FADE_IN, volume)
      return audio
    })
  }

  useEffect(() => {
    playAll()
  }, [])

  return (
    <AudioContext.Provider
      value={{ muteAll, setMuteAll, muteGroups, setMuteGroup, audioGroups: { sfx, music, rain }, playAll, playSpecificSfx }}
    >
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
