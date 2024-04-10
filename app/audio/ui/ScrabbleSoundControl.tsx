import { useCallback, useEffect, useRef } from 'react'
import { audioContext } from '../webAPIContext'
import { cloudfrontURL } from '@/app/libs/cloudfrontURL'

const AUDIO_SOURCE_LOOP = `${cloudfrontURL}/sounds/scrabbleLoop.ogg`

type ScrabbleOnSoundControlProps = {
  volume?: number
  delay?: number
  transitionDuration?: number
  loop?: boolean
  isScrabble: boolean
}

const ScrabbleOnSoundControl: React.FC<ScrabbleOnSoundControlProps> = ({
  volume = 0,
  delay = 0,
  transitionDuration = 1000,
  loop = true,
  isScrabble
}) => {
  const track = useRef<MediaElementAudioSourceNode | null>(null)
  const audioElement = useRef(new Audio(AUDIO_SOURCE_LOOP))
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
  }, [])

  useEffect(() => {
    const audioElementCurrent = audioElement.current

    if (!track.current && audioContextRef.current) {
      track.current = audioContextRef.current.createMediaElementSource(audioElementCurrent)
    }

    audioElementCurrent.volume = volume

    // Connect the audio elements to the AudioContext
    if (track.current && audioContextRef.current) {
      track.current.connect(audioContextRef.current.destination)
    }

    return () => {
      audioElementCurrent.pause()
      audioElementCurrent.currentTime = 0
    }
  }, [volume])

  useEffect(() => {
    // Play or stop the audio based on isScrabble
    if (isScrabble) {
      playAudio()
    } else {
      stopAudio()
    }
  }, [isScrabble, loop, playAudio, stopAudio])

  return null
}

export default ScrabbleOnSoundControl
