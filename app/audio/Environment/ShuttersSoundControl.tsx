import { useEffect, useRef } from 'react'

const AUDIO_SOURCE = '/sounds/shutters.mp3'

const ShutterSoundControl = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create a new AudioContext and an audio element
    const audioContext = new AudioContext()
    audioElement.current = new Audio()
    if (audioElement.current) {
      audioElement.current.src = AUDIO_SOURCE
      audioElement.current.volume = 0.0

      // Connect the audio element to the AudioContext
      const track = audioContext.createMediaElementSource(audioElement.current)
      track.connect(audioContext.destination)
    }
  }, [])

  // Define a function to play the audio
  const playAudio = () => {
    if (audioElement.current) {
      audioElement.current.play()
    }
  }

  return { playAudio }
}

export default ShutterSoundControl