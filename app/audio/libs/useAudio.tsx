import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

function useAudio(audioSource: string, volume: number, delay: number, transitionDuration: number, loop: boolean) {
  const sound = useRef<Howl | null>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    sound.current = new Howl({
      src: [audioSource],
      loop: loop,
      volume: 0.001, // Start with a small positive volume
      onload: () => {
        // Define a function to play the audio
        const playAudio = () => {
          if (sound.current) {
            // Check if the audio should be muted or not
            if (volume === 0) {
              sound.current.mute(true)
              setIsMuted(true)
            } else {
              sound.current.mute(false)
              setIsMuted(false)

              // Start the volume transition from the current volume
              const startVolume = sound.current.volume()

              // Gradually change the volume to the desired level over the transition duration
              const targetVolume = volume
              sound.current.fade(startVolume, targetVolume, transitionDuration)

              // Start playing the audio
              sound.current.play()
            }
          }
        }

        setTimeout(playAudio, delay)
      }
    })

    // Clean up the Howl instance when the component unmounts
    return () => {
      if (sound.current) {
        sound.current.unload()
      }
    }
  }, [audioSource, delay, loop, transitionDuration, volume]) // Add volume as a dependency

  // Define a function to update the volume
  const updateVolume = () => {
    if (sound.current) {
      // Check if the audio should be muted or not
      if (volume === 0) {
        sound.current.mute(true)
        setIsMuted(true)
      } else {
        sound.current.mute(false)
        setIsMuted(false)

        // Start the volume transition from the current volume
        const startVolume = sound.current.volume()

        // Gradually change the volume to the desired level over the transition duration
        const targetVolume = volume
        sound.current.fade(startVolume, targetVolume, transitionDuration)
      }
    }
  }

  const play = () => {
    if (sound.current && !isMuted) {
      sound.current.play()
    }
  }

  const stop = () => {
    sound.current?.stop()
  }

  // Call updateVolume when the volume prop changes
  useEffect(updateVolume, [transitionDuration, volume])

  return { play, stop }
}

export default useAudio
