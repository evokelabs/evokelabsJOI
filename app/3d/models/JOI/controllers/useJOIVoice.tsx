import { AnimationContext } from '@/app/libs/AnimationContext'
import { useEffect, useState, useContext } from 'react'
import { SkinnedMesh } from 'three'

const MAX_VOLUME = 160
const JOI_VOICE_PATH = './sounds/JOI-Voice/'
const INTRO_01 = 'Intro-01.mp3'
const INTRO_02 = 'Intro-02.mp3'
const INTRO_03 = 'Intro-03.mp3'
const INTRO_04 = 'Intro-04.mp3'

export const useJOIVoice = (model: THREE.Object3D | null) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const { shouldJOISpeak } = useContext(AnimationContext)

  useEffect(() => {
    if (hasPlayed || !shouldJOISpeak || !model) return

    const visited = document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited='))
    const files = [INTRO_02, INTRO_03, INTRO_04]
    const randomFile = files[Math.floor(Math.random() * files.length)]
    const audioFile = `${JOI_VOICE_PATH}${visited ? randomFile : INTRO_01}`

    const audio = new Audio(audioFile)
    const audioContext = new AudioContext()
    const source = audioContext.createMediaElementSource(audio)
    const analyser = audioContext.createAnalyser()
    source.connect(analyser)
    analyser.connect(audioContext.destination)

    audio.play().catch(error => console.error('Audio play failed due to', error))

    if (audioContext.state === 'suspended') {
      audioContext.resume()
    }

    const updateMorphTarget = () => {
      const data = new Uint8Array(analyser.frequencyBinCount)
      analyser.getByteFrequencyData(data)

      const binSize = Math.floor(data.length / 4)
      const bins = [data.slice(0, binSize), data.slice(binSize, binSize * 2), data.slice(binSize * 2, binSize * 3), data.slice(binSize * 3)]

      const volumes = bins.map(bin => bin.reduce((a, b) => a + b) / bin.length)
      const influences = volumes.map(volume => Math.min(Math.max(volume / MAX_VOLUME, 0), 1))

      const skinnedMeshes: THREE.SkinnedMesh[] = []
      model.traverse(object => {
        if (object instanceof SkinnedMesh) {
          skinnedMeshes.push(object as THREE.SkinnedMesh)
        }
      })

      const { JawOpen: jawOpenIndex, OOO: oooIndex, EEE: eeeIndex } = skinnedMeshes[0]?.morphTargetDictionary || {}

      if (jawOpenIndex !== undefined && oooIndex !== undefined && eeeIndex !== undefined) {
        skinnedMeshes.forEach(mesh => {
          mesh.morphTargetInfluences?.splice(jawOpenIndex, 1, influences[0])
          mesh.morphTargetInfluences?.splice(oooIndex, 1, influences[1])
          mesh.morphTargetInfluences?.splice(eeeIndex, 1, influences[2])
        })
      }

      if (!audio.paused) {
        requestAnimationFrame(updateMorphTarget)
      }
    }

    updateMorphTarget()

    const onAudioEnd = () => {
      if (!visited) {
        document.cookie = 'evokelabs-visited=true'
      }
      setHasPlayed(true)
    }

    audio.addEventListener('ended', onAudioEnd)

    return () => {
      audio.removeEventListener('ended', onAudioEnd)
    }
  }, [hasPlayed, shouldJOISpeak, model])
}
