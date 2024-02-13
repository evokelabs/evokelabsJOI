import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import LeftFrame from './ButtonMainMenu/LeftFrame'
import MidFrame from './ButtonMainMenu/MidFrame'
import IconSmall from './IconSmall'

const ButtonMainMenu = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const corpoGuideRef = useRef<HTMLDivElement>(null)
  const leftFrameRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const corpoGuide = corpoGuideRef.current
    const leftFrame = leftFrameRef.current
    const mainFrame = mainFrameRef.current

    if (corpoGuide && leftFrame && mainFrame) {
      corpoGuide.style.setProperty('--shadow-color', 'rgba(222, 84, 86, 0.2)')
      corpoGuide.addEventListener('mouseenter', () => {
        setIsHovered(true)
        gsap.to(corpoGuide, { css: { '--shadow-color': 'rgba(83, 246, 255, 0.2)' }, duration: 0.225, ease: 'power1.out' })
        gsap.to(corpoGuide, { color: '#53F6FF', duration: 0.225, ease: 'power1.out' })
        gsap.to(leftFrame, { x: '+5', duration: 0.225, ease: 'power1.out' })
        gsap.to(mainFrame, { x: '+14', duration: 0.225, ease: 'power1.out' })
      })

      corpoGuide.addEventListener('mouseleave', () => {
        setIsHovered(false)
        gsap.to(corpoGuide, { color: '#F75049', duration: 0.225, ease: 'power1.out' }),
          gsap.to(corpoGuide, { css: { '--shadow-color': 'rgba(222, 84, 86, 0.2)' }, duration: 0.225, ease: 'power1.out' }),
          gsap.to(leftFrame, { x: '0', duration: 0.225, ease: 'power1.out' })
        gsap.to(mainFrame, { x: '0', duration: 0.225, ease: 'power1.out' })
      })

      corpoGuide.addEventListener('mousedown', () => {
        setIsMouseDown(true)
      })

      corpoGuide.addEventListener('mouseup', () => {
        setIsMouseDown(false)
      })

      corpoGuide.addEventListener('click', () => {
        setIsActive(!isActive)
      })
    }
  }, [])

  return (
    <div className='relative' ref={mainFrameRef}>
      <div className='flex items-center flex-row'>
        <div ref={leftFrameRef} className='z-1'>
          <LeftFrame />
        </div>
        <div className='z-0'>
          <MidFrame isHovered={isHovered} isActive={isActive} isMouseDown={isMouseDown} />
        </div>
      </div>
      <div
        className='absolute flex items-center flex-row top-3.5 font-orbitron place-content-between w-full pl-5 pr-7 cursor-pointer'
        ref={corpoGuideRef}
      >
        <IconSmall />
        <div className='top-1.5 relative' style={{ textShadow: '4px 0px 0px var(--shadow-color), 8px 0px 0px var(--shadow-color)' }}>
          CORPO GUIDE
        </div>
      </div>
    </div>
  )
}

export default ButtonMainMenu
