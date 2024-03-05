import { useContext, useEffect, useRef, useState } from 'react'
import MusicStartSoundControl from './music/MusicStartSoundControl'
import MusicLoopSoundControl from './music/MusicLoopSoundControl'
import RainSoundControl from './environment/RainSoundControl'
import CyberpunkAmbienceSoundControl from './environment/CyberpunkAmbienceSoundControl'
import JOIPreloaderSpeech from './JOI/JOIPreloaderSpeech'
import { SoundControlContext } from '../libs/SoundControlContext'

export const DEFAULT_MUSIC_LOOP_VOLUME = 0.4
export const LOW_MUSIC_LOOP_VOLUME = 0.2
export const DEFAULT_MUSIC_LOOP_TRANSITION_DURATION = 8500
export const JOI_MUSIC_LOOP_TRANSITION_DURATION = 1250

const ELAudioStartSoundControl = () => {
  const [play, setPlay] = useState(true)

  return (
    <>
      {play && <JOIPreloaderSpeech />}
      {play && <MusicStartSoundControl />}
      {play && <MusicLoopSoundControl />}
      {play && <RainSoundControl />}
      {play && <CyberpunkAmbienceSoundControl />}
    </>
  )
}

export default ELAudioStartSoundControl
