import { useContext } from 'react'
import useAudio from '../libs/useAudio'
import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { cloudfrontURL } from '@/app/libs/cloudfrontURL'

const AUDIO_SOURCE = `${cloudfrontURL}/sounds/CyberpunkAmbienceLoop.ogg`
const VOLUME_SET = 0.25
const DELAY = 2500
const TRANSITION_DURATION = 2500
const LOOP = true

const CyberpunkAmbienceSoundControl = () => {
  const { muteSFX } = useContext(SoundControlContext)
  const VOLUME = muteSFX ? 0 : VOLUME_SET // Set the volume to 0 when muteRain is true, or revert to 0.2 when muteRain is false

  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default CyberpunkAmbienceSoundControl
