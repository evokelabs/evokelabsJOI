import { AnimationContext } from '@/app/libs/AnimationContext'
import { useEffect, useState, useContext } from 'react'
import { SkinnedMesh } from 'three'

const MAX_VOLUME = 100
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

    let audioFile = JOI_VOICE_PATH + INTRO_01
    if (visited) {
      const files = [INTRO_02, INTRO_03, INTRO_04]
      const randomFile = files[Math.floor(Math.random() * files.length)]
      audioFile = JOI_VOICE_PATH + randomFile
    }

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
      const volume = data.reduce((a, b) => a + b) / data.length
      const morphTargetInfluence = Math.min(Math.max(volume / MAX_VOLUME, 0), 1) // Normalize to 0-1 range, amplify, and clamp to 0-1

      const skinnedMeshes: THREE.SkinnedMesh[] = []
      model.traverse(object => {
        if (object instanceof SkinnedMesh) {
          skinnedMeshes.push(object as THREE.SkinnedMesh)
        }
      })

      const jawOpenIndex = skinnedMeshes[0]?.morphTargetDictionary?.JawOpen

      if (jawOpenIndex !== undefined) {
        skinnedMeshes.forEach(mesh => {
          if (mesh.morphTargetInfluences) {
            mesh.morphTargetInfluences[jawOpenIndex] = morphTargetInfluence
          }
        })
      }

      if (!audio.paused) {
        requestAnimationFrame(updateMorphTarget)
      }
    }

    if (!audio.paused) {
      requestAnimationFrame(updateMorphTarget)
    }

    updateMorphTarget()

    audio.onended = () => {
      if (!visited) {
        document.cookie = 'evokelabs-visited=true'
      }
      setHasPlayed(true)
    }
  }, [hasPlayed, shouldJOISpeak, model])
}
