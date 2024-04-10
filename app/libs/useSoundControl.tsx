import { useState, useEffect } from 'react'
import { SoundAudioLevelControls } from '../sections/data/types'

const useSoundControl = (soundAudioLevelControls: SoundAudioLevelControls) => {
  const [wasMuted, setWasMuted] = useState(false)

  const setUserMutedAll = (muteAll: boolean) => {
    if (muteAll) {
      setWasMuted(soundAudioLevelControls.muteAll || (soundAudioLevelControls.muteMusic && soundAudioLevelControls.muteSFX))
    }
    soundAudioLevelControls.setMuteAll(muteAll)
    soundAudioLevelControls.setMuteMusic(muteAll)
    soundAudioLevelControls.setMuteRain(muteAll)
    soundAudioLevelControls.setMuteSFX(muteAll)
  }

  useEffect(() => {
    const handleFocus = () => {
      if (!wasMuted) {
        setUserMutedAll(false)
      }
    }

    window.addEventListener('focus', handleFocus)

    return () => {
      window.removeEventListener('focus', handleFocus)
    }
  }, [wasMuted])

  return { setUserMutedAll, wasMuted }
}

export default useSoundControl
