import useAudio from '../libs/useAudio'

const AUDIO_SOURCE = '/sounds/musicStart.mp3'
const VOLUME = 0.6
const DELAY = 0
const TRANSITION_DURATION = 550
const LOOP = false

const MusicStartSoundControl = () => {
  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default MusicStartSoundControl
