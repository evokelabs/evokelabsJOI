import { useContext, useEffect, useState } from 'react'
import useAudio from '../libs/useAudio'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCE = '/sounds/CyberpunkAmbienceLoop.ogg'
const VOLUME_SET = 0.3
const DELAY_SET = 1500
const TRANSITION_DURATION = 2500
const LOOP = true
const CyberpunkAmbienceSoundControl = () => {
  const { muteSFX } = useContext(SoundControlContext)
  const [VOLUME, setVolume] = useState(muteSFX ? 0 : VOLUME_SET)
  const [DELAY, setDelay] = useState(muteSFX ? 0 : DELAY_SET)

  useEffect(() => {
    setVolume(muteSFX ? 0 : VOLUME_SET)
    setDelay(muteSFX ? 0 : DELAY_SET)
  }, [muteSFX])

  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default CyberpunkAmbienceSoundControl
