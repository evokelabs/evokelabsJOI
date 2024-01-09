import { useEffect, useState } from 'react'
import { MutableRefObject } from 'react'
import { useFrame } from '@react-three/fiber'

interface CarSoundControlProps {
  carRef: MutableRefObject<any>
}

const CyberpunkCarSoundControl: React.FC<CarSoundControlProps> = ({ carRef }) => {
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null)
  const [gainNode, setGainNode] = useState<GainNode | null>(null)
  const [panner, setPanner] = useState<StereoPannerNode | null>(null)

  useEffect(() => {
    const resumeAudio = async () => {
      if (!audioCtx) {
        const newAudioCtx = new AudioContext()
        const newGainNode = newAudioCtx.createGain()
        const newPanner = newAudioCtx.createStereoPanner()

        setAudioCtx(newAudioCtx)
        setGainNode(newGainNode)
        setPanner(newPanner)

        const response = await fetch('/sounds/engineLoop.ogg')
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await newAudioCtx.decodeAudioData(arrayBuffer)

        const newAudioSrc = newAudioCtx.createBufferSource()
        newAudioSrc.buffer = audioBuffer
        newAudioSrc.loop = true
        newAudioSrc.start()

        newAudioSrc.connect(newGainNode)
        newGainNode.connect(newPanner)
        newPanner.connect(newAudioCtx.destination)
      } else if (audioCtx.state === 'suspended') {
        await audioCtx.resume()
      }
    }

    window.addEventListener('click', resumeAudio)
    window.addEventListener('keydown', resumeAudio)

    return () => {
      window.removeEventListener('click', resumeAudio)
      window.removeEventListener('keydown', resumeAudio)
    }
  }, [audioCtx])

  useFrame(() => {
    if (carRef.current && gainNode && panner) {
      const volume = 1 - Math.abs(carRef.current.position.x) / 25
      gainNode.gain.value = Math.max(0, Math.min(1, volume))

      const pan = carRef.current.position.x / -25
      panner.pan.value = Math.max(-1, Math.min(1, pan))
    }
  })

  return null
}

export default CyberpunkCarSoundControl
