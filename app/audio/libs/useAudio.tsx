import { useEffect, useRef } from 'react'

function useAudio(audioSource: string, volume: number, delay: number, transitionDuration: number, loop: boolean) {
  const audioElement = useRef<HTMLAudioElement | null>(null)
  const gainNode = useRef<GainNode | null>(null)

  useEffect(() => {
    const audioContext = new AudioContext()
    audioElement.current = new Audio()
    audioElement.current.src = audioSource

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
        audioElement.current.loop = loop

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
  }, [audioSource, delay, loop, transitionDuration, volume])

  return null
}

export default useAudio
