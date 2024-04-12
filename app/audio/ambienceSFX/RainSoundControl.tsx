import { useContext } from 'react'
import useAudio from '../libs/useAudio'
import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { cloudfrontURL } from '@/app/libs/cloudfrontURL'

const AUDIO_SOURCE = `${cloudfrontURL}/sounds/rainLoop.ogg`
const VOLUME_SET = 0.15
const DELAY = 0
const TRANSITION_DURATION = 2500
const LOOP = true

const RainSoundControl = () => {
  const { muteRain } = useContext(SoundControlContext)
  const VOLUME = muteRain ? 0 : VOLUME_SET // Set the volume to 0 when muteRain is true, or revert to 0.2 when muteRain is false

  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default RainSoundControl
