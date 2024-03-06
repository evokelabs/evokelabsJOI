import { useState } from 'react'
import MusicStartSoundControl from './music/MusicStartSoundControl'
import MusicLoopSoundControl from './music/MusicLoopSoundControl'
import JOIPreloaderSpeech from './JOI/JOIPreloaderSpeech'
import RainSoundControl from './Environment/RainSoundControl'
import CyberpunkAmbienceSoundControl from './Environment/CyberpunkAmbienceSoundControl'

export const DEFAULT_MUSIC_LOOP_VOLUME = 0.4
export const LOW_MUSIC_LOOP_VOLUME = 0.2
export const DEFAULT_MUSIC_LOOP_TRANSITION_DURATION = 0
export const JOI_MUSIC_LOOP_TRANSITION_DURATION = 0

const ELAudioStartSoundControl = () => {
  return (
    <>
      {<JOIPreloaderSpeech />}
      {/* {<MusicStartSoundControl />} */}
      {<MusicLoopSoundControl />}
      {<RainSoundControl />}
      {<CyberpunkAmbienceSoundControl />}
    </>
  )
}

export default ELAudioStartSoundControl
