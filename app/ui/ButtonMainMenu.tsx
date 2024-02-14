import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import LeftFrame from './ButtonMainMenu/LeftFrame'
import MidFrame from './ButtonMainMenu/MidFrame'
import IconSmall from './IconSmall'
import { RED, TEAL, UI_DURATION_TIME } from '../libs/UIConstants'

const ButtonMainMenu = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const buttonTextRef = useRef<HTMLDivElement>(null)
  const leftFrameRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)
  const isActiveRef = useRef(isActive)

  useEffect(() => {
    isActiveRef.current = isActive
  }, [isActive])

  useEffect(() => {
    const buttonText = buttonTextRef.current
    const leftFrame = leftFrameRef.current
    const mainFrame = mainFrameRef.current

    if (buttonText && leftFrame && mainFrame) {
      buttonText.style.setProperty('--shadow-color', 'rgba(222, 84, 86, 0.2)')
      buttonText.addEventListener('mouseenter', () => {
        setIsHovered(true)
        gsap.to(buttonText, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(buttonText, { color: TEAL, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(leftFrame, { x: '+5', duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(mainFrame, { x: '+10', duration: UI_DURATION_TIME, ease: 'power1.out' })
      })

      buttonText.addEventListener('mouseleave', () => {
        setIsHovered(false)
        if (!isActiveRef.current) {
          gsap.to(buttonText, { color: RED, duration: UI_DURATION_TIME, ease: 'power1.out' }),
            gsap.to(buttonText, { css: { '--shadow-color': 'rgba(222, 84, 86, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' }),
            gsap.to(leftFrame, { x: '0', duration: UI_DURATION_TIME, ease: 'power1.out' })
          gsap.to(mainFrame, { x: '-2', duration: UI_DURATION_TIME, ease: 'power1.out' })
        }
      })

      buttonText.addEventListener('mousedown', () => {
        setIsMouseDown(true)
      })

      buttonText.addEventListener('mouseup', () => {
        setIsMouseDown(false)
      })

      buttonText.addEventListener('click', () => {
        gsap.to(buttonText, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(buttonText, { color: TEAL, duration: UI_DURATION_TIME, ease: 'power1.out' })
        setIsActive(!isActive)
        gsap.to(leftFrame, { x: '+13', duration: UI_DURATION_TIME, ease: 'power1.out' })
        gsap.to(mainFrame, { x: '-2', duration: UI_DURATION_TIME, ease: 'power1.out' })
      })
    }
  }, [isActive])

  return (
    <div className='relative' ref={mainFrameRef}>
      <div className='flex items-center flex-row'>
        <div ref={leftFrameRef} className='z-1'>
          <LeftFrame isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
        </div>
        <div className='z-0'>
          <MidFrame isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
        </div>
      </div>
      <div
        className='absolute flex items-center flex-row top-3.5 font-orbitron place-content-between w-full pl-5 pr-7 cursor-pointer'
        ref={buttonTextRef}
        style={{ pointerEvents: isActive ? 'none' : 'all' }}
      >
        <IconSmall isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
        <div
          className='top-1.5 relative'
          style={{
            textShadow: '4px 0px 0px var(--shadow-color), 8px 0px 0px var(--shadow-color)'
          }}
        >
          CORPO GUIDE
        </div>
      </div>
    </div>
  )
}

export default ButtonMainMenu
