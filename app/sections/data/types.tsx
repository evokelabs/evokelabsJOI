import { Dispatch, SetStateAction } from 'react'

export interface SoundAudioLevelControls {
  setMusicVolume: Dispatch<SetStateAction<number>>
  setMuteRain: Dispatch<SetStateAction<boolean>>
  setMuteSFX: Dispatch<SetStateAction<boolean>>
  muteRain: boolean
  muteSFX: boolean
}
