import { useEffect, useRef } from 'react'

const AUDIO_SOURCE = '/sounds/joi-mix.mp3'

const Music = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create a new AudioContext and an audio element
    const audioContext = new AudioContext()
    audioElement.current = document.createElement('audio')
    audioElement.current.src = AUDIO_SOURCE
    audioElement.current.volume = 0.0

    // Connect the audio element to the AudioContext
    const track = audioContext.createMediaElementSource(audioElement.current)
    track.connect(audioContext.destination)

    // Define a function to play the audio
    const playAudio = () => {
      audioContext.resume().then(() => {
        audioElement.current?.play()
      })
    }

    // Play the audio when it's ready and when the canvas or window is clicked
    audioElement.current.oncanplaythrough = playAudio
    const canvas = document.querySelector('canvas')
    canvas?.addEventListener('click', playAudio)
    window.addEventListener('load', playAudio)

    // Clean up event listeners when the component unmounts
    return () => {
      canvas?.removeEventListener('click', playAudio)
      window.removeEventListener('load', playAudio)
    }
  }, [])

  return null
}

export default Music
