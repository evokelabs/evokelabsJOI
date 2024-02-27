import { useEffect, useRef } from 'react'

const AUDIO_SOURCES = [
  '/sounds/JOI-voice/preLoader/preLoader-1.mp3',
  '/sounds/JOI-voice/preLoader/preLoader-2.mp3',
  '/sounds/JOI-voice/preLoader/preLoader-3.mp3',
  '/sounds/JOI-voice/preLoader/preLoader-4.mp3',
  '/sounds/JOI-voice/preLoader/preLoader-5.mp3',
  '/sounds/JOI-voice/preLoader/preLoader-6.mp3'
]

const VOLUME = 1.275
const DELAY = 2500
const TRANSITION_DURATION = 150
const LOOP = false

const JOIPreloaderSpeechControl = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null)
  const gainNode = useRef<GainNode | null>(null)

  useEffect(() => {
    // Create a new AudioContext and an audio element
    const audioContext = new AudioContext()
    audioElement.current = new Audio()

    // Select a random audio source
    const randomIndex = Math.floor(Math.random() * AUDIO_SOURCES.length)
    audioElement.current.src = AUDIO_SOURCES[randomIndex]

    // Create a GainNode to control the volume
    gainNode.current = audioContext.createGain()

    // Create a MediaElementAudioSourceNode from the audio element
    const source = audioContext.createMediaElementSource(audioElement.current)
    source.connect(gainNode.current)
    gainNode.current.connect(audioContext.destination)

    // Define a function to play the audio
    const playAudio = () => {
      if (audioElement.current && gainNode.current) {
        audioElement.current.play()
        audioElement.current.loop = LOOP

        // Start the volume at a small positive value
        gainNode.current.gain.setValueAtTime(0.001, audioContext.currentTime)

        // Gradually increase the volume to the desired level over the transition duration
        if (VOLUME > 0) {
          gainNode.current.gain.exponentialRampToValueAtTime(VOLUME, audioContext.currentTime + TRANSITION_DURATION / 1000)
        } else {
          gainNode.current.gain.setValueAtTime(0, audioContext.currentTime + TRANSITION_DURATION / 1000)
        }
      }
    }

    setTimeout(playAudio, DELAY)

    // Clean up event listeners when the component unmounts
    return () => {
      audioElement.current?.removeEventListener('canplaythrough', playAudio)
    }
  }, [])

  return null
}

export default JOIPreloaderSpeechControl
