import { createContext, Dispatch, SetStateAction } from 'react'

interface SoundControlContextType {
  muteMusic: boolean
  setMuteMusic: Dispatch<SetStateAction<boolean>>
  muteSFX: boolean
  setMuteSFX: Dispatch<SetStateAction<boolean>>
  muteRain: boolean
  setMuteRain: Dispatch<SetStateAction<boolean>>
  muteJOI: boolean
  setMuteJOI: Dispatch<SetStateAction<boolean>>
}

export const SoundControlContext = createContext<SoundControlContextType>({
  muteMusic: true,
  setMuteMusic: () => {},
  muteSFX: true,
  setMuteSFX: () => {},
  muteRain: true,
  setMuteRain: () => {},
  muteJOI: true,
  setMuteJOI: () => {}
})
