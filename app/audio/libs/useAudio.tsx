// useAudio.tsx
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

    // Define a function to handle the 'ended' event
    const handleEnded = () => {
      if (gainNode.current) {
        gainNode.current.disconnect()
      }
      source.disconnect()
      audioContext.close()
    }

    // Define a function to play the audio
    const playAudio = () => {
      if (audioElement.current && gainNode.current) {
        audioElement.current.play()
        audioElement.current.loop = loop

        // If the volume is 0, immediately set the volume to 0
        if (volume === 0) {
          gainNode.current.gain.setValueAtTime(0, audioContext.currentTime)
        } else {
          // If the volume is greater than 0, start the volume at a small positive value
          gainNode.current.gain.setValueAtTime(0.001, audioContext.currentTime)

          // Gradually increase the volume to the desired level over the transition duration
          gainNode.current.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + transitionDuration / 1000)
        }

        // Add the 'ended' event listener if the audio does not loop
        if (!loop) {
          audioElement.current.addEventListener('ended', handleEnded)
        }
      }
    }
    setTimeout(playAudio, delay)

    // Clean up event listeners and stop the audio when the volume changes
    return () => {
      if (audioElement.current) {
        audioElement.current.removeEventListener('ended', handleEnded)
        audioElement.current.pause()
        if (gainNode.current) {
          gainNode.current.disconnect()
        }
        source.disconnect()
        audioContext.close()
      }
    }
  }, [audioSource, delay, loop, transitionDuration, volume]) // Add volume as a dependency

  return null
}

export default useAudio
