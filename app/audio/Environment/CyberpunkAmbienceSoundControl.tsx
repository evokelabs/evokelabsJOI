import { useContext } from 'react'
import useAudio from '../libs/useAudio'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCE = '/sounds/CyberpunkAmbienceLoop.ogg'
const VOLUME_SET = 0.375
const DELAY = 25000
const TRANSITION_DURATION = 2000
const LOOP = true
const CyberpunkAmbienceSoundControl = () => {
  const { muteSFX } = useContext(SoundControlContext)
  const VOLUME = !muteSFX ? 0 : VOLUME_SET // Set the volume to 0 when muteRain is true, or revert to 0.2 when muteRain is false
  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default CyberpunkAmbienceSoundControl
