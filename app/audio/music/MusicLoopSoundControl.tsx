import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { SoundsContext } from '@/app/libs/SoundsContext'
import { useContext, useEffect, useRef, useState } from 'react'

const AUDIO_SOURCE = '/sounds/musicLoop.ogg'

const MusicLoopSoundControl = () => {
  const audioElement = useRef(new Audio(AUDIO_SOURCE))
  const audioContext = useRef(new AudioContext())
  const gainNode = useRef(audioContext.current.createGain())
  const source = useRef<MediaElementAudioSourceNode | null>(null)
  const hasMounted = useRef(false)
  const LOOP = true

  const { musicLoopTransitionDuration } = useContext(SoundsContext)
  const { musicVolume } = useContext(SoundsContext)
  const { muteMusic } = useContext(SoundControlContext)

  const [isMuted, setIsMuted] = useState(muteMusic)
  // Add a new state for mute status

  const GAIN_NODE_VOLUME = 1

  useEffect(() => {
    // Update isMuted when muteMusic changes
    setIsMuted(muteMusic)
  }, [isMuted, muteMusic])

  useEffect(() => {
    const currentAudioElement = audioElement.current

    audioContext.current.resume().then(() => {
      playAudio()
    })

    // Create a MediaElementAudioSourceNode from the audio element
    if (!source.current) {
      source.current = audioContext.current.createMediaElementSource(currentAudioElement)
      source.current.connect(gainNode.current)
      gainNode.current.connect(audioContext.current.destination)
    }

    // Define a function to play the audio
    const playAudio = () => {
      currentAudioElement.play()
      currentAudioElement.loop = LOOP

      // Start the volume transition from zero if it's the first playthrough, otherwise start from the current volume
      const startVolume = hasMounted.current ? gainNode.current.gain.value : 0
      gainNode.current.gain.setValueAtTime(startVolume, audioContext.current.currentTime)

      // Gradually increase the volume to the desired level over the transition duration
      const targetVolume = isMuted ? 0 : musicVolume

      gainNode.current.gain.linearRampToValueAtTime(targetVolume, audioContext.current.currentTime + musicLoopTransitionDuration / 1000)

      // Set hasMounted to true after the audio has started playing
      hasMounted.current = true
    }

    // Clean up event listeners when the component unmounts
    return () => {
      currentAudioElement.removeEventListener('canplaythrough', playAudio)
    }
  }, [LOOP, musicLoopTransitionDuration, musicVolume, isMuted]) // Replace muteMusic with isMuted

  // Mute the audio when isMuted is true
  useEffect(() => {
    if (gainNode.current) {
      gainNode.current.gain.value = 0
    }
  }, [muteMusic])

  return null
}

export default MusicLoopSoundControl
