import React, { useEffect, useState } from 'react'
import SoundMusicIconSVG from './svg/button/SoundMusicIconSVG'
import SoundSFXIconSVG from './svg/button/SoundSFXIconSVG'
import SoundRainIconSVG from './svg/button/SoundRainIconSVG'
import SoundJOIIconSVG from './svg/button/SoundJOIIconSVG'
import SoundControlIconOnSVG from './svg/button/SoundControlIconOnSVG'
import SoundControlIconOffSVG from './svg/button/SoundControlIconOffSVG'
import ButtonAlternative from './ButtonAlternative'
import SoundCrossIconSVG from './svg/button/SoundCrossIconSVG'

const ToggleButton = ({
  toggle,
  setToggle,
  SVGIcon
}: {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  SVGIcon: (props: { isHovered: boolean }) => JSX.Element
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return toggle ? (
    <div
      onClick={() => setToggle(!toggle)}
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ButtonAlternative SVGIcon={props => SVGIcon({ ...props, isHovered })} />
    </div>
  ) : (
    <div
      onClick={() => setToggle(!toggle)}
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='absolute mt-1.5 right-0 mr-2'>
        <SoundCrossIconSVG />
      </div>
      <ButtonAlternative SVGIcon={props => SVGIcon({ ...props, isHovered })} />
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

  return (
    <div className='absolute bottom-5 right-0 pt-5 flex flex-row z-[10000000000000000]'>
      <ToggleButton toggle={musicToggle} setToggle={setMusicToggle} SVGIcon={props => <SoundMusicIconSVG {...props} />} />
      <ToggleButton toggle={SFXToggle} setToggle={setSFXToggle} SVGIcon={props => <SoundSFXIconSVG {...props} />} />
      <ToggleButton toggle={rainToggle} setToggle={setRainToggle} SVGIcon={props => <SoundRainIconSVG {...props} />} />
      <ToggleButton toggle={JOIToggle} setToggle={setJOIToggle} SVGIcon={props => <SoundJOIIconSVG {...props} />} />
      <ToggleButton
        toggle={soundControlMasterToggle}
        setToggle={setSoundControlMasterToggle}
        SVGIcon={props => <SoundControlIconOnSVG {...props} />}
      />
    </div>
  )
}

export default SoundControlIcons
