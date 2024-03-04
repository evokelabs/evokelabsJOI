import { AnimationContext } from '@/app/libs/AnimationContext'
import { useEffect, useState, useContext, useCallback, useRef } from 'react'
import { SkinnedMesh } from 'three'

import { SoundsContext } from '@/app/libs/SoundsContext'
import { DEFAULT_MUSIC_LOOP_VOLUME, JOI_MUSIC_LOOP_TRANSITION_DURATION, LOW_MUSIC_LOOP_VOLUME } from '@/app/audio/ELAudioStartSoundControl'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'
import Availabilities from '@/app/sections/data/availabilities.json'

import { RoutesContext } from '@/app/libs/RoutesContext'

const INTRO_FILES = JOISpeech.intro.map(item => item.filepath)

const MAX_VOLUME = 255
const MAX_INFLUENCE = 0.15
const GAIN_NODE_VOLUME = 2
const TIMEOUT_FAIL_SAFE = 7500
const TIMEOUT_HARD_STATE_RESET = 7000
const KEYS = ['services', 'portfolio', 'history', 'resume', 'JOISpecial', 'availability']

export const useJOIVoice = (model: THREE.Object3D | null) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const { shouldJOISpeak, setShouldJOISpeak } = useContext(AnimationContext)
  const { setMusicVolume } = useContext(SoundsContext)
  const { setMusicLoopTransitionDuration, JOILineSpeak } = useContext(SoundsContext)
  const [visited] = useState<boolean>(false)
  const isPlaying = useRef(false)

  const [hasSiteHomeVisited, setHasSiteHomeVisited] = useState(false)
  const currentAudio = useRef<HTMLAudioElement | null>(null)
  const audioFileRef = useRef<string | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  //Availability response
  const [availabilityTextArray, setAvailabilityTextArray] = useState<string[]>([])
  const [availabilityFilePathArray, setAvailabilityFilePathArray] = useState<string[]>([])

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

      // If JOILineSpeak is 5, handle the specific use case
      if (JOILineSpeak === 5) {
        // Randomly select either 'busy' or 'open'
        const status = Availabilities.status === 'unavailable' ? 'open' : 'busy'

        // Iterate over the 'availability' array and find the object with the 'busy' or 'open' key
        const availabilityObject = JOISpeechData[key].find(item => item[status])

        // If the object is found, get the 'email' and 'follow' arrays
        const emailResponses =
          availabilityObject &&
          availabilityObject[status] &&
          Array.isArray(availabilityObject[status]) &&
          availabilityObject[status].length > 0 &&
          availabilityObject[status][availabilityObject[status].length - 1][0]
            ? availabilityObject[status][availabilityObject[status].length - 1][0]['email']
            : []
        const followResponses =
          availabilityObject &&
          availabilityObject[status] &&
          Array.isArray(availabilityObject[status]) &&
          availabilityObject[status].length > 0 &&
          availabilityObject[status][availabilityObject[status].length - 1][0]
            ? availabilityObject[status][availabilityObject[status].length - 1][0]['follow']
            : []

        // Get a random email response
        const randomEmailResponse = emailResponses[Math.floor(Math.random() * emailResponses.length)]

        // Get a random follow response
        const randomFollowResponse = followResponses[Math.floor(Math.random() * followResponses.length)]

        // Get a random busy or open response
        const randomStatusResponse = availabilityObject[status][Math.floor(Math.random() * (availabilityObject[status].length - 1))]

        const responseArray = [
          { filepath: randomStatusResponse.filepath, text: randomStatusResponse.text },
          { filepath: randomEmailResponse.filepath, text: randomEmailResponse.text },
          { filepath: randomFollowResponse.filepath, text: randomFollowResponse.text }
        ]
        const text = responseArray.map(item => item.text)
        const filePath = responseArray.map(item => item.filepath)

        setAvailabilityTextArray(text)
        setAvailabilityFilePathArray(filePath)
      } else {
        setAvailabilityTextArray([]) // Make sure to clear the availability array
        setAvailabilityFilePathArray([]) // Make sure to clear the availability filepath array
      }

      // get a random item from the array, omit last two 'open' and 'busy' items from availability array
      let items = JOISpeechData[key]
      if (JOILineSpeak === 5) {
        items = items.filter((item, index) => index < items.length - 2)
      }
      const item = items[Math.floor(Math.random() * items.length)]
      console.log('saying: ', item.text)
      return item.filepath
    },
    [JOISpeechData]
  )
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const resetSpeechFlag = useCallback(() => {
    // Clear the existing timer if there is one
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Start a new timer
    timerRef.current = setTimeout(() => {
      isPlaying.current = false
      // setHasSiteHomeVisited(true)
      setHasPlayed(false)
      setShouldJOISpeak(true)
      setHasPlayed(false)
      JOILineSpeak
    }, TIMEOUT_HARD_STATE_RESET)
  }, [setHasPlayed, setShouldJOISpeak, JOILineSpeak])

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
    if (!shouldJOISpeak || !model || hasPlayed || (JOILineSpeak === null && hasSiteHomeVisited)) return

    const audioContext = audioContextRef.current
    if (!audioContext || isPlaying.current) return
    if (audioFileRef.current) {
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
        isPlaying.current = true
        playSpeech(availabilityFilePathArray)
      }, JOI_MUSIC_LOOP_TRANSITION_DURATION / 2) // delay the audio play to match the music loop transition duration

      let audioIndex = 0

      const playSpeech = (availabilityFilePath: string | string[]) => {
        if (availabilityFilePath.length > 1) {
          if (isPlaying.current) {
            console.log(availabilityTextArray)
            audio.play().catch(error => console.error('Normal Audio play failed due to', error))
            audio.onended = () => {
              if (audioIndex < availabilityFilePath.length) {
                console.log('queuing ', availabilityFilePath[audioIndex])
                console.log('saying: ', availabilityTextArray[audioIndex])
                audio.src = availabilityFilePath[audioIndex] // Update the source of the audio object
                playSpeech(availabilityFilePath) // Play the next audio file
                audioIndex++
              } else {
                audioEndCleanUp()
              }
            }
          }
        } else {
          if (isPlaying.current) {
            audio.play().catch(error => console.error('Normal Audio play failed due to', error))
          }
        }
      }

      audio.onended = () => {
        audioEndCleanUp()
      }

      audio.onerror = () => {
        isPlaying.current = false
        if (timeoutId) clearTimeout(timeoutId)
      }

      const audioEndCleanUp = () => {
        isPlaying.current = false
        setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME) // revert the music volume back to the original value when the audio finishes
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
    visited,
    availabilityTextArray,
    availabilityFilePathArray
  ])
  return { resetSpeechFlag }
}
