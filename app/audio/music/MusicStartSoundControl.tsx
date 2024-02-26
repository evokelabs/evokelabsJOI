import { useEffect, useRef } from 'react'

const AUDIO_SOURCE = '/sounds/musicStart.ogg'
const MusicStartSoundControl = ({
  volume = 0,
  delay = 0,
  transitionDuration = 1000
}: {
  volume: number
  delay: number
  transitionDuration: number
}) => {
  const audioElement = useRef<HTMLAudioElement | null>(null)
  const gainNode = useRef<GainNode | null>(null)

  useEffect(() => {
    // Create a new AudioContext and an audio element
    const audioContext = new AudioContext()
    audioElement.current = new Audio()
    audioElement.current.src = AUDIO_SOURCE

    // Create a GainNode to control the volume
    gainNode.current = audioContext.createGain()

    // Create a MediaElementAudioSourceNode from the audio element
    const source = audioContext.createMediaElementSource(audioElement.current)
    source.connect(gainNode.current)
    gainNode.current.connect(audioContext.destination)

    // Define a function to play the audio
    const playAudio = () => {
      if (audioElement.current && gainNode.current) {
        audioElement.current.play()
        audioElement.current.loop = true

        // Start the volume at a small positive value
        gainNode.current.gain.setValueAtTime(0.001, audioContext.currentTime)

        // Gradually increase the volume to the desired level over the transition duration
        if (volume > 0) {
          gainNode.current.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + transitionDuration / 1000)
        } else {
          gainNode.current.gain.setValueAtTime(0, audioContext.currentTime + transitionDuration / 1000)
        }
      }
    }

    setTimeout(playAudio, delay)

    // Clean up event listeners when the component unmounts
    return () => {
      audioElement.current?.removeEventListener('canplaythrough', playAudio)
    }
  }, [])

  return null
}

export default MusicStartSoundControl
