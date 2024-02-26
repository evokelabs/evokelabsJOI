import { useEffect, useRef, useState } from 'react'
import MusicLoop from './music/MusicLoopSoundControl'
import RainSoundControl from './environment/RainSoundControl'
import CyberpunkAmbienceSoundControl from './environment/CyberpunkAmbienceSoundControl'

const ELAudioStartSoundControl = () => {
  const [play, setPlay] = useState(false)
  const hasStarted = useRef(false)

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
      {play && <MusicLoop volume={0.4} delay={4000} transitionDuration={7500} />}
      {play && <RainSoundControl volume={0.2} delay={0} transitionDuration={5500} />}
      {play && <CyberpunkAmbienceSoundControl volume={0.375} delay={25000} transitionDuration={2500} />}
    </>
  )
}

export default ELAudioStartSoundControl
