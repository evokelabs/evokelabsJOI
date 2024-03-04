import { createContext } from 'react'

export const JOISpeechContext = createContext<{
  JOILineCaption: string | null
  setJOILineCaption: (value: string | null) => void
  isAudioPlaying: boolean
  setIsAudioPlaying: (value: boolean) => void
}>({
  JOILineCaption: null,
  setJOILineCaption: () => {},
  isAudioPlaying: false,
  setIsAudioPlaying: () => {}
})
