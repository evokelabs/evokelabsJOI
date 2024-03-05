import React, { useEffect, useState } from 'react'
import SoundMusicIconSVG from './svg/button/SoundMusicIconSVG'
import SoundSFXIconSVG from './svg/button/SoundSFXIconSVG'
import SoundRainIconSVG from './svg/button/SoundRainIconSVG'
import SoundJOIIconSVG from './svg/button/SoundJOIIconSVG'
import SoundControlIconOnSVG from './svg/button/SoundControlIconOnSVG'
import SoundControlIconOffSVG from './svg/button/SoundControlIconOffSVG'
import ButtonAlternative from './ButtonAlternative'

const SoundControlIcons = () => {
  const [soundControlMasterToggle, setsoundControlMasterToggle] = useState(false)
  const [musicToggle, setMusicToggle] = useState(false)
  const [SFXToggle, setSFXToggle] = useState(false)
  const [rainToggle, setRainToggle] = useState(false)
  const [JOIToggle, setJOIToggle] = useState(false)

  useEffect(() => {
    console.log('soundControlMasterToggle changed:', soundControlMasterToggle)
  }, [soundControlMasterToggle])

  useEffect(() => {
    console.log('musicToggle changed:', musicToggle)
  }, [musicToggle])

  useEffect(() => {
    console.log('SFXToggle changed:', SFXToggle)
  }, [SFXToggle])

  useEffect(() => {
    console.log('rainToggle changed:', rainToggle)
  }, [rainToggle])

  useEffect(() => {
    console.log('JOIToggle changed:', JOIToggle)
  }, [JOIToggle])

  return (
    <div className='absolute bottom-5 right-0 pt-5 flex flex-row z-[10000000000000000]'>
      <div onClick={() => setMusicToggle(!musicToggle)}>
        <ButtonAlternative SVGIcon={props => <SoundMusicIconSVG {...props} />} />
      </div>
      <div onClick={() => setSFXToggle(!SFXToggle)}>
        <ButtonAlternative SVGIcon={props => <SoundSFXIconSVG {...props} />} />
      </div>
      <div onClick={() => setRainToggle(!rainToggle)}>
        <ButtonAlternative SVGIcon={props => <SoundRainIconSVG {...props} />} />
      </div>
      <div onClick={() => setJOIToggle(!JOIToggle)}>
        <ButtonAlternative SVGIcon={props => <SoundJOIIconSVG {...props} />} />
      </div>
      <div onClick={() => setsoundControlMasterToggle(!soundControlMasterToggle)}>
        <ButtonAlternative SVGIcon={props => <SoundControlIconOffSVG {...props} />} />
      </div>
      <div onClick={() => setsoundControlMasterToggle(!soundControlMasterToggle)}>
        <ButtonAlternative SVGIcon={props => <SoundControlIconOnSVG {...props} />} />
      </div>
    </div>
  )
}

export default SoundControlIcons
