import useAudio from '../libs/useAudio'

const AUDIO_SOURCE = '/sounds/CyberpunkAmbienceLoop.ogg'
const VOLUME = 0.375
const DELAY = 25000
const TRANSITION_DURATION = 2000
const LOOP = true
const CyberpunkAmbienceSoundControl = () => {
  useAudio(AUDIO_SOURCE, VOLUME, DELAY, TRANSITION_DURATION, LOOP)
  return null
}

export default CyberpunkAmbienceSoundControl
