import { useState } from 'react'

export const useSounds = () => {
  //Sound Control Function
  const [muteAll, setMuteAll] = useState(true)
  const [muteMusic, setMuteMusic] = useState(true)
  const [muteSFX, setMuteSFX] = useState(true)
  const [muteRain, setMuteRain] = useState(true)
  const [muteSpeech, setMuteSpeech] = useState(true)

  const soundAudioLevelControls = {
    setMuteAll,
    setMuteMusic,
    setMuteRain,
    setMuteSFX,
    setMuteSpeech,
    muteAll,
    muteMusic,
    muteRain,
    muteSFX,
    muteSpeech
  }

  return {
    muteAll,
    setMuteAll,
    muteMusic,
    setMuteMusic,
    muteSFX,
    setMuteSFX,
    muteRain,
    setMuteRain,
    muteSpeech,
    setMuteSpeech,
    soundAudioLevelControls
  }
}
