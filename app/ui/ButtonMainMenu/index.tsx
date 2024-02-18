import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import LeftFrame from './LeftFrame'
import MidFrame from './MidFrame'
import { RED, TEAL, UI_DURATION_TIME } from '../../libs/UIConstants'
import IconSmallInteractive from '../IconSmall/IconSmallInteractive'

const ButtonMainMenu = ({
  key,
  label,
  hoverLabel,
  isActive,
  onClick
}: {
  key: number
  label: string
  hoverLabel: string
  isActive: boolean
  onClick: (index: number) => void
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [IsLocalActive, setIsLocalActive] = useState(isActive)
  const buttonTextRef = useRef<HTMLDivElement>(null)
  const leftFrameRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)
  const hoverAreaRef = useRef<HTMLDivElement>(null)
  const isActiveRef = useRef(IsLocalActive)

  useEffect(() => {
    isActiveRef.current = IsLocalActive
  }, [IsLocalActive])

  useEffect(() => {
    const buttonText = buttonTextRef.current
    const leftFrame = leftFrameRef.current
    const mainFrame = mainFrameRef.current
    const hoverArea = hoverAreaRef.current

    const triggerOnClick = () => {
      setIsLocalActive(true)
      setIsHovered(false)
      onClick(key)
    }

    if (buttonText && leftFrame && mainFrame && hoverArea) {
      buttonText.style.setProperty('--shadow-color', 'rgba(222, 84, 86, 0.2)')
      hoverArea.addEventListener('mouseenter', () => {
        setIsHovered(true)
        gsap.to(buttonText, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(buttonText, { color: TEAL, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(leftFrame, { x: '+5', duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(mainFrame, { x: '+10', duration: UI_DURATION_TIME, ease: 'power1.out' })
      })

      hoverArea.addEventListener('mouseleave', () => {
        setIsHovered(false)
        if (!isActiveRef.current) {
          gsap.to(buttonText, { color: RED, duration: UI_DURATION_TIME, ease: 'power1.out' }),
            gsap.to(buttonText, { css: { '--shadow-color': 'rgba(222, 84, 86, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' }),
            gsap.to(leftFrame, { x: '0', duration: UI_DURATION_TIME, ease: 'power1.out' })
          gsap.to(mainFrame, { x: '-2', duration: UI_DURATION_TIME, ease: 'power1.out' })
        }
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

      if (IsLocalActive) {
        console.log('triggered isActiveRef.current', isActiveRef.current)
        gsap.to(buttonText, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(buttonText, { color: TEAL, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(leftFrame, { x: '+13', duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(mainFrame, { x: '-2', duration: UI_DURATION_TIME, ease: 'power1.out' })
      }
    }
  }, [IsLocalActive, isActive, isHovered, key, onClick])

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
          <div
            className={`top-2 relative ${isHovered || isActive ? 'text-teal-blur' : 'text-red-blur'}`}
            style={{
              textShadow: '4px 0px 0px var(--shadow-color), 8px 0px 0px var(--shadow-color)'
            }}
          >
            {isActive || isHovered ? hoverLabel : label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonMainMenu
