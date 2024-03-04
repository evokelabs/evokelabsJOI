import { createContext } from 'react'

export const JOISpeechContext = createContext<{
  JOILineCaption: string | null
  setJOILineCaption: (value: string | null) => void
  startJOILineCaption: () => void
  endJOILineCaption: () => void
}>({
  JOILineCaption: null,
  setJOILineCaption: () => {},
  startJOILineCaption: () => {},
  endJOILineCaption: () => {}
})
