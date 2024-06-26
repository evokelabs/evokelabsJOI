import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { useContext, useEffect, useRef } from 'react'
import { audioContext } from '../webAPIContext'
import { cloudfrontURL } from '@/app/libs/cloudfrontURL'

const AUDIO_SOURCE = `${cloudfrontURL}/sounds/shutters.mp3`

const ShutterSoundControl = ({
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
  const audioElement = useRef<HTMLAudioElement | null>(null)
  const gainNode = useRef<GainNode | null>(null)

  const { muteSFX } = useContext(SoundControlContext)
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (audioContext) {
      // Assign audioContext to audioContextRef.current
      audioContextRef.current = audioContext

      // Create an audio element
      audioElement.current = new Audio()
      audioElement.current.crossOrigin = 'anonymous'
      audioElement.current.src = AUDIO_SOURCE

      // Create a GainNode to control the volume
      gainNode.current = audioContext.createGain()

      // Create a MediaElementAudioSourceNode from the audio element
      const source = audioContext.createMediaElementSource(audioElement.current)
      source.connect(gainNode.current)
      gainNode.current.connect(audioContext.destination)

      // Define a function to play the audio
      const playAudio = () => {
        if (audioElement.current && gainNode.current && audioContextRef.current && audioContextRef.current.state === 'running') {
          audioElement.current.play()
          audioElement.current.loop = loop
        }
      }

      // Call playAudio only when audioContext is defined and in 'running' state
      if (audioContext.state === 'running') {
        setTimeout(playAudio, delay)
      } else {
        audioContext.onstatechange = () => {
          if (audioContext && audioContext.state === 'running') {
            setTimeout(playAudio, delay)
          }
        }
      }

      // Clean up event listeners when the component unmounts
      return () => {
        audioElement.current?.removeEventListener('canplaythrough', playAudio)
      }
    }
  }, [delay, loop])

  useEffect(() => {
    const resumeAudioContext = async () => {
      if (audioContext && audioContext.state === 'suspended') {
        await audioContext.resume()
      }
    }

    // Attempt to resume the AudioContext when the component mounts
    resumeAudioContext()
  }, [])

  useEffect(() => {
    // Update the gain value when muteSFX changes
    if (gainNode.current && audioContextRef.current) {
      const targetVolume = muteSFX ? 0 : volume
      gainNode.current.gain.cancelScheduledValues(audioContextRef.current.currentTime)
      gainNode.current.gain.linearRampToValueAtTime(targetVolume, audioContextRef.current.currentTime + transitionDuration / 1000)
    }
  }, [muteSFX, volume, transitionDuration])

  return null
}

export default ShutterSoundControl
