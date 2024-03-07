import { createContext, Dispatch, SetStateAction } from 'react'

interface SoundControlContextType {
  muteAll: boolean
  setMuteAll: Dispatch<SetStateAction<boolean>>
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
  muteAll: true,
  setMuteAll: () => {},
  muteMusic: true,
  setMuteMusic: () => {},
  muteSFX: true,
  setMuteSFX: () => {},
  muteRain: true,
  setMuteRain: () => {},
  muteJOI: true,
  setMuteJOI: () => {}
})
