import { useContext } from 'react'
import useAudio from '../libs/useAudio'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCE = '/sounds/musicStart.mp3'
const VOLUME_SET = 0.6
const DELAY = 0
const TRANSITION_DURATION = 550
const LOOP = false

const MusicStartSoundControl = () => {
  const { muteMusic } = useContext(SoundControlContext)
  const VOLUME = !muteMusic ? 0 : VOLUME_SET // Set the volume to 0 when muteRain is true, or revert to 0.2 when muteRain is false

  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default MusicStartSoundControl
