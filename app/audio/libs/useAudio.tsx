import { useCallback, useEffect, useRef } from 'react'

function useAudio(audioSource: string, volume: number, delay: number, transitionDuration: number, loop: boolean) {
  const audioElement = useRef<HTMLAudioElement | null>(null)
  const gainNode = useRef<GainNode | null>(null)
  const audioContext = useRef<AudioContext | null>(null)

  useEffect(() => {
    audioContext.current = new AudioContext()
    audioElement.current = new Audio()
    audioElement.current.src = audioSource

    // Create a GainNode to control the volume
    gainNode.current = audioContext.current.createGain()

    // Create a MediaElementAudioSourceNode from the audio element
    const source = audioContext.current.createMediaElementSource(audioElement.current)
    source.connect(gainNode.current)
    gainNode.current.connect(audioContext.current.destination)

    // Define a function to handle the 'ended' event
    const handleEnded = () => {
      if (gainNode.current) {
        gainNode.current.disconnect()
      }
      source.disconnect()
      audioContext.current?.close()
    }

    // Define a function to play the audio
    const playAudio = () => {
      if (audioElement.current && gainNode.current && audioContext.current) {
        audioElement.current.play()
        audioElement.current.loop = loop

        // Add the 'ended' event listener if the audio does not loop
        if (!loop) {
          audioElement.current.addEventListener('ended', handleEnded)
        }
      }
    }
    playAudio()
    // Clean up event listeners and stop the audio when the volume changes
    return () => {
      if (audioElement.current) {
        audioElement.current.removeEventListener('ended', handleEnded)
        audioElement.current.pause()
        if (gainNode.current) {
          gainNode.current.disconnect()
        }
        source.disconnect()
        audioContext.current?.close()
      }
    }
  }, [audioSource, delay, loop, transitionDuration, volume]) // Add volume as a dependency

  // Define a function to update the volume
  // Define a function to update the volume
  const updateVolume = useCallback(() => {
    if (gainNode.current && audioContext.current) {
      // Set the initial volume to the current value
      gainNode.current.gain.setValueAtTime(volume, audioContext.current.currentTime)

      // Gradually change the volume to the new value over the transition duration
      gainNode.current.gain.linearRampToValueAtTime(volume, audioContext.current.currentTime + transitionDuration / 1000)
    }
  }, [transitionDuration, volume]) // Add transitionDuration and volume as dependencies

  // Call updateVolume when the volume prop changes
  useEffect(() => {
    updateVolume()
  }, [delay, transitionDuration, updateVolume, volume])

  return null
}

export default useAudio
