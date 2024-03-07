import { AnimationContext } from '@/app/libs/AnimationContext'
import { useEffect, useState, useContext, useCallback, useRef } from 'react'
import { SkinnedMesh } from 'three'

import { SoundsContext } from '@/app/libs/SoundsContext'
import { DEFAULT_MUSIC_LOOP_VOLUME, JOI_MUSIC_LOOP_TRANSITION_DURATION, LOW_MUSIC_LOOP_VOLUME } from '@/app/audio/ELAudioStartSoundControl'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'
import Availabilities from '@/app/sections/data/availabilities.json'
import { JOISpeechContext } from '@/app/libs/JOISpeechContext'
import { SoundControlContext } from '@/app/libs/SoundControlContext'

const INTRO_FILES = JOISpeech.intro.map(item => item.filepath)
const INTRO_TEXT = JOISpeech.intro.map(item => item.text)

const MAX_VOLUME = 225
const MAX_INFLUENCE = 0.15
const GAIN_NODE_VOLUME = 1.75
const TIMEOUT_FAIL_SAFE = 7500
const TIME_TO_SPEAK_ON_LOAD = 12800
const KEYS = ['services', 'portfolio', 'history', 'resume', 'JOISpecial', 'availability']

export const useJOIVoice = (model: THREE.Object3D | null) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const { shouldJOISpeak, setShouldJOISpeak } = useContext(AnimationContext)
  const { setMusicVolume } = useContext(SoundsContext)
  const { setMusicLoopTransitionDuration, JOILineSpeak } = useContext(SoundsContext)
  const { muteJOI } = useContext(SoundControlContext)
  const { setJOILineCaption, setIsAudioPlaying, setIsChainPlaying } = useContext(JOISpeechContext)
  const [audioIndexState, setAudioIndexState] = useState(0)
  const [visited] = useState<boolean>(false)
  const isPlaying = useRef(false)

  const [hasSiteHomeVisited, setHasSiteHomeVisited] = useState(false)

  const audioFileRef = useRef<string | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  //Availability response
  const [availabilityTextArray, setAvailabilityTextArray] = useState<string[]>([])
  const [availabilityFilePathArray, setAvailabilityFilePathArray] = useState<string[]>([])

  const currentAudio = useRef<HTMLAudioElement | null>(null)

  //Set JOI Speak to speak after delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldJOISpeak(true)
    }, TIME_TO_SPEAK_ON_LOAD) // 5000 milliseconds = 5 seconds

    // Clean up function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timeoutId)
  }, []) // Empty dependency array so this effect only runs once on mount

  interface JOISpeechType {
    [key: string]: any[]
  }

  const JOISpeechData: JOISpeechType = JOISpeech

  //Window event to detect if user interact with the document first
  const [hasUserInteracted, setHasUserInteracted] = useState(false)

  useEffect(() => {
    // Set up event listeners for user interaction
    const handleUserInteraction = () => setHasUserInteracted(true)
    window.addEventListener('click', handleUserInteraction)
    window.addEventListener('keydown', handleUserInteraction)

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('keydown', handleUserInteraction)
    }
  }, []) // Empty dependency array so this effect only runs once on mount

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
        const status = Availabilities.status === 'available' ? 'open' : 'busy'

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

        setAvailabilityTextArray(prevState => [...prevState, ...text])
        setAvailabilityFilePathArray(prevState => [...prevState, ...filePath])
      } else {
        setAvailabilityTextArray(prevState => [])
        setAvailabilityFilePathArray(prevState => [])
      }

      // get a random item from the array, omit last two 'open' and 'busy' items from availability array
      let items = JOISpeechData[key]
      if (JOILineSpeak === 5) {
        items = items.filter((item, index) => index < items.length - 2)
      }
      const item = items[Math.floor(Math.random() * items.length)]
      setJOILineCaption(item.text)
      console.log('setJOILineCaption getFilePath:', item.text)
      return item.filepath
    },
    [JOISpeechData, setJOILineCaption]
  )
  const gainNode = useRef<GainNode | null>(null)

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
        setJOILineCaption(randomFile.text)
        console.log('setJOILineCaption Visited cookie:', randomFile.text)
        audioFileRef.current = randomFile.filepath
      } else {
        // If the cookie is not found, play the first file
        setJOILineCaption(INTRO_TEXT[0])
        console.log('setJOILineCaption INTRO_TEXT[0]:', INTRO_TEXT[0])
        audioFileRef.current = INTRO_FILES[0]
      }
    } else if (JOILineSpeak !== null) {
      const randomFilePath = getFilePath(JOILineSpeak) // use getFilePath here
      audioFileRef.current = randomFilePath
      if (!audioFileRef.current) return
    }
  }, [JOILineSpeak, getFilePath, hasSiteHomeVisited, model, setJOILineCaption, shouldJOISpeak])

  useEffect(() => {
    if (!shouldJOISpeak || !model || hasPlayed || (JOILineSpeak === null && hasSiteHomeVisited) || !hasUserInteracted) return

    const audioContext = audioContextRef.current
    console.log('useEffect JOILineSpeak:', JOILineSpeak)
    console.log('audioContext', audioContext)
    console.log('isPlaying.current', isPlaying.current)
    if (!audioContext || isPlaying.current) return

    if (audioFileRef.current) {
      const audio = new Audio(audioFileRef.current)

      if (!audio) return

      currentAudio.current = audio

      const source = audioContext.createMediaElementSource(audio)
      const analyser = audioContext.createAnalyser()

      let timeoutId: NodeJS.Timeout | null = setTimeout(() => {
        console.log('joi speak timeout triggered')
        isPlaying.current = false
        if (!muteJOI) {
          setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME)
        }
      }, TIMEOUT_FAIL_SAFE)

      source.connect(analyser)
      analyser.connect(audioContext.destination)

      gainNode.current = audioContext.createGain() // Create a GainNode
      source.connect(gainNode.current) // Connect the source to the GainNode
      gainNode.current.connect(audioContext.destination) // Connect the GainNode to the destination

      gainNode.current.gain.value = muteJOI ? -1 : GAIN_NODE_VOLUME

      if (!muteJOI) {
        setMusicVolume(LOW_MUSIC_LOOP_VOLUME) // lower the music volume before the audio starts playing
      }
      setMusicLoopTransitionDuration(JOI_MUSIC_LOOP_TRANSITION_DURATION)

      setTimeout(() => {
        isPlaying.current = true
        playSpeech(availabilityFilePathArray)
      }, JOI_MUSIC_LOOP_TRANSITION_DURATION / 2) // delay the audio play to match the music loop transition duration

      let audioIndex = 0

      //If availabilityFilePath hold object of arrays, play the audio files in sequence. It will hold an object when JOILineSpeak is 5
      const playSpeech = (availabilityFilePath: string | string[]) => {
        console.log('!playSpeech triggered!')
        if (availabilityFilePath.length > 1 && JOILineSpeak === 5) {
          if (isPlaying.current) {
            audio.src = availabilityFilePath[audioIndex] // Update the source of the audio object
            setJOILineCaption(availabilityTextArray[audioIndex])
            console.log('setJOILineCaptionavailabilityTextArray[audioIndex]', availabilityTextArray[audioIndex])
            setAudioIndexState(audioIndex) // Update the audio index state
            setIsAudioPlaying(false)
            setIsChainPlaying(true)
            audio.play().catch(error => console.error('Normal Audio play failed due to', error))
            audio.onended = () => {
              audioIndex++
              if (audioIndex < availabilityFilePath.length) {
                setJOILineCaption(availabilityTextArray[audioIndex]) // Update the caption
                console.log('setJOILineCaption(availabilityTextArray[audioIndex])', setJOILineCaption(availabilityTextArray[audioIndex]))
                setAudioIndexState(audioIndex) // Update the audio index state
                playSpeech(availabilityFilePath) // Play the next audio file
              } else {
                audioEndCleanUp()
              }
            }
            return
          }
        } else {
          if (isPlaying.current) {
            setIsAudioPlaying(true)
            setTimeout(() => {
              setHasPlayed(true)
            }, 5000)
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
        setIsChainPlaying(false)
        setHasPlayed(true)
        setIsAudioPlaying(false)
        isPlaying.current = false
        setMusicVolume(DEFAULT_MUSIC_LOOP_VOLUME) // revert the music volume back to the original value when the audio finishes
        setAvailabilityTextArray(prevState => [])
        setAvailabilityFilePathArray(prevState => [])
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
    hasSiteHomeVisited,
    muteJOI
    // model,
    // setMusicVolume,
    // setMusicLoopTransitionDuration,
    // JOISpeechData,
    // visited,
    // setIsAudioPlaying,
    // hasUserInteracted
  ])

  useEffect(() => {
    if (gainNode.current) {
      gainNode.current.gain.value = muteJOI ? -1 : GAIN_NODE_VOLUME
    }
  }, [muteJOI])
}
