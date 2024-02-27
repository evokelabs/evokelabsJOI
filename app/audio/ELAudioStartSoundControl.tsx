import { useContext, useEffect, useRef, useState } from 'react'
import MusicStartSoundControl from './music/MusicStartSoundControl'
import MusicLoopSoundControl from './music/MusicLoopSoundControl'
import RainSoundControl from './environment/RainSoundControl'
import CyberpunkAmbienceSoundControl from './environment/CyberpunkAmbienceSoundControl'
import JOIPreloaderSpeechControl from './JOI/JOIPreloaderSpeechControl'
import { SoundsContext } from '../libs/SoundsContext'

export const DEFAULT_MUSIC_LOOP_VOLUME = 0.55
export const LOW_MUSIC_LOOP_VOLUME = 0.2
export const DEFAULT_MUSIC_LOOP_TRANSITION_DURATION = 8500
export const JOI_MUSIC_LOOP_TRANSITION_DURATION = 1250

const ELAudioStartSoundControl = () => {
  const [play, setPlay] = useState(false)
  const hasStarted = useRef(false)
  const { musicVolume } = useContext(SoundsContext)
  const { musicLoopTransitionDuration } = useContext(SoundsContext)

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasStarted.current) {
        setPlay(true)
        hasStarted.current = true
      }

      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('keydown', handleUserInteraction)
    }

    window.addEventListener('click', handleUserInteraction)
    window.addEventListener('keydown', handleUserInteraction)

    return () => {
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('keydown', handleUserInteraction)
    }
  }, [])

  return (
    <>
      {play && <JOIPreloaderSpeechControl volume={1.275} delay={2500} transitionDuration={150} loop={false} />}
      {play && <MusicStartSoundControl />}
      {play && <MusicLoopSoundControl volume={musicVolume} delay={3600} transitionDuration={musicLoopTransitionDuration} />}
      {play && <RainSoundControl />}
      {play && <CyberpunkAmbienceSoundControl />}
    </>
  )
}

export default ELAudioStartSoundControl
