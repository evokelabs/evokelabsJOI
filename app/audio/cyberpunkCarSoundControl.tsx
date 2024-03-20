import { useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { CyberpunkRefType } from '../3d/models/CyberpunkCar'
import { audioContext } from './audioMaster'

const SOUND_PATH = '/sounds/engineLoop.ogg'
const MAX_VOLUME = 0.55
const MIN_VOLUME = 0
const VOLUME_DIVISOR = 25

const CyberpunkCarSoundControl = ({ carRef, muteSFX }: { carRef: CyberpunkRefType; muteSFX: boolean }) => {
  const [gainNode, setGainNode] = useState<GainNode | null>(null)
  const [panner, setPanner] = useState<StereoPannerNode | null>(null)

  useEffect(() => {
    const setupAudio = async () => {
      if (audioContext && !muteSFX) {
        const newGainNode = audioContext.createGain()
        const newPanner = audioContext.createStereoPanner()

        setGainNode(newGainNode)
        setPanner(newPanner)

        const response = await fetch(SOUND_PATH)
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

        const newAudioSrc = audioContext.createBufferSource()
        newAudioSrc.buffer = audioBuffer
        newAudioSrc.loop = true
        newAudioSrc.start()

        newAudioSrc.connect(newGainNode)
        newGainNode.connect(newPanner)
        newPanner.connect(audioContext.destination)
      }
    }

    setupAudio()
  }, [muteSFX])

  useFrame(() => {
    if (carRef.carRef.current && gainNode && panner) {
      const currentMaxVolume = muteSFX ? 0 : MAX_VOLUME
      const volume = currentMaxVolume - Math.abs(carRef.carRef.current.position.x) / VOLUME_DIVISOR
      gainNode.gain.value = Math.max(MIN_VOLUME, Math.min(currentMaxVolume, volume))

      const pan = carRef.carRef.current.position.x / -25
      panner.pan.value = Math.max(-1, Math.min(1, pan))
    }
  })

  return null
}

export default CyberpunkCarSoundControl
