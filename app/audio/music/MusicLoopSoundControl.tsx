import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { SoundsContext } from '@/app/libs/SoundsContext'
import { useContext, useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import { DEFAULT_MUSIC_LOOP_VOLUME } from '../ELAudioStartSoundControl'

const AUDIO_SOURCE = '/sounds/musicLoop.ogg'
const DELAY = 5500 // Delay in milliseconds

const MusicLoopSoundControl = () => {
  const sound = useRef<Howl | null>(null)
  const { musicLoopTransitionDuration } = useContext(SoundsContext)
  const { muteMusic } = useContext(SoundControlContext)

  const [isMuted, setIsMuted] = useState(muteMusic)

  const musicVolume = DEFAULT_MUSIC_LOOP_VOLUME

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
        // Start the volume transition from zero
        const startVolume = 0
        sound.current.volume(startVolume)

        // Gradually increase the volume to the desired level over the transition duration
        const targetVolume = isMuted ? 0 : musicVolume
        sound.current.fade(startVolume, targetVolume, musicLoopTransitionDuration)
      }
    }

    const timeoutId = setTimeout(() => {
      sound.current?.play()
      playAudio()
    }, DELAY)

    return () => {
      if (sound.current) {
        sound.current.unload()
      }
      clearTimeout(timeoutId)
    }
  }, []) // Empty dependency array ensures this effect only runs once after the initial render

  useEffect(() => {
    if (sound.current) {
      sound.current.volume(isMuted ? 0 : musicVolume)
    }
  }, [isMuted, musicVolume])

  return null
}

export default MusicLoopSoundControl
