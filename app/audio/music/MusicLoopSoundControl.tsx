import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { SoundsContext } from '@/app/libs/SoundsContext'
import { useContext, useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import { DEFAULT_MUSIC_LOOP_VOLUME } from '../ELAudioStartSoundControl'

const AUDIO_SOURCE = '/sounds/musicLoop.ogg'
const DELAY = 4000 // Delay in milliseconds

const MusicLoopSoundControl = () => {
  const sound = useRef<Howl | null>(null)
  const { musicLoopTransitionDuration, setMusicVolume, musicVolume } = useContext(SoundsContext)
  const { muteMusic } = useContext(SoundControlContext)
  const [isMuted, setIsMuted] = useState(muteMusic)
  const [interactionTimeoutReached, setInteractionTimeoutReached] = useState(false)

  useEffect(() => {
    setIsMuted(muteMusic)
  }, [muteMusic])

  useEffect(() => {
    sound.current = new Howl({
      src: [AUDIO_SOURCE],
      loop: true,
      volume: 0 // Start with volume 0
    })

    const playAudio = () => {
      if (sound.current) {
        // Check if the audio should be muted or not
        if (isMuted) {
          // Mute the audio immediately
          sound.current.mute(true)
          sound.current.volume(0)
        } else {
          // Unmute the audio
          sound.current.mute(false)

          // Start the volume transition from zero
          const startVolume = 0
          sound.current.volume(startVolume)

          // Gradually increase the volume to the desired level over the transition duration
          const targetVolume = musicVolume
          sound.current.fade(startVolume, targetVolume, musicLoopTransitionDuration)

          // Start playing the audio after the volume transition has begun
          setTimeout(
            () => {
              sound.current?.play()
            },
            interactionTimeoutReached ? 250 : DELAY
          )
        }
      }
    }

    playAudio()

    // Set the musicVolume to DEFAULT_MUSIC_LOOP_VOLUME after the transition duration
    setTimeout(() => {
      setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME)
    }, musicLoopTransitionDuration)

    return () => {
      if (sound.current) {
        sound.current.unload()
      }
    }
  }, [])

  // This effect runs whenever isMuted, musicVolume, or musicLoopTransitionDuration changes
  useEffect(() => {
    if (sound.current) {
      if (isMuted) {
        // Instantly mute the audio
        sound.current.mute(true)
        sound.current.volume(0)
      } else {
        // Unmute the audio
        sound.current.mute(false)

        // Gradually increase the volume to the desired level over the transition duration
        sound.current.fade(sound.current.volume(), musicVolume, musicLoopTransitionDuration)
      }
    }
  }, [isMuted, musicVolume, musicLoopTransitionDuration])

  return null
}

export default MusicLoopSoundControl
