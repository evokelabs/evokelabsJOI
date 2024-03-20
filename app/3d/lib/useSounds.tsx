// useSounds.js
import {
  playAudio,
  pauseAudio,
  loopAudio,
  startUpAudio,
  muteTheme as muteThemeMaster,
  unmuteTheme as unmuteThemeMaster
} from '@/app/audio/audioMaster'
import { ThemeGroups } from '@/app/audio/audioTypes'
import { useState, useEffect } from 'react'

export const useSounds = () => {
  const [muteMusic, setMuteMusic] = useState(true)
  const [muteSFX, setMuteSFX] = useState(true)
  const [muteRain, setMuteRain] = useState(true)
  const [muteSpeech, setMuteSpeech] = useState(true)
  const [muteAll, setMuteAll] = useState(true)

  const muteTheme = (theme: ThemeGroups) => {
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

  const unmuteTheme = (theme: ThemeGroups) => {
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
