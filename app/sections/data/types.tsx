import { Dispatch, SetStateAction } from 'react'

export interface SoundAudioLevelControls {
  setMuteAll: Dispatch<SetStateAction<boolean>>
  setMuteMusic: Dispatch<SetStateAction<boolean>>
  setMuteRain: Dispatch<SetStateAction<boolean>>
  setMuteSFX: Dispatch<SetStateAction<boolean>>
  muteAll: boolean
  muteMusic: boolean
  muteRain: boolean
  muteSFX: boolean
}
