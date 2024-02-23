import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import LeftFrame from './LeftFrame'
import MidFrame from './MidFrame'
import { ORANGE, RED, TEAL, UI_DURATION_TIME } from '../../libs/UIConstants'
import IconSmallInteractive from '../IconSmall/IconSmallInteractive'

import AvailabilitiesSVG from '../svg/mainmenu/AvailabilitiesSVG'
import HistorySVG from '../svg/mainmenu/HistorySVG'
import JOISVG from '../svg/mainmenu/JOISVG'
import PortfolioSVG from '../svg/mainmenu/PortfolioSVG'
import ResumeSVG from '../svg/mainmenu/ResumeSVG'
import ServicesSVG from '../svg/mainmenu/ServicesSVG'

const MainMenuSVG = ({ label, isHovered, isActive }: { label: string; isHovered: boolean; isActive: boolean }) => {
  let svg = <></>
  switch (label) {
    case 'CORPO GUIDE':
      svg = <ServicesSVG primaryColor={isHovered || isActive ? TEAL : RED} />
      break
    case 'PAST GIGS':
      svg = <PortfolioSVG primaryColor={isHovered || isActive ? TEAL : RED} />
      break
    case 'BACKSTORY':
      svg = <HistorySVG primaryColor={isHovered || isActive ? TEAL : RED} />
      break
    case 'DOSSIER':
      svg = <ResumeSVG primaryColor={isHovered || isActive ? TEAL : RED} />
      break
    case 'JOI SPECIAL':
      svg = <JOISVG primaryColor={isHovered || isActive ? TEAL : RED} />
      break
    case 'FIX A BOOKING':
      svg = <AvailabilitiesSVG primaryColor={isHovered || isActive ? TEAL : ORANGE} />
      break
    default:
      null
  }
  return <div className='absolute '>{svg}</div>
}

const ButtonMainMenu = ({
  mainMenuNumber,
  label,
  hoverLabel,
  isLocalActive,
  onClick,
  callToAction = false
}: {
  mainMenuNumber: number
  label: string
  hoverLabel: string
  isLocalActive: boolean
  onClick: (mainMenuNumber: number) => void
  callToAction?: boolean
}) => {
  const primaryColor = callToAction ? 'text-orange-blur' : 'text-red-blur'
  const primaryColorBlur = callToAction ? 'text-teal-blur' : 'text-orange-blur'

  const [isHovered, setIsHovered] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isActive, setIsActive] = useState(isLocalActive)
  const buttonTextRef = useRef<HTMLDivElement>(null)
  const leftFrameRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)
  const hoverAreaRef = useRef<HTMLDivElement>(null)
  const isActiveRef = useRef(isActive)

  useEffect(() => {
    setIsActive(isLocalActive)
    isActiveRef.current = isLocalActive
  }, [isLocalActive])

  const toDefaultAnimation = (buttonText: HTMLDivElement | null, leftFrame: HTMLDivElement | null, mainFrame: HTMLDivElement | null) => {
    if (isActiveRef.current) return
    gsap.killTweensOf([buttonText, leftFrame, mainFrame])
    gsap.to(buttonText, { css: { '--shadow-color': 'rgba(222, 84, 86, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(buttonText, { color: RED, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(leftFrame, { x: '+0', duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(mainFrame, { x: '-2', duration: UI_DURATION_TIME, ease: 'power1.out' })
  }

  const toHoverAnimation = (buttonText: HTMLDivElement | null, leftFrame: HTMLDivElement | null, mainFrame: HTMLDivElement | null) => {
    if (isActiveRef.current) return
    gsap.killTweensOf([buttonText, leftFrame, mainFrame])
    gsap.to(buttonText, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(buttonText, { color: TEAL, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(leftFrame, { x: '+5', duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(mainFrame, { x: '+10', duration: UI_DURATION_TIME, ease: 'power1.out' })
  }

  const toActiveAnimation = (buttonText: HTMLDivElement | null, leftFrame: HTMLDivElement | null, mainFrame: HTMLDivElement | null) => {
    gsap.killTweensOf([buttonText, leftFrame, mainFrame])
    gsap.to(buttonText, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(buttonText, { color: TEAL, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(leftFrame, { x: '+13', duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(mainFrame, { x: '-10', duration: UI_DURATION_TIME, ease: 'power1.out' })
  }

  useEffect(() => {
    const buttonText = buttonTextRef.current
    const leftFrame = leftFrameRef.current
    const mainFrame = mainFrameRef.current
    const hoverArea = hoverAreaRef.current

    const handleMouseEnter = () => {
      setIsHovered(true)
      toHoverAnimation(buttonText, leftFrame, mainFrame)
    }

    const handleMouseLeave = () => {
      toDefaultAnimation(buttonText, leftFrame, mainFrame)
      setIsHovered(false)
    }

    const handleMouseDown = () => {
      setIsMouseDown(true)
    }

    const handleMouseUp = () => {
      setIsMouseDown(false)
    }

    const handleClick = () => {
      setIsActive(true)
      toActiveAnimation(buttonText, leftFrame, mainFrame)
      onClick(mainMenuNumber)
    }

    if (hoverArea) {
      hoverArea.addEventListener('mouseenter', handleMouseEnter)
      hoverArea.addEventListener('mouseleave', handleMouseLeave)
      hoverArea.addEventListener('mousedown', handleMouseDown)
      hoverArea.addEventListener('mouseup', handleMouseUp)
      hoverArea.addEventListener('click', handleClick)
    }

    return () => {
      if (hoverArea) {
        hoverArea.removeEventListener('mouseenter', handleMouseEnter)
        hoverArea.removeEventListener('mouseleave', handleMouseLeave)
        hoverArea.removeEventListener('mousedown', handleMouseDown)
        hoverArea.removeEventListener('mouseup', handleMouseUp)
        hoverArea.removeEventListener('click', handleClick)
      }
    }
  }, [mainMenuNumber, onClick])

  useEffect(() => {
    const buttonText = buttonTextRef.current
    const leftFrame = leftFrameRef.current
    const mainFrame = mainFrameRef.current

    if (isActive) {
      toActiveAnimation(buttonText, leftFrame, mainFrame)
    } else if (!isActive && !isHovered) {
      toDefaultAnimation(buttonText, leftFrame, mainFrame)
    }
  }, [isActive, isHovered])

  return (
    <div
      className='cursor-pointer w-fit'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={hoverAreaRef}
      style={{ pointerEvents: isActive ? 'none' : 'all' }}
    >
      <div className='relative ' ref={mainFrameRef}>
        <div className='flex items-center flex-row w-full'>
          <div ref={leftFrameRef} className='z-1'>
            <LeftFrame isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} callToAction={callToAction} />
          </div>
          <div className='z-0'>
            <MidFrame isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} callToAction={callToAction} />
          </div>
        </div>

        <div
          className={`absolute flex items-center flex-row top-3.5 font-orbitron font-bold place-content-between pl-7 pr-7 w-full text-[1.25rem] ${primaryColorBlur}`}
          ref={buttonTextRef}
          style={{ pointerEvents: isActive ? 'none' : 'all' }}
        >
          <IconSmallInteractive isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} callToAction={callToAction} />
          <MainMenuSVG label={label} isHovered={isHovered} isActive={isActive} />

          <div className={`top-2 relative ${isHovered || isActive ? 'text-teal-blur' : primaryColor}`}>
            {isActive || isHovered ? hoverLabel : label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonMainMenu
