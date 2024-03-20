import React, { useContext, useEffect, useMemo, useState } from 'react'
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

const ToggleButton = ({
  toggle,
  setToggle,
  SVGIcon,
  SVGIconOn,
  SVGIconOff,
  showCrossIcon = true,
  ButtonComponent = ButtonAlternative
}: {
  toggle?: any
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

type Theme = 'music' | 'sfx' | 'rain' | 'joi'
type ThemeToggles = { [key in Theme]: boolean }

const themes: Theme[] = ['music', 'sfx', 'rain', 'joi']

const SoundControlIcons = () => {
  const { muteTheme, unmuteTheme, setMuteAll, muteAll } = useContext(AudioContext)

  const [soundControlMasterToggle, setSoundControlMasterToggle] = useState(true)

  const themeStates = useMemo(
    () => ({
      music: muteTheme('music') as any,
      sfx: muteTheme('sfx') as any,
      rain: muteTheme('rain') as any,
      joi: muteTheme('joi') as any
    }),
    [muteTheme]
  )

  useEffect(() => {
    setSoundControlMasterToggle(Object.values(themeStates).some(Boolean))
    setMuteAll(Object.values(themeStates).every(Boolean))
  }, [themeStates, setMuteAll])

  useEffect(() => {
    const enableAudio = () => {
      setMuteAll(false)
      Object.keys(themeStates).forEach(theme => unmuteTheme(theme))
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
          {Object.keys(themeStates).map(theme => (
            <ToggleButton
              key={theme}
              toggle={themeStates[theme as Theme]}
              setToggle={() => ((themeStates[theme as Theme] as any) ? unmuteTheme(theme as Theme) : muteTheme(theme as Theme))}
              SVGIcon={props => {
                switch (theme) {
                  case 'music':
                    return <SoundMusicIconSVG {...props} />
                  case 'sfx':
                    return <SoundSFXIconSVG {...props} />
                  case 'rain':
                    return <SoundRainIconSVG {...props} />
                  case 'joi':
                    return <SoundJOIIconSVG {...props} />
                  default:
                    return <div /> // return an empty div or some default SVG component
                }
              }}
            />
          ))}
        </div>

        <ToggleButton
          toggle={soundControlMasterToggle}
          setToggle={() => {
            const newToggleState = !soundControlMasterToggle
            setMuteAll(newToggleState)
            setSoundControlMasterToggle(newToggleState)
            Object.keys(themeStates).forEach(theme => (newToggleState ? muteTheme(theme) : unmuteTheme(theme)))
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
