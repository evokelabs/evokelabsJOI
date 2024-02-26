import { useEffect, useRef } from 'react'

const AUDIO_SOURCE = '/sounds/CyberpunkAmbienceLoop.ogg'

const CyberpunkAmbienceSoundControl = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create a new AudioContext and an audio element
    const audioContext = new AudioContext()
    audioElement.current = new Audio()
    audioElement.current.src = AUDIO_SOURCE
    audioElement.current.volume = 1.0

    // Connect the audio element to the AudioContext
    const track = audioContext.createMediaElementSource(audioElement.current)
    track.connect(audioContext.destination)

    // Define a function to play the audio
    const playAudio = () => {
      if (audioElement.current) {
        audioElement.current.play()
        audioElement.current.loop = true // Enable looping
      }
    }

    // Play the audio when the component is called
    playAudio()

    // Clean up event listeners when the component unmounts
    return () => {
      audioElement.current?.removeEventListener('canplaythrough', playAudio)
    }
  }, [])

  return null
}

export default CyberpunkAmbienceSoundControl
