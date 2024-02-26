import { useEffect, useRef } from 'react'

const AUDIO_SOURCE = '/sounds/musicLoop.ogg'
const MusicLoopSoundControl = ({
  volume = 0,
  delay = 0,
  transitionDuration = 1000,
  loop = true
}: {
  volume: number
  delay: number
  transitionDuration: number
  loop?: boolean
}) => {
  const audioElement = useRef(new Audio(AUDIO_SOURCE))
  const audioContext = useRef(new AudioContext())
  const gainNode = useRef(audioContext.current.createGain())
  const source = useRef<MediaElementAudioSourceNode | null>(null)

  useEffect(() => {
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
      currentAudioElement.loop = loop

      // Start the volume at a small positive value
      gainNode.current.gain.setValueAtTime(0.001, audioContext.current.currentTime)

      // Gradually increase the volume to the desired level over the transition duration
      if (volume > 0) {
        gainNode.current.gain.exponentialRampToValueAtTime(volume, audioContext.current.currentTime + transitionDuration / 1000)
      } else {
        gainNode.current.gain.setValueAtTime(0, audioContext.current.currentTime + transitionDuration / 1000)
      }
    }

    setTimeout(playAudio, delay)

    // Clean up event listeners when the component unmounts
    return () => {
      currentAudioElement.removeEventListener('canplaythrough', playAudio)
    }
  }, [delay, loop, transitionDuration, volume])

  useEffect(() => {
    // Adjust the gain value when the volume changes
    if (volume > 0) {
      gainNode.current.gain.exponentialRampToValueAtTime(volume, audioContext.current.currentTime + transitionDuration / 1000)
    } else {
      gainNode.current.gain.setValueAtTime(0, audioContext.current.currentTime + transitionDuration / 1000)
    }
  }, [volume, transitionDuration])

  return null
}

export default MusicLoopSoundControl
