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
      {play && <MusicLoop volume={0.5} delay={4000} />}
      {play && <RainSoundControl volume={0.2} delay={0} />}
      {play && <CyberpunkAmbienceSoundControl volume={0.275} delay={25000} />}
    </>
  )
}

export default ELAudioStartSoundControl
