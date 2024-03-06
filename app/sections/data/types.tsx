import { Dispatch, SetStateAction } from 'react'

export interface SoundAudioLevelControls {
  setMuteMusic: Dispatch<SetStateAction<boolean>>
  setMuteRain: Dispatch<SetStateAction<boolean>>
  setMuteSFX: Dispatch<SetStateAction<boolean>>
  muteMusic: boolean
  muteRain: boolean
  muteSFX: boolean
}
