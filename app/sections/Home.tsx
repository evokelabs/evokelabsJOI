import React, { useEffect, useRef, useState } from 'react'
import { BLUE_DARK, RED, RED_DULL } from '../libs/UIConstants'
import RedCRTBlur from '../ui/libs/RedCRTBlur'
import gsap from 'gsap'

const BottomRightCornerSVG = ({ color, tile }: { color: string; tile: string }) => {
  return (
    <svg width='22' height='14' viewBox='0 0 22 14' fill='none'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M14 0H0V14H0.828125L14 0.828125V0Z' fill={color} />
        <path d='M14 0H0V14H0.828125L14 0.828125V0Z' fill={`url(#${tile})`} />
        <path d='M14 0.82843L0.828369 14H-4.04688V12H0L12 0H14V0.82843Z' fill={RED} fillOpacity={0.6} />
      </g>
    </svg>
  )
}

const ExpandedPanel = () => {
  const divRef = useRef(null)

  useEffect(() => {
    gsap.from(divRef.current, {
      height: 0,
      onComplete: () => {
        gsap.set(divRef.current, { height: 'auto' })
      },
      duration: 0.25
    })
  }, [])

  return (
    <div
      ref={divRef}
      className='p-5 pb-2 bg-grid-blue border-2 border-red border-opacity-60 border-b-0 shadow-red-blur h-auto overflow-hidden'
    >
      <p className='mt-5 mb-10 text-teal-blur'>
        Evoke labs is home to Adrian Pikios, <span className='text-red-blur'>an animator</span> who uses the powers of{' '}
        <span className='text-red-blur'>JSX</span> to design, develop & create <span className='text-red-blur'>cheesy</span> digital
        experiences.
      </p>
      <p className='mb-5 text-teal-blur'>
        When not working on personal projects, I partner with clients, brands and agencies to help produce their digital campaigns.
      </p>
    </div>
  )
}

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const hoverColor = isHovered ? 'text-black-blur' : 'text-red-blur'
  const hoverBGColor = isHovered ? 'bg-grid-brightRed' : 'bg-grid-blue'
  const bottomBarBGColor = !isActive && isHovered ? 'bg-grid-brightRed' : 'bg-grid-blue'

  return (
    <div
      className={`mb-4 mx-3.5 mr-2 cursor-pointer group`}
      onMouseEnter={() => !isActive && setIsHovered(true)}
      onMouseLeave={() => !isActive && setIsHovered(false)}
      onMouseUp={() => setIsActive(!isActive)}
    >
      <div
        className={`pt-6 p-4 pb-3 border-2 border-red border-opacity-60 border-b-0 shadow-red-blur transition-colors duration-150 ${hoverBGColor} ${
          isActive ? 'bg-red' : 'bg-grid-blue'
        }`}
      >
        <h1
          className={`font-rajdhani font-bold text-red-blur text-[100px] leading-[0.6] pt-2.5 transition-colors duration-150 ${hoverColor}`}
        >
          EVOKE LABS DOES DIGITAL
        </h1>
        <h1
          className={`font-rajdhani font-bold text-teal-blur text-[100px] leading-[0.6] pt-2.5 mt-2 transition-colors duration-150 ${hoverColor}`}
        >
          LIKE JEDI USE THE FORCE.
        </h1>
      </div>
      {isActive ? <ExpandedPanel /> : null}
      <div className='flex flex-row w-full h-3.5 relative '>
        <div
          className={`bg-grid-blue w-full border-red border-b-2 border-l-2 border-opacity-60 mr-3 transition-colors duration-150 ${bottomBarBGColor}`}
        ></div>
        <div className='ml-auto h-fit absolute -right-[8px]'>
          {!isActive && isHovered ? (
            <BottomRightCornerSVG color={RED_DULL} tile='redTile' />
          ) : (
            <BottomRightCornerSVG color={BLUE_DARK} tile='blueTile' />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
