import { useEffect, useRef } from 'react'

const AUDIO_SOURCE = '/sounds/musicLoop.ogg'
const MusicLoopSoundControl = ({ volume = 0, delay = 0 }: { volume: number; delay: number }) => {
  const audioElement = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create a new AudioContext and an audio element
    const audioContext = new AudioContext()
    audioElement.current = new Audio()
    audioElement.current.src = AUDIO_SOURCE
    audioElement.current.volume = volume

    // Connect the audio element to the AudioContext
    const track = audioContext.createMediaElementSource(audioElement.current)
    track.connect(audioContext.destination)

    // Define a function to play the audio
    const playAudio = () => {
      if (audioElement.current) {
        audioElement.current.play()
        audioElement.current.loop = true
      }
    }

    setTimeout(playAudio, delay)

    // Clean up event listeners when the component unmounts
    return () => {
      audioElement.current?.removeEventListener('canplaythrough', playAudio)
    }
  }, [])

  return null
}

export default MusicLoopSoundControl
