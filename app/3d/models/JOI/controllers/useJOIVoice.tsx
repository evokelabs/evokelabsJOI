import { AnimationContext } from '@/app/libs/AnimationContext'
import { useEffect, useState, useContext, useCallback, useRef } from 'react'
import { SkinnedMesh } from 'three'

import { SoundsContext } from '@/app/libs/SoundsContext'
import { DEFAULT_MUSIC_LOOP_VOLUME, JOI_MUSIC_LOOP_TRANSITION_DURATION, LOW_MUSIC_LOOP_VOLUME } from '@/app/audio/ELAudioStartSoundControl'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'

const INTRO_FILES = JOISpeech.intro.map(item => item.filepath)

const MAX_VOLUME = 255
const MAX_INFLUENCE = 0.15
const GAIN_NODE_VOLUME = 2
const TIMEOUT_FAIL_SAFE = 7500
const KEYS = ['services', 'portfolio', 'history', 'resume', 'JOISpecial', 'availability']

export const useJOIVoice = (model: THREE.Object3D | null) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const { shouldJOISpeak } = useContext(AnimationContext)
  const { setMusicVolume } = useContext(SoundsContext)
  const { setMusicLoopTransitionDuration, JOILineSpeak } = useContext(SoundsContext)
  const [visited] = useState<boolean>(false)
  const isPlaying = useRef(false)

  const [hasSiteHomeVisited, setHasSiteHomeVisited] = useState(false)
  const currentAudio = useRef<HTMLAudioElement | null>(null)
  const audioFileRef = useRef<string | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  interface JOISpeechType {
    [key: string]: any[]
  }

  const JOISpeechData: JOISpeechType = JOISpeech

  useEffect(() => {
    audioContextRef.current = new AudioContext()
  }, [])

  const getFilePath = useCallback(
    (JOILineSpeak: number) => {
      const key = KEYS[JOILineSpeak]
      if (!key || !JOISpeechData[key]) {
        console.error('Invalid JOILineSpeak value')
        return
      }

      // get a random item from the array
      const item = JOISpeechData[key][Math.floor(Math.random() * JOISpeechData[key].length)]

      return item.filepath
    },
    [JOISpeechData]
  )

  useEffect(() => {
    setHasPlayed(false)
  }, [JOILineSpeak])

  useEffect(() => {
    if (!shouldJOISpeak || !model) return

    if (JOILineSpeak === null) {
      if (hasSiteHomeVisited) return
      const introFiles = JOISpeech.intro
      const visitedCookie = document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited='))
      setHasSiteHomeVisited(true)

      if (visitedCookie) {
        // If the cookie is found, select a random file that is not the first one
        const nonFirstIntroFiles = introFiles.filter((_, index) => index !== 0)
        const randomFile = nonFirstIntroFiles[Math.floor(Math.random() * nonFirstIntroFiles.length)]
        audioFileRef.current = randomFile.filepath
      } else {
        // If the cookie is not found, play the first file
        audioFileRef.current = INTRO_FILES[0]
      }
    } else if (JOILineSpeak !== null) {
      const randomFilePath = getFilePath(JOILineSpeak) // use getFilePath here
      audioFileRef.current = randomFilePath
      if (!audioFileRef.current) return
    }

    // The rest of the audio playing logic goes here...
  }, [
    JOILineSpeak,
    hasPlayed,
    shouldJOISpeak,
    model,
    setMusicVolume,
    setMusicLoopTransitionDuration,
    JOISpeechData,
    getFilePath,
    hasSiteHomeVisited
  ])

  useEffect(() => {
    console.log('1st check pass')
    console.log(
      'useEffect shouldJOISpeak',
      shouldJOISpeak,
      'hasPlayed',
      hasPlayed,
      'JOILineSpeak',
      JOILineSpeak,
      'hasSiteHomeVisited',
      hasSiteHomeVisited,
      'model',
      model
    )
    if (!shouldJOISpeak || !model || hasPlayed || (JOILineSpeak === null && hasSiteHomeVisited)) return
    console.log('2nd check pass')

    const audioContext = audioContextRef.current
    console.log('pre 3rd check, audioContext', audioContext, 'isPlaying.current', isPlaying.current)
    if (!audioContext || isPlaying.current) return
    console.log('3rd useEFfectpass')
    console.log('audioFileRef', audioFileRef)
    console.log('audioFileRef current', audioFileRef.current)
    if (audioFileRef.current) {
      console.log('audioFileRef.current pass')
      const audio = new Audio(audioFileRef.current)

      if (!audio) return

      currentAudio.current = audio

      const source = audioContext.createMediaElementSource(audio)
      const analyser = audioContext.createAnalyser()

      let timeoutId: NodeJS.Timeout | null = setTimeout(() => {
        isPlaying.current = false
        setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME)
      }, TIMEOUT_FAIL_SAFE)

      source.connect(analyser)
      analyser.connect(audioContext.destination)

      const gainNode = audioContext.createGain() // Create a GainNode
      source.connect(gainNode) // Connect the source to the GainNode
      gainNode.connect(audioContext.destination) // Connect the GainNode to the destination

      gainNode.gain.value = GAIN_NODE_VOLUME

      setMusicVolume(LOW_MUSIC_LOOP_VOLUME) // lower the music volume before the audio starts playing
      setMusicLoopTransitionDuration(JOI_MUSIC_LOOP_TRANSITION_DURATION)

      setTimeout(() => {
        audio.play().catch(error => console.error('Audio play failed due to', error))
        isPlaying.current = true
      }, 500) // delay the audio play to give the previous audio time to stop

      setTimeout(() => {
        audio.play().catch(error => console.error('Audio play failed due to', error))
        isPlaying.current = true
      }, JOI_MUSIC_LOOP_TRANSITION_DURATION / 2) // delay the audio play to match the music loop transition duration

      audio.onended = () => {
        isPlaying.current = false
        setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME) // revert the music volume back to the original value when the audio finishes
        if (timeoutId) clearTimeout(timeoutId)
      }

      audio.onerror = () => {
        isPlaying.current = false
        if (timeoutId) clearTimeout(timeoutId)
      }

      if (audioContext.state === 'suspended') {
        audioContext.resume()
      }

      const updateMorphTarget = () => {
        const data = new Uint8Array(analyser.frequencyBinCount)
        analyser.getByteFrequencyData(data)

        const binSize = Math.floor(data.length / 4)
        const bins = [
          data.slice(0, binSize),
          data.slice(binSize, binSize * 2),
          data.slice(binSize * 2, binSize * 3),
          data.slice(binSize * 3)
        ]

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
        if (timeoutId) clearTimeout(timeoutId)
        audio.removeEventListener('ended', onAudioEnd)
      }
    }
  }, [
    JOILineSpeak,
    hasPlayed,
    shouldJOISpeak,
    model,
    setMusicVolume,
    setMusicLoopTransitionDuration,
    JOISpeechData,
    getFilePath,
    hasSiteHomeVisited,
    visited
  ])
}
