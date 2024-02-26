import { useEffect, useRef, useState } from 'react'
import MusicLoop from './music/MusicLoopSoundControl'
import RainSoundControl from './environment/RainSoundControl'
import CyberpunkAmbienceSoundControl from './environment/CyberpunkAmbienceSoundControl'

const ELAudioStartSoundControl = () => {
  const [play, setPlay] = useState(false)
  const hasStarted = useRef(false) // Ref to track whether the sounds have started

  useEffect(() => {
    // Add an event listener for a user interaction event
    const handleUserInteraction = () => {
      if (!hasStarted.current) {
        // If the sounds haven't started yet
        setPlay(true)
        hasStarted.current = true // Set hasStarted to true
      }

      // Remove the event listeners once the audio has started playing
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
      {play && <MusicLoop />}
      {play && <RainSoundControl />}
      {play && <CyberpunkAmbienceSoundControl />}
    </>
  )
}

export default ELAudioStartSoundControl
