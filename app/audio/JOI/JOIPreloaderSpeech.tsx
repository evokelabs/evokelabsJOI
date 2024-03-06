import { useContext, useEffect, useState } from 'react'
import { Howl } from 'howler'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCES = JOISpeech.preloader.map(item => item.filepath)

const VOLUME = 0.55
const DELAY = 2500
const TRANSITION_DURATION = 150
const LOOP = false

const JOIPreloaderSpeech = () => {
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
        }

        setTimeout(playAudio, DELAY)
      }
    })

    // Clean up the Howl instance when the component unmounts
    return () => {
      sound.unload()
    }
  }, [hasUserInteracted, muteJOI]) // Add muteJOI as a dependency

  return null
}

export default JOIPreloaderSpeech
