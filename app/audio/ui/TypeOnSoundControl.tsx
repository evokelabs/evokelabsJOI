import { useCallback, useEffect, useRef } from 'react'

const AUDIO_SOURCE_LOOP = '/sounds/TypeOnLoop.ogg'
const AUDIO_SOURCE_END = '/sounds/TypeOnEnd.ogg'

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
  const audioElement = useRef(new Audio(AUDIO_SOURCE_LOOP))
  const audioEndElement = useRef(new Audio(AUDIO_SOURCE_END))
  const audioContext = useRef(new AudioContext())
  const gainNode = useRef(audioContext.current.createGain())

  // Define a function to play the audio
  const playAudio = useCallback(() => {
    audioContext.current.resume().then(() => {
      audioElement.current.play()
      audioElement.current.loop = loop
    })
  }, [loop])

  // Define a function to stop the audio and play the end sound
  const stopAudio = useCallback(() => {
    audioElement.current.pause()
    audioElement.current.currentTime = 0
    audioEndElement.current.play()
    audioEndElement.current.loop = false
    audioEndElement.current.onended = onEndSound
  }, [onEndSound])

  useEffect(() => {
    const audioElementCurrent = audioElement.current
    const audioEndElementCurrent = audioEndElement.current

    audioElementCurrent.volume = volume
    audioEndElementCurrent.volume = volume

    // Connect the audio elements to the AudioContext
    const track = audioContext.current.createMediaElementSource(audioElementCurrent)
    const endTrack = audioContext.current.createMediaElementSource(audioEndElementCurrent)
    track.connect(audioContext.current.destination)
    endTrack.connect(audioContext.current.destination)

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
