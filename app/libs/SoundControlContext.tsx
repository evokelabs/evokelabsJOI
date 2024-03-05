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
  muteMusic: false,
  setMuteMusic: () => {},
  muteSFX: false,
  setMuteSFX: () => {},
  muteRain: false,
  setMuteRain: () => {},
  muteJOI: false,
  setMuteJOI: () => {}
})
