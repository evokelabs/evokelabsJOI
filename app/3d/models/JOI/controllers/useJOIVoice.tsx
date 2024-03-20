import { useEffect, useRef } from 'react'

import JOISpeech from '@/app/audio/JOI/JOISpeech.json'

const TIME_TO_SPEAK_ON_LOAD = 12800
const KEYS = ['services', 'portfolio', 'history', 'resume', 'JOISpecial', 'availability']

export const useJOIVoice = (model: THREE.Object3D | null) => {
  const currentAudio = useRef<HTMLAudioElement | null>(null)

  //Set JOI Speak to speak after delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {}, TIME_TO_SPEAK_ON_LOAD) // 5000 milliseconds = 5 seconds

    // Clean up function to clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timeoutId)
  }, []) // Empty dependency array so this effect only runs once on mount

  interface JOISpeechType {
    [key: string]: any[]
  }

  const JOISpeechData: JOISpeechType = JOISpeech
}
