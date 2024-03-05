import React from 'react'
import SoundMusicIconSVG from './svg/button/SoundMusicIconSVG'
import SoundSFXIconSVG from './svg/button/SoundSFXIconSVG'
import SoundRainIconSVG from './svg/button/SoundRainIconSVG'
import SoundJOIIconSVG from './svg/button/SoundJOIIconSVG'
import SoundControlIconOnSVG from './svg/button/SoundControlIconOnSVG'
import SoundControlIconOffSVG from './svg/button/SoundControlIconOffSVG'
import ButtonAlternative from './ButtonAlternative'

const SoundControlIcons = () => {
  return (
    <div className='absolute bottom-5 right-0 pt-5 flex flex-row z-[10000000000000000]'>
      <ButtonAlternative SVGIcon={props => <SoundMusicIconSVG {...props} />} />
      <ButtonAlternative SVGIcon={props => <SoundSFXIconSVG {...props} />} />
      <ButtonAlternative SVGIcon={props => <SoundRainIconSVG {...props} />} />
      <ButtonAlternative SVGIcon={props => <SoundJOIIconSVG {...props} />} />
      <ButtonAlternative SVGIcon={props => <SoundControlIconOffSVG {...props} />} />
      <ButtonAlternative SVGIcon={props => <SoundControlIconOnSVG {...props} />} />
    </div>
  )
}

export default SoundControlIcons
