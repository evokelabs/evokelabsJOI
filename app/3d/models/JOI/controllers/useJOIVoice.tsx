import { AnimationContext } from '@/app/libs/AnimationContext'
import { useEffect, useState, useContext } from 'react'
import { SkinnedMesh } from 'three'

import { SoundsContext } from '@/app/libs/SoundsContext'
import { DEFAULT_MUSIC_LOOP_VOLUME, JOI_MUSIC_LOOP_TRANSITION_DURATION, LOW_MUSIC_LOOP_VOLUME } from '@/app/audio/ELAudioStartSoundControl'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'

const INTRO_FILES = JOISpeech.intro.map(item => item.filepath)

const MAX_VOLUME = 255
const MAX_INFLUENCE = 0.15
const GAIN_NODE_VOLUME = 0.75

export const useJOIVoice = (model: THREE.Object3D | null) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const { shouldJOISpeak, setShouldJOISpeak } = useContext(AnimationContext)
  const { setMusicVolume } = useContext(SoundsContext)
  const { setMusicLoopTransitionDuration, JOILineSpeak } = useContext(SoundsContext)
  const [initialAudioFile, setInitialAudioFile] = useState<string | null>(null)
  const [randomFile, setRandomFile] = useState<string | null>(null)
  const [visited, setVisited] = useState<boolean>(false)
  const [shouldPlayAudio, setShouldPlayAudio] = useState(false)

  interface JOISpeechType {
    [key: string]: any[]
  }

  const JOISpeechData: JOISpeechType = JOISpeech

  useEffect(() => {
    setHasPlayed(false)
    setShouldPlayAudio(true)
  }, [JOILineSpeak])

  useEffect(() => {
    if (hasPlayed || !shouldJOISpeak || !model) return

    const visitedCookie = document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited='))
    const files = INTRO_FILES.slice(1) // exclude the first file
    const randomFile = files[Math.floor(Math.random() * files.length)]
    const audioFile = visitedCookie ? randomFile : INTRO_FILES[0]

    setVisited(!!visitedCookie)
    setRandomFile(randomFile) // Always set randomFile

    if (!visitedCookie) {
      setInitialAudioFile(audioFile)
    }
  }, [JOILineSpeak, hasPlayed, shouldJOISpeak, model, setMusicVolume, setMusicLoopTransitionDuration, JOISpeechData])

  useEffect(() => {
    if (hasPlayed || !shouldJOISpeak || !model || !randomFile) return

    const audio = new Audio(randomFile)
    const audioContext = new AudioContext()
    const source = audioContext.createMediaElementSource(audio)
    const analyser = audioContext.createAnalyser()

    source.connect(analyser)
    analyser.connect(audioContext.destination)

    const gainNode = audioContext.createGain() // Create a GainNode
    source.connect(gainNode) // Connect the source to the GainNode
    gainNode.connect(audioContext.destination) // Connect the GainNode to the destination

    gainNode.gain.value = GAIN_NODE_VOLUME

    setMusicVolume(LOW_MUSIC_LOOP_VOLUME) // lower the music volume before the audio starts playing
    setMusicLoopTransitionDuration(JOI_MUSIC_LOOP_TRANSITION_DURATION)

    console.log('function before set timeoput', randomFile)

    setTimeout(() => {
      console.log('Audio play', randomFile)
      audio.play().catch(error => console.error('Audio play failed due to', error))
    }, JOI_MUSIC_LOOP_TRANSITION_DURATION / 2)

    audio.onended = () => {
      setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME) // revert the music volume back to the original value when the audio finishes
    }

    if (audioContext.state === 'suspended') {
      audioContext.resume()
    }

    const updateMorphTarget = () => {
      const data = new Uint8Array(analyser.frequencyBinCount)
      analyser.getByteFrequencyData(data)

      const binSize = Math.floor(data.length / 4)
      const bins = [data.slice(0, binSize), data.slice(binSize, binSize * 2), data.slice(binSize * 2, binSize * 3), data.slice(binSize * 3)]

      const volumes = bins.map(bin => bin.reduce((a, b) => a + b) / bin.length)
      const influences = volumes.map((volume, index) => {
        let influence = Math.min(Math.max(volume / MAX_VOLUME, 0), 1)
        // Apply MAX_INFLUENCE only for influences[1] and influences[2]
        if (index === 1 || index === 2) {
          influence = Math.min(influence, MAX_INFLUENCE)
        }
        return influence
      })

      const skinnedMeshes: THREE.SkinnedMesh[] = []
      model.traverse(object => {
        if (object instanceof SkinnedMesh) {
          skinnedMeshes.push(object as THREE.SkinnedMesh)
        }
      })

      const { JawOpen: jawOpenIndex, OOO: oooIndex, EEE: eeeIndex } = skinnedMeshes[0]?.morphTargetDictionary || {}

      skinnedMeshes.forEach(mesh => {
        mesh.morphTargetInfluences?.splice(jawOpenIndex, 1, influences[0])
        mesh.morphTargetInfluences?.splice(oooIndex, 1, influences[1])
        mesh.morphTargetInfluences?.splice(eeeIndex, 1, influences[2])
      })

      requestAnimationFrame(updateMorphTarget)
    }

    updateMorphTarget()

    const onAudioEnd = () => {
      if (!visited) {
        const date = new Date()
        date.setDate(date.getDate() + 7)
        document.cookie = `evokelabs-visited=true; expires=${date.toUTCString()}`
      }
      setHasPlayed(true)
    }

    audio.addEventListener('ended', onAudioEnd)

    return () => {
      audio.removeEventListener('ended', onAudioEnd)
    }
  }, [hasPlayed, shouldJOISpeak, model, setMusicVolume, setMusicLoopTransitionDuration, randomFile, visited, JOILineSpeak])
}
