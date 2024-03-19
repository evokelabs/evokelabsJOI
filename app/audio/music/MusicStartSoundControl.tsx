import { useContext, useEffect, useState, useRef } from 'react'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const AUDIO_SOURCE = '/sounds/musicStart.mp3'
const VOLUME_SET = 0.6
const DELAY = 50
const LOOP = false

const MusicStartSoundControl = () => {
  const { muteMusic } = useContext(SoundControlContext)
  const [hasPlayed, setHasPlayed] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(AUDIO_SOURCE)
    audioRef.current = audio
    audio.loop = LOOP
    audio.volume = muteMusic ? 0 : VOLUME_SET // Start with the desired volume

    // Define a function to play the audio
    const playAudio = () => {
      // Start playing the audio
      audio.play()
      setHasPlayed(true) // Set hasPlayed to true after the audio has been played
    }

    setTimeout(playAudio, DELAY)

    // Clean up the Audio instance when the component unmounts
    return () => {
      audio.pause()
      if (audioRef.current) {
        audioRef.current.currentTime = 0
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Adjust the volume when muteMusic changes
  useEffect(() => {
    if (hasPlayed && audioRef.current) {
      audioRef.current.volume = muteMusic ? 0 : VOLUME_SET
    }
  }, [muteMusic, hasPlayed])

  return null
}

export default MusicStartSoundControl
