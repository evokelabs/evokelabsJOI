import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import home from './data/home.json'
import homeExpanded from './data/homeExpanded.json'
import { TypeAnimation } from 'react-type-animation'
import { BLUE_DARK, RED, RED_DULL } from '../libs/UIConstants'
import RedCRTBlur from '../ui/libs/RedCRTBlur'

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

// Helper function to shuffle an array
const shuffle = (array: string[]) => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const Home = () => {
  const TIMER = 3500

  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  // Shuffle the arrays from homeExpanded.json and home.json
  const shuffledSolo = shuffle(homeExpanded.solo)
  const shuffledPower = shuffle(homeExpanded.power)
  const shuffledDescribe = shuffle(homeExpanded.describe)
  const shuffledPhrases = shuffle(home.phrases)

  // Create state variables for each field and their indices
  const [solo, setSolo] = useState(shuffledSolo[0])
  const [power, setPower] = useState(shuffledPower[0])
  const [describe, setDescribe] = useState(shuffledDescribe[0])
  const [phrase, setPhrase] = useState(shuffledPhrases[0])
  const [index, setIndex] = useState(0)

  const divRef = useRef<HTMLDivElement | null>(null)
  const hoverColor = !isActive && isHovered ? 'text-black-blur' : 'text-red-blur'
  const hoverBGColor = isHovered ? 'bg-grid-brightRed' : 'bg-grid-blue'
  const bottomBarBGColor = !isActive && isHovered ? 'bg-grid-brightRed' : 'bg-grid-blue'

  useEffect(() => {
    if (divRef.current) {
      gsap.to(divRef.current, {
        height: isActive ? 'auto' : '0px',
        duration: 0.25,
        ease: 'Power1.out'
      })
    }

    const interval = setInterval(() => {
      if (isActive) {
        setSolo(shuffledSolo[index % shuffledSolo.length])
        setPower(shuffledPower[index % shuffledPower.length])
        setDescribe(shuffledDescribe[index % shuffledDescribe.length])
      } else {
        setPhrase(shuffledPhrases[index % shuffledPhrases.length])
      }
      setIndex(index => (index + 1) % Math.max(shuffledSolo.length, shuffledPower.length, shuffledDescribe.length, shuffledPhrases.length))
    }, TIMER)

    return () => clearInterval(interval)
  }, [isActive, index, shuffledSolo, shuffledPower, shuffledDescribe, shuffledPhrases])

  // Shuffle the phrases array

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isActive) {
        setPhrase(shuffledPhrases[index])
        setIndex((index + 1) % shuffledPhrases.length) // Loop back to the start of the array when we reach the end
      }
    }, TIMER)

    return () => clearInterval(interval)
  }, [index, shuffledPhrases, isActive])

  const [currentPhrase, setCurrentPhrase] = useState('')

  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setCurrentPhrase(shuffledPhrases[i])
      i = (i + 1) % shuffledPhrases.length
    }, TIMER)

    return () => clearInterval(intervalId)
  }, [shuffledPhrases])

  return (
    <div
      className={`mb-4 mx-3.5 mr-2 group ${!isActive ? 'cursor-zoom-in' : 'cursor-zoom-out'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseUp={() => setIsActive(!isActive)}
    >
      <div
        className={`pt-6 px-5  border-2 border-red border-opacity-60 border-b-0 shadow-red-blur transition-colors duration-150 ${hoverBGColor} ${
          isActive && !isHovered ? 'bg-red' : 'bg-grid-blue'
        } ${!isActive ? 'pb-0' : 'pb-4'}
        }`}
      >
        <h1
          className={`font-rajdhani font-bold text-red-blur text-[100px]  leading-[0.75em] transition-colors duration-150 ${hoverColor} ${
            isActive ? 'text-black-blur' : null
          }`}
        >
          EVOKE LABS DOES DIGITAL
        </h1>
        <h1
          className={`font-rajdhani font-bold text-teal-blur text-[100px] leading-[0.75em] transition-colors duration-150 uppercase ${hoverColor} ${
            isActive ? 'text-black-blur' : null
          }`}
        >
          <TypeAnimation
            sequence={[...shuffledPhrases.map((phrase, index) => [phrase, index !== shuffledPhrases.length - 1 ? TIMER : 0])].flat()}
            wrapper='span'
            speed={25}
            repeat={Infinity}
            deletionSpeed={65}
            preRenderFirstString={true}
            cursor={false}
            className={'type'}
          />
        </h1>
      </div>

      <div
        ref={divRef}
        className='px-5 bg-grid-blue border-x-2 border-red border-opacity-60 border-b-0 shadow-red-blur overflow-hidden h-0 text-[2.2rem] '
      >
        <div className='flex flex-col justify-between min-h-[280px]'>
          <p className='mt-6 mb-4 text-teal-blur font-semibold leading-tight '>
            Evoke labs is home to Adrian Pikios, <span className='text-red-blur bg-grid-red px-2 '>{solo}</span> who uses the powers of{' '}
            <span className='text-red-blur bg-grid-red px-2 '>{power}</span> to design, develop & create{' '}
            <span className='text-red-blur bg-grid-red px-2 '>{describe}</span> digital experiences.
          </p>
          <p className='mb-5 text-teal-blur font-semibold leading-tight'>
            When not working on personal projects, I partner with clients, brands and agencies to help produce their digital campaigns.
          </p>
        </div>
      </div>

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
