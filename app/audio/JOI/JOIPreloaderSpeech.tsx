import { useEffect, useRef } from 'react'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'

const AUDIO_SOURCES = JOISpeech.preloader.map(item => item.filepath)

const VOLUME = 1.575
const DELAY = 2500
const TRANSITION_DURATION = 150
const LOOP = false

const JOIPreloaderSpeech = () => {
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

export default JOIPreloaderSpeech
