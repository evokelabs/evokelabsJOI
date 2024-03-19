import { useContext, useEffect, useState, useRef } from 'react'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCES = JOISpeech.preloader.map(item => item.filepath)

const VOLUME = 0.55
const DELAY = 500
const INTERACTION_TIMEOUT = 10000 // 10 seconds

const JOIPreloaderSpeech = () => {
  const { muteJOI } = useContext(SoundControlContext)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [interactionTimeoutReached, setInteractionTimeoutReached] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Set up event listeners for user interaction
    const handleUserInteraction = () => {
      setHasUserInteracted(true)
      clearTimeout(interactionTimeout) // Clear the timeout if the user interacts with the window
    }

    // Set a timeout to set interactionTimeoutReached to true after 10 seconds
    const interactionTimeout = setTimeout(() => {
      setInteractionTimeoutReached(true)
    }, INTERACTION_TIMEOUT)

    window.addEventListener('click', handleUserInteraction)
    window.addEventListener('touchstart', handleUserInteraction)
    window.addEventListener('keydown', handleUserInteraction)

    // Clean up the event listeners and timeout when the component unmounts
    return () => {
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('touchstart', handleUserInteraction)
      window.removeEventListener('keydown', handleUserInteraction)
      clearTimeout(interactionTimeout)
    }
  }, []) // Empty dependency array so this effect only runs once on mount

  useEffect(() => {
    if (!hasUserInteracted || interactionTimeoutReached) return

    // Select a random audio source
    const randomIndex = Math.floor(Math.random() * AUDIO_SOURCES.length)
    const audioSource = AUDIO_SOURCES[randomIndex]

    // Create a new Audio object and set its source
    const audio = new Audio(audioSource)
    audioRef.current = audio

    // Set the initial volume
    audio.volume = muteJOI ? 0.001 : VOLUME

    // Define a function to play the audio
    const playAudio = () => {
      audio.play()
      setHasPlayed(true) // Set hasPlayed to true after the audio has been played
    }

    setTimeout(playAudio, DELAY)

    // Clean up the Audio object when the component unmounts
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [hasPlayed, hasUserInteracted, muteJOI, interactionTimeoutReached])

  return null
}

export default JOIPreloaderSpeech
