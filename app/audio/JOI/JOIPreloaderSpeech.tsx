import { useContext, useEffect, useRef, useState } from 'react'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCES = JOISpeech.preloader.map(item => item.filepath)

const VOLUME = 1.575
const DELAY = 2500
const TRANSITION_DURATION = 150
const LOOP = false

const JOIPreloaderSpeech = () => {
  const audioElement = useRef<HTMLAudioElement | null>(null)
  const gainNode = useRef<GainNode | null>(null)
  const { muteJOI } = useContext(SoundControlContext)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)

  useEffect(() => {
    // Set up event listeners for user interaction
    const handleUserInteraction = () => setHasUserInteracted(true)
    window.addEventListener('click', handleUserInteraction)
    window.addEventListener('keydown', handleUserInteraction)

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('keydown', handleUserInteraction)
    }
  }, []) // Empty dependency array so this effect only runs once on mount

  useEffect(() => {
    if (!hasUserInteracted) return
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

    // Define a function to handle the 'ended' event
    const handleEnded = () => {
      if (gainNode.current) {
        gainNode.current.disconnect()
      }
      source.disconnect()
      audioContext.close()
    }

    // Define a function to play the audio
    const playAudio = () => {
      console.log('playing preloade audio')
      if (audioElement.current && gainNode.current) {
        audioElement.current.play()
        console.log('playing preloade audio audioElement.current.play')
        audioElement.current.loop = LOOP

        // Start the volume at a small positive value
        gainNode.current.gain.setValueAtTime(0.001, audioContext.currentTime)

        // Gradually increase the volume to the desired level over the transition duration
        if (VOLUME > 0) {
          const targetVolume = muteJOI ? 0.001 : VOLUME
          gainNode.current.gain.exponentialRampToValueAtTime(targetVolume, audioContext.currentTime + TRANSITION_DURATION / 1000)
          console.log('VOLUME', VOLUME)
        } else {
          gainNode.current.gain.setValueAtTime(0, audioContext.currentTime + TRANSITION_DURATION / 1000)
          console.log('gainNode.current.gain', gainNode.current.gain)
        }

        // Add the 'ended' event listener
        audioElement.current.addEventListener('ended', handleEnded)
      }
    }

    setTimeout(playAudio, DELAY)

    // Clean up event listeners when the component unmounts
    return () => {
      if (audioElement.current) {
        audioElement.current.removeEventListener('ended', handleEnded)
      }
    }
  }, [hasUserInteracted])

  return null
}

export default JOIPreloaderSpeech
