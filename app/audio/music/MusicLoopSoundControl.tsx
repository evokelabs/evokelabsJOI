import { SoundsContext } from '@/app/libs/SoundsContext'
import { useContext, useEffect, useRef } from 'react'

const AUDIO_SOURCE = '/sounds/musicLoop.ogg'

const MusicLoopSoundControl = () => {
  const { musicVolume } = useContext(SoundsContext)
  const { musicLoopTransitionDuration } = useContext(SoundsContext)

  const audioElement = useRef(new Audio(AUDIO_SOURCE))
  const audioContext = useRef(new AudioContext())
  const gainNode = useRef(audioContext.current.createGain())
  const source = useRef<MediaElementAudioSourceNode | null>(null)
  const hasMounted = useRef(false)
  const DELAY = 3800
  const LOOP = true

  useEffect(() => {
    console.log('MusicLoopSoundControl useEffect', musicVolume)
    const currentAudioElement = audioElement.current

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
      gainNode.current.gain.linearRampToValueAtTime(musicVolume, audioContext.current.currentTime + musicLoopTransitionDuration / 1000)

      // Set hasMounted to true after the audio has started playing
      hasMounted.current = true
    }

    // If the component has not mounted, play the audio after the delay
    if (!hasMounted.current) {
      setTimeout(playAudio, DELAY)
    } else {
      // If the component has already mounted, play the audio immediately
      playAudio()
    }

    // Clean up event listeners when the component unmounts
    return () => {
      currentAudioElement.removeEventListener('canplaythrough', playAudio)
    }
  }, [LOOP, musicLoopTransitionDuration, musicVolume])

  return null
}

export default MusicLoopSoundControl
