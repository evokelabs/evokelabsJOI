import { DEFAULT_MUSIC_LOOP_TRANSITION_DURATION } from '@/app/audio/ELAudioStartSoundControl'
import { useState } from 'react'

export const useSounds = () => {
  //Sound Control Function
  const [muteAll, setMuteAll] = useState(true)
  const [muteMusic, setMuteMusic] = useState(true)
  const [muteSFX, setMuteSFX] = useState(true)
  const [muteRain, setMuteRain] = useState(true)
  const [muteJOI, setMuteJOI] = useState(true)

  const [musicVolume, setMusicVolume] = useState(0)
  const [musicLoopTransitionDuration, setMusicLoopTransitionDuration] = useState(DEFAULT_MUSIC_LOOP_TRANSITION_DURATION)

  const soundAudioLevelControls = {
    setMuteAll,
    setMuteMusic,
    setMuteRain,
    setMuteSFX,
    setMuteJOI,
    muteAll,
    muteMusic,
    muteRain,
    muteSFX,
    muteJOI
  }

  return {
    musicVolume,
    setMusicVolume,
    musicLoopTransitionDuration,
    setMusicLoopTransitionDuration,
    muteAll,
    setMuteAll,
    muteMusic,
    setMuteMusic,
    muteSFX,
    setMuteSFX,
    muteRain,
    setMuteRain,
    muteJOI,
    setMuteJOI,
    soundAudioLevelControls
  }
}
