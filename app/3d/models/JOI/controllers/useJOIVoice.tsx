import { AnimationContext } from '@/app/libs/AnimationContext'
import { useEffect, useState, useContext } from 'react'

const JOI_VOICE_PATH = './sounds/JOI-Voice/'
const INTRO_01 = 'Intro-01.mp3'
const INTRO_02 = 'Intro-02.mp3'
const INTRO_03 = 'Intro-03.mp3'
const INTRO_04 = 'Intro-04.mp3'

export const useJOIVoice = (model: THREE.Object3D | null) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const { shouldJOISpeak } = useContext(AnimationContext)

  useEffect(() => {
    if (hasPlayed || !shouldJOISpeak) return

    const visited = document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited='))

    let audioFile = JOI_VOICE_PATH + INTRO_01
    if (visited) {
      const files = [INTRO_02, INTRO_03, INTRO_04]
      const randomFile = files[Math.floor(Math.random() * files.length)]
      audioFile = JOI_VOICE_PATH + randomFile
    }

    const audio = new Audio(audioFile)
    audio.play()

    audio.onended = () => {
      if (!visited) {
        document.cookie = 'evokelabs-visited=true'
      }
      setHasPlayed(true)
    }
  }, [hasPlayed, shouldJOISpeak])
}
