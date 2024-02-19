import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import LeftFrame from './LeftFrame'
import MidFrame from './MidFrame'
import { RED, TEAL, UI_DURATION_TIME } from '../../libs/UIConstants'
import IconSmallInteractive from '../IconSmall/IconSmallInteractive'

const ButtonMainMenu = ({
  mainMenuNumber,
  label,
  hoverLabel,
  isLocalActive,
  onClick
}: {
  mainMenuNumber: number
  label: string
  hoverLabel: string
  isLocalActive: boolean
  onClick: (mainMenuNumber: number) => void
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isActive, setIsActive] = useState(isLocalActive)
  const buttonTextRef = useRef<HTMLDivElement>(null)
  const leftFrameRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)
  const hoverAreaRef = useRef<HTMLDivElement>(null)
  const isActiveRef = useRef(isActive)

  useEffect(() => {
    const buttonText = buttonTextRef.current
    const leftFrame = leftFrameRef.current
    const mainFrame = mainFrameRef.current

    if (buttonText && leftFrame && mainFrame) {
      if (!isLocalActive && isActiveRef.current) {
        setIsActive(false)
      }
      isActiveRef.current = isLocalActive
    }
  }, [isLocalActive])

  const toDefaultAnimation = (buttonText: HTMLDivElement, leftFrame: HTMLDivElement, mainFrame: HTMLDivElement) => {
    console.log('toDefaultAnimation tween triggered')
    gsap.killTweensOf([buttonText, leftFrame, mainFrame])
    gsap.to(buttonText, { css: { '--shadow-color': 'rgba(222, 84, 86, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(buttonText, { color: RED, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(leftFrame, { x: '+0', duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(mainFrame, { x: '-2', duration: UI_DURATION_TIME, ease: 'power1.out' })
  }

  const toHoverAnimation = (buttonText: HTMLDivElement, leftFrame: HTMLDivElement, mainFrame: HTMLDivElement) => {
    gsap.killTweensOf([buttonText, leftFrame, mainFrame])
    gsap.to(buttonText, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(buttonText, { color: TEAL, duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(leftFrame, { x: '+5', duration: UI_DURATION_TIME, ease: 'power1.out' })
    gsap.to(mainFrame, { x: '+10', duration: UI_DURATION_TIME, ease: 'power1.out' })
  }

  const toActiveAnimation = (buttonText: HTMLDivElement, leftFrame: HTMLDivElement, mainFrame: HTMLDivElement) => {
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

    const triggerOnClick = () => {
      setIsActive(true)
      onClick(mainMenuNumber)
    }

    if (buttonText && leftFrame && mainFrame && hoverArea) {
      hoverArea.addEventListener('mouseenter', () => {
        setIsHovered(true)
        toHoverAnimation(buttonText, leftFrame, mainFrame)
      })

      hoverArea.addEventListener('mouseleave', () => {
        setIsHovered(false)
        toDefaultAnimation(buttonText, leftFrame, mainFrame)
      })

      hoverArea.addEventListener('mousedown', () => {
        setIsMouseDown(true)
      })

      hoverArea.addEventListener('mouseup', () => {
        setIsMouseDown(false)
      })

      hoverArea.addEventListener('click', () => {
        triggerOnClick()
      })

      if (isActive) {
        toActiveAnimation(buttonText, leftFrame, mainFrame)
      } else if (!isActive && !isHovered) {
        toDefaultAnimation(buttonText, leftFrame, mainFrame)
      }
    }
  }, [isActive, isHovered, mainMenuNumber, onClick])

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
            <LeftFrame isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
          </div>
          <div className='z-0'>
            <MidFrame isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
          </div>
        </div>

        <div
          className='absolute flex items-center flex-row top-3.5 font-orbitron font-bold place-content-between pl-7 pr-7 w-full text-red-blur text-[1.25rem]'
          ref={buttonTextRef}
          style={{ pointerEvents: isActive ? 'none' : 'all' }}
        >
          <IconSmallInteractive isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
          <div className={`top-2 relative ${isHovered || isActive ? 'text-teal-blur' : 'text-red-blur'}`}>
            {isActive || isHovered ? hoverLabel : label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonMainMenu
