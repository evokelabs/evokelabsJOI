import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import LeftFrame from './LeftFrame'
import MidFrame from './MidFrame'
import { RED, TEAL, UI_DURATION_TIME } from '../../libs/UIConstants'
import IconSmallInteractive from '../IconSmall/IconSmallInteractive'

const ButtonMainMenu = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const buttonTextRef = useRef<HTMLDivElement>(null)
  const leftFrameRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)
  const hoverAreaRef = useRef<HTMLDivElement>(null)
  const isActiveRef = useRef(isActive)

  useEffect(() => {
    isActiveRef.current = isActive
  }, [isActive])

  useEffect(() => {
    const buttonText = buttonTextRef.current
    const leftFrame = leftFrameRef.current
    const mainFrame = mainFrameRef.current
    const hoverArea = hoverAreaRef.current

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
        gsap.to(buttonText, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(buttonText, { color: TEAL, duration: UI_DURATION_TIME, ease: 'power1.out' })
        setIsActive(!isActive)
        gsap.to(leftFrame, { x: '+13', duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(mainFrame, { x: '-2', duration: UI_DURATION_TIME, ease: 'power1.out' })
      })
    }
  }, [isActive])

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
            className='top-2 relative'
            style={{
              textShadow: '4px 0px 0px var(--shadow-color), 8px 0px 0px var(--shadow-color)'
            }}
          >
            CORPO GUIDE
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonMainMenu
