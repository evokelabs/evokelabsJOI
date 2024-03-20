// useSounds.js
import {
  playAudio,
  pauseAudio,
  loopAudio,
  startUpAudio,
  muteTheme as muteThemeMaster,
  unmuteTheme as unmuteThemeMaster
} from '@/app/audio/audioMaster'
import { useState, useEffect } from 'react'

type Theme = 'music' | 'sfx' | 'rain' | 'joi'

export const useSounds = () => {
  const [muteMusic, setMuteMusic] = useState(true)
  const [muteSFX, setMuteSFX] = useState(true)
  const [muteRain, setMuteRain] = useState(true)
  const [muteSpeech, setMuteSpeech] = useState(true)
  const [muteAll, setMuteAll] = useState(true)

  const muteTheme = (theme: Theme) => {
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

  const unmuteTheme = (theme: Theme) => {
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
      console.log('enableAudio', muteSFX)
    }

    window.addEventListener('click', enableAudio)
    window.addEventListener('touchstart', enableAudio)

    return () => {
      window.removeEventListener('click', enableAudio)
      window.removeEventListener('touchstart', enableAudio)
    }
  }, [])

  useEffect(() => {
    console.log('muteSFX', muteSFX)
  }, [muteSFX])

  return {
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
  }
}
