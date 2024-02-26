import { useContext, useEffect, useRef, useState } from 'react'
import MusicStartSoundControl from './music/MusicStartSoundControl'
import MusicLoopSoundControl from './music/MusicLoopSoundControl'
import RainSoundControl from './environment/RainSoundControl'
import CyberpunkAmbienceSoundControl from './environment/CyberpunkAmbienceSoundControl'
import JOIPreloaderSpeechControl from './JOI/JOIPreloaderSpeechControl'
import { SoundsContext } from '../libs/SoundsContext'

export const DEFAULT_MUSIC_LOOP_VOLUME = 0.55
export const LOW_MUSIC_LOOP_VOLUME = 0.15
export const DEFAULT_MUSIC_LOOP_TRANSITION_DURATION = 8000
export const JOI_MUSIC_LOOP_TRANSITION_DURATION = 750

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
      {play && <MusicStartSoundControl volume={0.6} delay={0} transitionDuration={150} loop={false} />}
      {play && <MusicLoopSoundControl volume={musicVolume} delay={3400} transitionDuration={musicLoopTransitionDuration} />}
      {play && <RainSoundControl volume={0.25} delay={0} transitionDuration={5500} />}
      {play && <CyberpunkAmbienceSoundControl volume={0.375} delay={25000} transitionDuration={2000} />}
    </>
  )
}

export default ELAudioStartSoundControl
