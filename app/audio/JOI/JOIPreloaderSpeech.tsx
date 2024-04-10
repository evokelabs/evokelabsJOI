import { useContext, useEffect, useState } from 'react'
import { Howl } from 'howler'
import JOISpeech from '@/app/audio/JOI/JOISpeech.json'
import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { cloudfrontURL } from '@/app/libs/cloudfrontURL'

const AUDIO_SOURCES = JOISpeech.preloader.map(item => item.filepath)
const VOLUME = 0.55
const DELAY = 500
const TRANSITION_DURATION = 150
const LOOP = false

const JOIPreloaderSpeech = () => {
  const { muteJOI } = useContext(SoundControlContext)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    // Select a random audio source
    const randomIndex = Math.floor(Math.random() * AUDIO_SOURCES.length)
    const audioSource = AUDIO_SOURCES[randomIndex]

    const sound = new Howl({
      html5: true,
      src: [cloudfrontURL + audioSource],
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
  }, [])

  return null
}

export default JOIPreloaderSpeech
