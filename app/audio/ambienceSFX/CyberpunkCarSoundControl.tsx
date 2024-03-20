import { useContext, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'

import { CyberpunkRefType } from '../../3d/models/CyberpunkCar/index'
import { SoundControlContext } from '@/app/libs/SoundControlContext'
import { audioContext } from '../webAPIContext'

const SOUND_PATH = '/sounds/engineLoop.ogg'
const MAX_VOLUME = 0.55
const MIN_VOLUME = 0
const VOLUME_DIVISOR = 25

// This component controls the sound of a car in a cyberpunk scene.
const CyberpunkCarSoundControl = ({ carRef }: CyberpunkRefType) => {
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null)
  const [gainNode, setGainNode] = useState<GainNode | null>(null)
  const [panner, setPanner] = useState<StereoPannerNode | null>(null)

  const { muteSFX } = useContext(SoundControlContext)

  // On mount and when audioCtx changes, set up the audio context, gain node, and panner.
  // Also, load and play the sound, and add event listeners to resume the audio when it's suspended.
  useEffect(() => {
    const resumeAudio = async () => {
      if (!audioCtx) {
        const newAudioCtx = audioContext
        if (newAudioCtx) {
          const newGainNode = newAudioCtx.createGain()
          const newPanner = newAudioCtx.createStereoPanner()

          setAudioCtx(newAudioCtx)
          setGainNode(newGainNode)
          setPanner(newPanner)

          const response = await fetch(SOUND_PATH)
          const arrayBuffer = await response.arrayBuffer()
          const audioBuffer = await newAudioCtx.decodeAudioData(arrayBuffer)

          const newAudioSrc = newAudioCtx.createBufferSource()
          newAudioSrc.buffer = audioBuffer
          newAudioSrc.loop = true
          newAudioSrc.start()

          newAudioSrc.connect(newGainNode)
          newGainNode.connect(newPanner)
          newPanner.connect(newAudioCtx.destination)
        }
      } else if (audioCtx.state === 'suspended') {
        await audioCtx.resume()
      }
    }

    window.addEventListener('click', resumeAudio)
    window.addEventListener('touchstart', resumeAudio)
    window.addEventListener('keydown', resumeAudio)

    return () => {
      window.removeEventListener('click', resumeAudio)
      window.removeEventListener('touchstart', resumeAudio)
      window.removeEventListener('keydown', resumeAudio)
    }
  }, [audioCtx])

  // On each frame, update the volume and pan of the sound based on the car's position.
  useFrame(() => {
    if (carRef.current && gainNode && panner) {
      const currentMaxVolume = muteSFX ? 0 : MAX_VOLUME
      const volume = currentMaxVolume - Math.abs(carRef.current.position.x) / VOLUME_DIVISOR
      gainNode.gain.value = Math.max(MIN_VOLUME, Math.min(currentMaxVolume, volume))

      const pan = carRef.current.position.x / -25
      panner.pan.value = Math.max(-1, Math.min(1, pan))
    }
  })
  return null
}

export default CyberpunkCarSoundControl
