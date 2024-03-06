import { useContext, useEffect, useState } from 'react'
import { Howl } from 'howler'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCES = JOISpeech.preloader.map(item => item.filepath)

const VOLUME = 0.55
const DELAY = 2500
const TRANSITION_DURATION = 150
const LOOP = false
const INTERACTION_TIMEOUT = 10000 // 10 seconds

const JOIPreloaderSpeech = () => {
  const { muteJOI } = useContext(SoundControlContext)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    // Set up event listeners for user interaction
    const handleUserInteraction = () => {
      setHasUserInteracted(true)
      clearTimeout(interactionTimeout) // Clear the timeout if the user interacts with the window
    }

    // Set a timeout to set hasPlayed to true after 10 seconds
    const interactionTimeout = setTimeout(() => {
      setHasPlayed(true)
    }, INTERACTION_TIMEOUT)

    window.addEventListener('click', handleUserInteraction)
    window.addEventListener('keydown', handleUserInteraction)

    // Clean up the event listeners and timeout when the component unmounts
    return () => {
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('keydown', handleUserInteraction)
      clearTimeout(interactionTimeout)
    }
  }, []) // Empty dependency array so this effect only runs once on mount

  useEffect(() => {
    if (!hasUserInteracted || hasPlayed) return

    // Select a random audio source
    const randomIndex = Math.floor(Math.random() * AUDIO_SOURCES.length)
    const audioSource = AUDIO_SOURCES[randomIndex]

    const sound = new Howl({
      src: [audioSource],
      loop: LOOP,
      volume: 0.001, // Start with a small positive volume
      onload: () => {
        // Define a function to play the audio
        const playAudio = () => {
          // Gradually increase the volume to the desired level over the transition duration
          const targetVolume = muteJOI ? 0.001 : VOLUME
          sound.fade(sound.volume(), targetVolume, TRANSITION_DURATION)

          // Start playing the audio
          sound.play()

          setHasPlayed(true) // Set hasPlayed to true after the audio has been played
        }

        setTimeout(playAudio, DELAY)
      }
    })

    // Clean up the Howl instance when the component unmounts
    return () => {
      sound.unload()
    }
  }, [hasPlayed, hasUserInteracted, muteJOI])

  return null
}

export default JOIPreloaderSpeech
