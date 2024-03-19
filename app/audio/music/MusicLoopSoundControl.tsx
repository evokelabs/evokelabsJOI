import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { SoundsContext } from '@/app/libs/SoundsContext'
import { useContext, useEffect, useRef, useState } from 'react'
import { DEFAULT_MUSIC_LOOP_VOLUME } from '../ELAudioStartSoundControl'

const AUDIO_SOURCE = '/sounds/musicLoop.ogg'
const DELAY = 3200 // Delay in milliseconds
const INTERACTION_TIMEOUT = 10000 // 10 seconds

const MusicLoopSoundControl = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const { musicLoopTransitionDuration, setMusicVolume, musicVolume } = useContext(SoundsContext)
  const { muteMusic } = useContext(SoundControlContext)

  const [isMuted, setIsMuted] = useState(muteMusic)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [interactionTimeoutReached, setInteractionTimeoutReached] = useState(false)

  useEffect(() => {
    setIsMuted(muteMusic)
  }, [muteMusic])

  useEffect(() => {
    // Set a timeout to set interactionTimeoutReached to true after 10 seconds
    const interactionTimeout = setTimeout(() => {
      setInteractionTimeoutReached(true)
    }, INTERACTION_TIMEOUT)

    // Set up event listeners for user interaction
    const handleUserInteraction = () => {
      setHasUserInteracted(true)
      clearTimeout(interactionTimeout) // Clear the timeout when the user interacts with the window
    }

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
    if (!hasUserInteracted) return

    const audio = new Audio(AUDIO_SOURCE)
    audioRef.current = audio
    audio.loop = true
    audio.volume = 0 // Start with volume 0

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }

    setTimeout(playAudio, interactionTimeoutReached ? 250 : DELAY)

    // Set the musicVolume to DEFAULT_MUSIC_LOOP_VOLUME after the transition duration
    setTimeout(() => {
      setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME)
    }, musicLoopTransitionDuration)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [hasUserInteracted, interactionTimeoutReached]) // This effect runs whenever hasUserInteracted or interactionTimeoutReached changes

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : musicVolume
    }
  }, [isMuted, musicVolume, musicLoopTransitionDuration])

  return null
}

export default MusicLoopSoundControl
