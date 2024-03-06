import { useContext, useEffect, useState } from 'react'
import { Howl } from 'howler'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCE = '/sounds/musicStart.mp3'
const VOLUME_SET = 0.6
const DELAY = 0
const LOOP = false

const MusicStartSoundControl = () => {
  const { muteMusic } = useContext(SoundControlContext)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [sound, setSound] = useState<Howl | null>(null)

  useEffect(() => {
    const howl = new Howl({
      src: [AUDIO_SOURCE],
      loop: LOOP,
      volume: muteMusic ? 0 : VOLUME_SET, // Start with the desired volume
      onload: () => {
        // Define a function to play the audio
        const playAudio = () => {
          // Start playing the audio
          howl.play()
          setHasPlayed(true) // Set hasPlayed to true after the audio has been played
        }

        setTimeout(playAudio, DELAY)
      }
    })

    setSound(howl)

    // Clean up the Howl instance when the component unmounts
    return () => {
      howl.unload()
    }
  }, [])

  // Adjust the volume when muteMusic changes
  useEffect(() => {
    if (hasPlayed && sound) {
      sound.volume(muteMusic ? 0 : VOLUME_SET)
    }
  }, [muteMusic, hasPlayed, sound])

  return null
}

export default MusicStartSoundControl
