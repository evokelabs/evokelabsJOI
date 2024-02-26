import { useEffect, useRef } from 'react'

const AUDIO_SOURCE_LOOP = '/sounds/TypeOnLoop.ogg'
const AUDIO_SOURCE_END = '/sounds/TypeOnEnd.mp3'

const TypeOnSoundControl = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null)
  const audioEndElement = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create a new AudioContext and audio elements
    const audioContext = new AudioContext()
    audioElement.current = new Audio()
    audioEndElement.current = new Audio()
    if (audioElement.current && audioEndElement.current) {
      audioElement.current.src = AUDIO_SOURCE_LOOP
      audioEndElement.current.src = AUDIO_SOURCE_END
      audioElement.current.volume = 0.0
      audioEndElement.current.volume = 0.0

      // Connect the audio elements to the AudioContext
      const track = audioContext.createMediaElementSource(audioElement.current)
      const endTrack = audioContext.createMediaElementSource(audioEndElement.current)
      track.connect(audioContext.destination)
      endTrack.connect(audioContext.destination)

      // Define a function to play the audio
      const playAudio = () => {
        audioContext.resume().then(() => {
          audioElement.current?.play()
        })
      }

      // Define a function to stop the audio and play the end sound
      const stopAudio = () => {
        if (audioElement.current) {
          audioElement.current.pause()
          audioElement.current.currentTime = 0
        }
        audioEndElement.current?.play()
      }

      // Play the audio when the component is called
      playAudio()

      // Stop the audio when the canvas or window is clicked
      const canvas = document.querySelector('canvas')
      canvas?.addEventListener('click', stopAudio)
      window.addEventListener('load', stopAudio)

      // Clean up event listeners when the component unmounts
      return () => {
        canvas?.removeEventListener('click', stopAudio)
        window.removeEventListener('load', stopAudio)
      }
    }
  }, [])

  return null
}

export default TypeOnSoundControl
