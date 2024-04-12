import { useCallback, useEffect, useRef } from 'react'
import { audioContext } from '../webAPIContext'
import { cloudfrontURL } from '@/app/libs/cloudfrontURL'

const AUDIO_SOURCE_LOOP = `${cloudfrontURL}/sounds/TypeOnLoop.ogg`
const AUDIO_SOURCE_END = `${cloudfrontURL}/sounds/TypeOnEnd.ogg`

type TypeOnSoundControlProps = {
  volume?: number
  delay?: number
  transitionDuration?: number
  loop?: boolean
  isTyping: boolean
  onEndSound: () => void
}

const TypeOnSoundControl: React.FC<TypeOnSoundControlProps> = ({
  volume = 0,
  delay = 0,
  transitionDuration = 1000,
  loop = true,
  isTyping,
  onEndSound
}) => {
  const track = useRef<MediaElementAudioSourceNode | null>(null)
  const audioElement = useRef(new Audio(AUDIO_SOURCE_LOOP))
  audioElement.current.crossOrigin = 'anonymous'
  const audioEndElement = useRef(new Audio(AUDIO_SOURCE_END))
  audioEndElement.current.crossOrigin = 'anonymous'
  const audioContextRef = useRef(audioContext)

  // Define a function to play the audio
  const playAudio = useCallback(() => {
    if (audioContextRef.current) {
      audioContextRef.current.resume().then(() => {
        audioElement.current.play()
        audioElement.current.loop = loop
      })
    }
  }, [loop])
  // Define a function to stop the audio and play the end sound
  const stopAudio = useCallback(() => {
    audioElement.current.pause()
    audioElement.current.currentTime = 0
    audioEndElement.current.play()
    audioEndElement.current.loop = false
    audioEndElement.current.onended = onEndSound
  }, [onEndSound])

  const endTrack = useRef<MediaElementAudioSourceNode | null>(null)

  useEffect(() => {
    const audioElementCurrent = audioElement.current
    const audioEndElementCurrent = audioEndElement.current

    if (!track.current && audioContextRef.current) {
      track.current = audioContextRef.current.createMediaElementSource(audioElementCurrent)
    }

    if (!endTrack.current && audioContextRef.current) {
      endTrack.current = audioContextRef.current.createMediaElementSource(audioEndElementCurrent)
    }

    audioElementCurrent.volume = volume
    audioEndElementCurrent.volume = volume

    if (track.current && audioContextRef.current) {
      track.current.connect(audioContextRef.current.destination)
    }

    if (endTrack.current && audioContextRef.current) {
      endTrack.current.connect(audioContextRef.current.destination)
    }

    return () => {
      audioElementCurrent.pause()
      audioElementCurrent.currentTime = 0
      audioEndElementCurrent.pause()
      audioEndElementCurrent.currentTime = 0
    }
  }, [volume])

  useEffect(() => {
    // Play or stop the audio based on isTyping
    if (isTyping) {
      playAudio()
    } else {
      stopAudio()
    }
  }, [isTyping, loop, onEndSound, playAudio, stopAudio])

  return null
}

export default TypeOnSoundControl
