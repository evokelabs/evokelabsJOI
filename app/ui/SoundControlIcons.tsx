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

import { SoundControlContext } from '@/app/libs/SoundControlContext'

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
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
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
  const { muteMusic, setMuteMusic, muteSFX, setMuteSFX, muteRain, setMuteRain, muteJOI, setMuteJOI, setMuteAll, muteAll } =
    useContext(SoundControlContext)

  const [soundControlMasterToggle, setSoundControlMasterToggle] = useState(true)

  useEffect(() => {
    // If all child toggles are false, set master toggle to false
    // If any child toggle is true, set master toggle to true
    setSoundControlMasterToggle(muteMusic || muteSFX || muteRain || muteJOI)
    setMuteAll(muteMusic && muteSFX && muteRain && muteJOI)
  }, [muteMusic, muteSFX, muteRain, muteJOI, muteAll, setMuteAll])

  useEffect(() => {
    const enableAudio = () => {
      setMuteAll(false)
      setMuteMusic(false)
      setMuteSFX(false)
      setMuteRain(false)
      setMuteJOI(false)
      setSoundControlMasterToggle(false)
      window.removeEventListener('click', enableAudio)
    }

    window.addEventListener('click', enableAudio)

    return () => {
      window.removeEventListener('click', enableAudio)
    }
  }, [])

  return (
    <div className='relative'>
      <div className='absolute bottom-2 lg:bottom-5 right-0 pt-3 lg:pt-5 flex flex-row justify-end  z-[10000000000000000] lg:scale-100 md:scale-75 scale-50 origin-bottom-right'>
        <div className={`flex transition-all duration-500 overflow-hidden ${!soundControlMasterToggle ? 'max-w-4' : 'max-w-full'}`}>
          <SoundEdgeTag />
          <ToggleButton
            toggle={muteMusic}
            setToggle={value => {
              setMuteMusic(value)
            }}
            SVGIcon={props => <SoundMusicIconSVG {...props} />}
          />
          <ToggleButton
            toggle={muteSFX}
            setToggle={value => {
              setMuteSFX(value)
            }}
            SVGIcon={props => <SoundSFXIconSVG {...props} />}
          />
          <ToggleButton
            toggle={muteRain}
            setToggle={value => {
              setMuteRain(value)
            }}
            SVGIcon={props => <SoundRainIconSVG {...props} />}
          />
          <ToggleButton
            toggle={muteJOI}
            setToggle={value => {
              setMuteJOI(value)
            }}
            SVGIcon={props => <SoundJOIIconSVG {...props} />}
          />
        </div>

        <ToggleButton
          toggle={soundControlMasterToggle}
          setToggle={value => {
            setMuteAll(value)
            setSoundControlMasterToggle(value)
            setMuteMusic(value)
            setMuteSFX(value)
            setMuteRain(value)
            setMuteJOI(value)
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
