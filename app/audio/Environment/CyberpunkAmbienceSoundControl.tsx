import { useContext } from 'react'
import useAudio from '../libs/useAudio'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCE = '/sounds/CyberpunkAmbienceLoop.ogg'
const VOLUME_SET = 0.3
const DELAY = 5500
const TRANSITION_DURATION = 2500
const LOOP = true
const CyberpunkAmbienceSoundControl = () => {
  const { muteSFX } = useContext(SoundControlContext)
  const VOLUME = muteSFX ? 0 : VOLUME_SET
  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default CyberpunkAmbienceSoundControl
