import useAudio from '../libs/useAudio'

const AUDIO_SOURCE = '/sounds/rainLoop.ogg'
const VOLUME = 0.2
const DELAY = 0
const TRANSITION_DURATION = 2500
const LOOP = true

const RainSoundControl = () => {
  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default RainSoundControl
