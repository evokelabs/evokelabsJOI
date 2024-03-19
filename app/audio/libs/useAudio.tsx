import { useEffect, useRef } from 'react'

function useAudio(audioSource: string, volume: number, delay: number, transitionDuration: number, loop: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(audioSource)
    audioRef.current = audio
    audio.volume = 0.001 // Start with a small positive volume
    audio.loop = loop

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }

    setTimeout(playAudio, delay)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [audioSource, delay, loop])

  const updateVolume = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  useEffect(updateVolume, [volume])

  return { play, stop }
}

export default useAudio
