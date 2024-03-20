import React, { useContext, useEffect, useState } from 'react'
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

import { AudioContext } from '../audio/audioContext'
import { muteTheme, unmuteTheme } from '../audio/audioMaster'

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
const SoundControlIcons = () => {
  const { muteMusic, setMuteMusic, muteSFX, setMuteSFX, muteRain, setMuteRain, muteSpeech, setMuteSpeech, setMuteAll, muteAll } =
    useContext(AudioContext)

  const [soundControlMasterToggle, setSoundControlMasterToggle] = useState(true)

  useEffect(() => {
    // If all child toggles are false, set master toggle to false
    // If any child toggle is true, set master toggle to true
    setSoundControlMasterToggle(muteMusic || muteSFX || muteRain || muteSpeech)
    setMuteAll(muteMusic && muteSFX && muteRain && muteSpeech)
  }, [muteMusic, muteSFX, muteRain, muteSpeech, muteAll, setMuteAll])

  useEffect(() => {
    const enableAudio = () => {
      setMuteAll(false)
      setMuteMusic(false)
      setMuteSFX(false)
      setMuteRain(false)
      setMuteSpeech(false)
      setSoundControlMasterToggle(false)
      window.removeEventListener('click', enableAudio)
      window.removeEventListener('touchstart', enableAudio)
    }

    window.addEventListener('click', enableAudio)
    window.addEventListener('touchstart', enableAudio)

    return () => {
      window.removeEventListener('click', enableAudio)
      window.removeEventListener('touchstart', enableAudio)
    }
  }, [])

  return (
    <div className='relative'>
      <div className='absolute bottom-2 xl:bottom-5 right-0 pt-3 xl:pt-5 flex flex-row justify-end  z-[10000000000000000] 2xl:scale-100 lg:scale-[70%] md:scale-65 scale-50 origin-bottom-right'>
        <div className={`flex transition-all duration-500 overflow-hidden ${!soundControlMasterToggle ? 'max-w-4' : 'max-w-full'}`}>
          <SoundEdgeTag />
          <ToggleButton
            toggle={muteMusic}
            setToggle={() => {
              if (muteMusic) {
                unmuteTheme('music')
              } else {
                muteTheme('music')
              }
              setMuteMusic(!muteMusic)
            }}
            SVGIcon={props => <SoundMusicIconSVG {...props} />}
          />
          <ToggleButton
            toggle={muteSFX}
            setToggle={() => {
              if (muteSFX) {
                unmuteTheme('sfx')
              } else {
                muteTheme('sfx')
              }
              setMuteSFX(!muteSFX)
            }}
            SVGIcon={props => <SoundSFXIconSVG {...props} />}
          />
          <ToggleButton
            toggle={muteRain}
            setToggle={() => {
              if (muteRain) {
                unmuteTheme('rain')
              } else {
                muteTheme('rain')
              }
              setMuteRain(!muteRain)
            }}
            SVGIcon={props => <SoundRainIconSVG {...props} />}
          />
          <ToggleButton
            toggle={muteSpeech}
            setToggle={() => {
              if (muteSpeech) {
                unmuteTheme('speech')
              } else {
                muteTheme('speech')
              }
              setMuteSpeech(!muteSpeech)
            }}
            SVGIcon={props => <SoundJOIIconSVG {...props} />}
          />
        </div>

        <ToggleButton
          toggle={soundControlMasterToggle}
          setToggle={(value: boolean) => {
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
          }}
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
