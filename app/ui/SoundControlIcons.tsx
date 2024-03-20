import React, { useEffect, useState } from 'react'
import SoundMusicIconSVG from './svg/button/SoundMusicIconSVG'
import SoundSFXIconSVG from './svg/button/SoundSFXIconSVG'
import SoundRainIconSVG from './svg/button/SoundRainIconSVG'
import SoundJOIIconSVG from './svg/button/SoundJOIIconSVG'
import SoundControlIconOnSVG from './svg/button/SoundControlIconOnSVG'
import SoundControlIconOffSVG from './svg/button/SoundControlIconOffSVG'
import ButtonAlternative from './ButtonAlternative'
import SoundCrossIconSVG from './svg/button/SoundCrossIconSVG'
import SoundEdgeTag from './PanelContent/SoundEdgeTag'
import ButtonSocial from './ButtonSocial'

import { muteTheme, unmuteTheme } from '../audio/audioMaster'
import { AudioControls } from '../audio/audioTypes'

const ToggleButton = ({
  toggle,
  setToggle,
  SVGIcon,
  SVGIconOn,
  SVGIconOff,
  showCrossIcon = true,
  ButtonComponent = ButtonAlternative
}: {
  toggle: boolean
  setToggle: (value: boolean) => void
  SVGIcon?: (props: { isHovered: boolean }) => JSX.Element
  SVGIconOn?: (props: { isHovered: boolean }) => JSX.Element
  SVGIconOff?: (props: { isHovered: boolean }) => JSX.Element
  showCrossIcon?: boolean
  ButtonComponent?: (props: { SVGIcon: (props: { isHovered: boolean }) => JSX.Element }) => JSX.Element
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const IconOff = SVGIconOff || SVGIcon
  const IconOn = SVGIconOn || SVGIcon

  return (
    <div
      onClick={() => {
        setToggle(!toggle)
      }}
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {toggle ? (
        <>
          {showCrossIcon && (
            <div className='absolute mt-1.5 right-0 mr-2'>
              <SoundCrossIconSVG />
            </div>
          )}
          {IconOn && <ButtonComponent SVGIcon={props => IconOn({ ...props, isHovered })} />}
        </>
      ) : (
        <>{IconOff && <ButtonComponent SVGIcon={props => IconOff({ ...props, isHovered })} />}</>
      )}
    </div>
  )
}
const SoundControlIcons = ({
  muteMusic,
  setMuteMusic,
  muteSFX,
  setMuteSFX,
  muteRain,
  setMuteRain,
  muteSpeech,
  setMuteSpeech,
  setMuteAll,
  muteAll
}: AudioControls) => {
  const [soundControlMasterToggle, setSoundControlMasterToggle] = useState(true)

  const createToggleButton = (
    mute: boolean,
    setMute: { (value: boolean): void; (value: boolean): void; (value: boolean): void; (value: boolean): void; (arg0: boolean): void },
    theme: string,
    SVGIcon: (props: { isHovered: boolean }) => JSX.Element
  ) => (
    <ToggleButton
      toggle={mute}
      setToggle={() => {
        if (mute) {
          unmuteTheme(theme)
        } else {
          muteTheme(theme)
        }
        setMute(!mute)
      }}
      SVGIcon={props => <SVGIcon {...props} />}
    />
  )

  const muteUnmuteAll = (value: boolean) => {
    setMuteAll(value)
    setMuteMusic(value)
    setMuteSFX(value)
    setMuteRain(value)
    setMuteSpeech(value)
    if (value) {
      muteTheme('music')
      muteTheme('sfx')
      muteTheme('rain')
      muteTheme('speech')
    } else {
      unmuteTheme('music')
      unmuteTheme('sfx')
      unmuteTheme('rain')
      unmuteTheme('speech')
    }
  }

  useEffect(() => {
    // If all child toggles are false, set master toggle to false
    // If any child toggle is true, set master toggle to true
    setSoundControlMasterToggle(muteMusic || muteSFX || muteRain || muteSpeech)
    setMuteAll(muteMusic && muteSFX && muteRain && muteSpeech)
  }, [muteMusic, muteSFX, muteRain, muteSpeech, muteAll, setMuteAll])

  return (
    <div className='relative'>
      <div className='absolute bottom-2 xl:bottom-5 right-0 pt-3 xl:pt-5 flex flex-row justify-end  z-[10000000000000000] 2xl:scale-100 lg:scale-[70%] md:scale-65 scale-50 origin-bottom-right'>
        <div className={`flex transition-all duration-500 overflow-hidden ${!soundControlMasterToggle ? 'max-w-4' : 'max-w-full'}`}>
          <SoundEdgeTag />
          {createToggleButton(muteMusic, setMuteMusic, 'music', SoundMusicIconSVG)}
          {createToggleButton(muteSFX, setMuteSFX, 'sfx', SoundSFXIconSVG)}
          {createToggleButton(muteRain, setMuteRain, 'rain', SoundRainIconSVG)}
          {createToggleButton(muteSpeech, setMuteSpeech, 'speech', SoundJOIIconSVG)}
        </div>

        <ToggleButton
          toggle={soundControlMasterToggle}
          setToggle={muteUnmuteAll}
          SVGIconOn={props => <SoundControlIconOffSVG {...props} />}
          SVGIconOff={props => <SoundControlIconOnSVG {...props} />}
          showCrossIcon={!soundControlMasterToggle} // Show cross icon when muted
          ButtonComponent={ButtonSocial}
        />
      </div>
    </div>
  )
}

export default SoundControlIcons
