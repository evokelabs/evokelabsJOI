import MusicStartSoundControl from './music/MusicStartSoundControl'
import MusicLoopSoundControl from './music/MusicLoopSoundControl'
import JOIPreloaderSpeech from './JOI/JOIPreloaderSpeech'
import RainSoundControl from './ambienceSFX/RainSoundControl'
import CyberpunkAmbienceSoundControl from './ambienceSFX/CyberpunkAmbienceSoundControl'

export const DEFAULT_MUSIC_LOOP_VOLUME = 0.55
export const LOW_MUSIC_LOOP_VOLUME = 0.2
export const DEFAULT_MUSIC_LOOP_TRANSITION_DURATION = 8500
export const JOI_MUSIC_LOOP_TRANSITION_DURATION = 1250

const ELAudioStartSoundControl = () => {
  return (
    <>
      {<JOIPreloaderSpeech />}
      {<MusicStartSoundControl />}
      {<MusicLoopSoundControl />}
      {<RainSoundControl />}
      {<CyberpunkAmbienceSoundControl />}
    </>
  )
}

export default ELAudioStartSoundControl
