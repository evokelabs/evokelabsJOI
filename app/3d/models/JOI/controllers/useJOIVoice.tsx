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

export const useJOIVoice = (model: THREE.Object3D | null) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const { shouldJOISpeak, setShouldJOISpeak } = useContext(AnimationContext)
  const { setMusicVolume } = useContext(SoundsContext)
  const { setMusicLoopTransitionDuration, JOILineSpeak } = useContext(SoundsContext)
  const [initialAudioFile, setInitialAudioFile] = useState<string | null>(null)
  const [visited, setVisited] = useState<boolean>(false)
  const isPlaying = useRef(false)

  const currentAudio = useRef<HTMLAudioElement | null>(null)
  const audioFileRef = useRef<string | null>(null)

  interface JOISpeechType {
    [key: string]: any[]
  }

  const JOISpeechData: JOISpeechType = JOISpeech

  const getFilePath = useCallback(
    (JOILineSpeak: number) => {
      const keys = ['services', 'portfolio', 'history', 'resume', 'JOISpecial', 'availability']

      const key = keys[JOILineSpeak]
      if (!key || !JOISpeechData[key]) {
        throw new Error('Invalid JOILineSpeak value')
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
    console.log(
      'speech useEFfect called init, hasPlayed',
      hasPlayed,
      'shouldJOiSpeak',
      shouldJOISpeak,
      'JOILineSpeak',
      JOILineSpeak,
      'model',
      model
    )

    // if (hasPlayed || !shouldJOISpeak || !model || JOILineSpeak === null) return

    if (!shouldJOISpeak || !model) return

    let audioFile

    if (JOILineSpeak === null) {
      const introFiles = JOISpeech.intro // assuming JOISpeech is the parsed JSON data
      const randomFile = introFiles[Math.floor(Math.random() * introFiles.length)]
      audioFileRef.current = randomFile.filepath
      audioFile = randomFile.filepath
      console.log('JOILineSpeak is null, using JOISpeech.intro', audioFile)
    } else {
      console.log('JOILineSpeak is not null, using getFilePath')
      const visitedCookie = document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited='))
      const files = INTRO_FILES.slice(1) // exclude the first file
      const randomFilePath = getFilePath(JOILineSpeak) // use getFilePath here
      audioFileRef.current = visitedCookie ? randomFilePath : INTRO_FILES[0]

      console.log('INTRO_FILES[0]', INTRO_FILES[0])

      setVisited(!!visitedCookie)

      if (!audioFileRef.current) return
      const audio = new Audio(audioFileRef.current)
    }

    // The rest of the audio playing logic goes here...
  }, [JOILineSpeak, hasPlayed, shouldJOISpeak, model, setMusicVolume, setMusicLoopTransitionDuration, JOISpeechData, getFilePath])

  useEffect(() => {
    console.log(
      '2nd useEffect called. hasplayed,',
      hasPlayed,
      'shouldJOISpeak',
      shouldJOISpeak,
      'audioFileRef.current',
      audioFileRef.current,
      'currentAudio.current',
      currentAudio.current,
      'JOILineSpeak',
      JOILineSpeak,
      'visited',
      visited,
      'model',
      model
    )
    if (hasPlayed || !shouldJOISpeak || !model || !audioFileRef) return

    console.log('2nd useEffect 1')
    if (!audioFileRef.current) return
    const audio = new Audio(audioFileRef.current)
    console.log('2nd useEffect 2')
    if (isPlaying.current) {
      return
    }
    console.log('2nd useEffect 3')

    currentAudio.current = audio
    const audioContext = new AudioContext()
    const source = audioContext.createMediaElementSource(audio)
    const analyser = audioContext.createAnalyser()

    let timeoutId: NodeJS.Timeout | null = setTimeout(() => {
      isPlaying.current = false
      setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME)
      console.log('fail safe reset')
    }, TIMEOUT_FAIL_SAFE) // Fail safe reset incase audio messed up
    console.log('posttrigger timeoutID', timeoutId)

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
      if (timeoutId) clearTimeout(timeoutId)
      audio.removeEventListener('ended', onAudioEnd)
    }
  }, [hasPlayed, shouldJOISpeak, model, setMusicVolume, setMusicLoopTransitionDuration, audioFileRef, visited, JOILineSpeak])
}
