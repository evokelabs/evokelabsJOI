import { useEffect, useRef } from 'react'

const Music = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audioContext = new AudioContext()
    audioElement.current = document.createElement('audio')
    audioElement.current.src = '/sounds/joi-mix.mp3'
    audioElement.current.volume = 0.0

    const track = audioContext.createMediaElementSource(audioElement.current)
    track.connect(audioContext.destination)

    const playAudio = () => {
      audioContext.resume().then(() => {
        if (audioElement.current) {
          audioElement.current.play()
        }
      })
    }

    audioElement.current.oncanplaythrough = playAudio

    const canvas = document.querySelector('canvas')
    if (canvas) {
      canvas.addEventListener('click', playAudio)
    }

    window.addEventListener('load', playAudio)

    return () => {
      if (canvas) {
        canvas.removeEventListener('click', playAudio)
      }
      window.removeEventListener('load', playAudio)
    }
  }, [])

  return null
}

export default Music
