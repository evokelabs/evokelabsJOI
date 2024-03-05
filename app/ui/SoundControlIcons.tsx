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

  const IconOn = SVGIconOn || SVGIcon
  const IconOff = SVGIconOff || SVGIcon

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {toggle ? (
        IconOn && <ButtonComponent SVGIcon={props => IconOn({ ...props, isHovered })} />
      ) : (
        <>
          {showCrossIcon && (
            <div className='absolute mt-1.5 right-0 mr-2'>
              <SoundCrossIconSVG />
            </div>
          )}
          {IconOff && <ButtonComponent SVGIcon={props => IconOff({ ...props, isHovered })} />}
        </>
      )}
    </div>
  )
}
const SoundControlIcons = () => {
  const [soundControlMasterToggle, setSoundControlMasterToggle] = useState(false)
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

  useEffect(() => {
    // If all child toggles are true, set master toggle to true
    // If any child toggle is false, set master toggle to false
    setSoundControlMasterToggle(musicToggle && SFXToggle && rainToggle && JOIToggle)
  }, [musicToggle, SFXToggle, rainToggle, JOIToggle])

  return (
    <div className='relative'>
      <div className='absolute bottom-5 right-0 pt-5 flex flex-row z-[10000000000000000]'>
        {!soundControlMasterToggle && (
          <>
            <ToggleButton toggle={musicToggle} setToggle={setMusicToggle} SVGIcon={props => <SoundMusicIconSVG {...props} />} />
            <ToggleButton toggle={SFXToggle} setToggle={setSFXToggle} SVGIcon={props => <SoundSFXIconSVG {...props} />} />
            <ToggleButton toggle={rainToggle} setToggle={setRainToggle} SVGIcon={props => <SoundRainIconSVG {...props} />} />
            <ToggleButton toggle={JOIToggle} setToggle={setJOIToggle} SVGIcon={props => <SoundJOIIconSVG {...props} />} />
          </>
        )}
        <ToggleButton
          toggle={soundControlMasterToggle}
          setToggle={value => {
            setSoundControlMasterToggle(value)
            setMusicToggle(value)
            setSFXToggle(value)
            setRainToggle(value)
            setJOIToggle(value)
          }}
          SVGIconOn={props => <SoundControlIconOnSVG {...props} />}
          SVGIconOff={props => <SoundControlIconOffSVG {...props} />}
          showCrossIcon={false}
          ButtonComponent={ButtonSocial}
        />
      </div>
      <SoundEdgeTag className={soundControlMasterToggle ? 'translate-x-0 transition-transform' : '-translate-x-60 transition-transform'} />
    </div>
  )
}

export default SoundControlIcons
