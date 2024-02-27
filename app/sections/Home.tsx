import React, { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import home from './data/home.json'
import homeExpanded from './data/homeExpanded.json'
import { BLUE_DARK, RED, RED_DULL } from '../libs/UIConstants'
import RedCRTBlur from '../ui/libs/RedCRTBlur'
import TypeOnSoundControl from '../audio/ui/TypeOnSoundControl'
import ScrabbleOnSoundControl from '../audio/ui/ScrabbleSoundControl'

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
  const TIMER = 5000
  const TYPE_ON_SPEED = 70
  const TYPE_OFF_SPEED = 35

  const SCRAMBLED_REVEAL_SPEED = 80

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

  const [isTypingSound, setIsTypingSound] = useState(false)
  const [isScrabbleSound, setIsScrabbleSound] = useState(false)

  const handleEndSound = useCallback(() => {
    setIsTypingSound(false)
  }, [])

  useEffect(() => {
    if (divRef.current) {
      gsap.to(divRef.current, {
        height: isActive ? 'auto' : '0px',
        duration: 0.25,
        ease: 'Power1.out'
      })
    }

    const interval = setInterval(() => {
      const newIndex = (index + 1) % Math.max(shuffledSolo.length, shuffledPower.length, shuffledDescribe.length, shuffledPhrases.length)
      setIndex(newIndex)
      if (isActive) {
        setSolo(shuffledSolo[newIndex % shuffledSolo.length])
        setPower(shuffledPower[newIndex % shuffledPower.length])
        setDescribe(shuffledDescribe[newIndex % shuffledDescribe.length])
      } else {
        setPhrase(shuffledPhrases[newIndex % shuffledPhrases.length])
      }
    }, TIMER)

    return () => clearInterval(interval)
  }, [isActive, shuffledSolo, shuffledPower, shuffledDescribe, shuffledPhrases, index])

  //Main Home page panel text

  const [animatedPhrase, setAnimatedPhrase] = useState(phrase)
  const prevPhraseRef = useRef(phrase)

  useEffect(() => {
    const animatePhrase = async () => {
      let currentPhrase = animatedPhrase

      // Find the index of "like" in the currentPhrase
      const likeIndex = currentPhrase.indexOf('like ')

      // Set the minimum length to keep (e.g., 4 characters)
      const minLength = 5

      // Calculate the final index considering "like" and the minimum length
      const finalIndex =
        likeIndex !== -1 ? Math.min(likeIndex + minLength, currentPhrase.length) : Math.max(minLength, currentPhrase.length)

      // Deletion animation
      while (currentPhrase.length > finalIndex) {
        await new Promise(resolve => setTimeout(resolve, TYPE_OFF_SPEED))
        currentPhrase = currentPhrase.slice(0, -1)
        setAnimatedPhrase(currentPhrase)
      }
      setIsTypingSound(true)

      // Typing animation
      for (let i = finalIndex; i < phrase.length; i++) {
        await new Promise(resolve => setTimeout(resolve, TYPE_ON_SPEED))
        currentPhrase += phrase[i]
        setAnimatedPhrase(currentPhrase)
      }

      // Set isTyping to true at the beginning typing animation
      setIsTypingSound(false)
    }

    if (prevPhraseRef.current !== phrase) {
      animatePhrase()
    }

    // Update the ref to the current phrase after animating
    prevPhraseRef.current = phrase
  }, [phrase, animatedPhrase, TYPE_ON_SPEED])

  const [scrambledSolo, setScrambledSolo] = useState(solo)
  const [scrambledPower, setScrambledPower] = useState(power)
  const [scrambledDescribe, setScrambledDescribe] = useState(describe)

  const scrambleText = (text: string | any[]) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let scrambled = ''
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        scrambled += ' '
      } else {
        scrambled += characters.charAt(Math.floor(Math.random() * characters.length))
      }
    }
    return scrambled
  }

  const isActiveRef = useRef(isActive)

  // First useEffect for active state
  useEffect(() => {
    const scramble = async (text: string, setScrambled: (value: string) => void) => {
      let scrambled = scrambleText(text)
      setScrambled(scrambled)
      if (isActive) {
        setIsScrabbleSound(true)
      }

      for (let i = 0; i < text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, SCRAMBLED_REVEAL_SPEED))
        scrambled = scrambled.slice(0, i) + text[i] + scrambled.slice(i + 1)
        setScrambled(scrambled)
      }
    }

    const updateValues = async () => {
      const newIndex = (index + 1) % Math.max(shuffledSolo.length, shuffledPower.length, shuffledDescribe.length)
      setIndex(newIndex)
      setSolo(shuffledSolo[newIndex % shuffledSolo.length])
      setPower(shuffledPower[newIndex % shuffledPower.length])
      setDescribe(shuffledDescribe[newIndex % shuffledDescribe.length])

      // Call scramble for each new value
      await Promise.all([scramble(solo, setScrambledSolo), scramble(power, setScrambledPower), scramble(describe, setScrambledDescribe)])

      setIsScrabbleSound(false)
    }
    if (isActiveRef.current !== isActive) {
      isActiveRef.current = isActive
      if (isActive) {
        updateValues()
      }
    }

    const interval = setInterval(updateValues, TIMER)

    return () => clearInterval(interval)
  }, [isActive, shuffledSolo, shuffledPower, shuffledDescribe, index, solo, power, describe])

  // Phrase useEffect
  const shouldUpdate = useRef(false)
  const updatePhraseRef = useRef(() => {})

  // Phrase useEffect
  useEffect(() => {
    updatePhraseRef.current = () => {
      const newIndex = (index + 1) % shuffledPhrases.length
      setIndex(newIndex)
      setPhrase(shuffledPhrases[newIndex % shuffledPhrases.length])
    }

    const interval = setInterval(() => {
      if (isActive) {
        shouldUpdate.current = true
      } else if (shouldUpdate.current) {
        updatePhraseRef.current()
        shouldUpdate.current = false
      }
    }, TIMER)

    return () => clearInterval(interval)
  }, [isActive, shuffledPhrases, index, setIndex, setPhrase])

  // Separate useEffect to handle immediate update when isActive becomes false
  useEffect(() => {
    if (!isActive && shouldUpdate.current) {
      updatePhraseRef.current()
      shouldUpdate.current = false
    }
  }, [isActive, shouldUpdate, updatePhraseRef])

  return (
    <>
      <div
        className={`mb-4 mx-3.5 mr-2 group ${!isActive ? 'cursor-zoom-in' : 'cursor-zoom-out'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseUp={() => setIsActive(!isActive)}
      >
        <div
          className={`pt-6  px-5 border-2 border-red border-opacity-60 border-b-0 shadow-red-blur transition-colors duration-150 ${hoverBGColor} ${
            isActive && !isHovered ? 'bg-red' : 'bg-grid-blue'
          } ${!isActive ? 'pb-[2px]' : 'pb-4'}
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
            className={`font-rajdhani font-bold text-teal-blur text-[100px] leading-[0.75em] transition-colors duration-150 uppercase  ${hoverColor} ${
              isActive ? 'text-black-blur ' : 'type'
            }`}
          >
            {animatedPhrase}
          </h1>
        </div>

        <div
          ref={divRef}
          className='px-5 bg-grid-blue border-x-2 border-red border-opacity-60 border-b-0 shadow-red-blur overflow-hidden h-0 text-[2.2rem] '
        >
          <div className='flex flex-col justify-between min-h-[280px]  '>
            <p className='mt-6 mb-4 text-teal-blur font-semibold leading-tight '>
              Evoke labs is home to Adrian Pikios, <span className='text-red-blur bg-grid-red px-2 '>{scrambledSolo}</span> who uses the
              powers of <span className='text-red-blur bg-grid-red px-2 '>{scrambledPower}</span> to design, develop & create{' '}
              <span className='text-red-blur bg-grid-red px-2 '>{scrambledDescribe}</span> digital experiences.
            </p>
            <p className='mb-5 text-teal-blur font-semibold leading-tight'>
              When not working on personal projects, I partner with clients, brands and agencies to help produce their digital campaigns.
            </p>
          </div>
        </div>

        <div className='flex flex-row w-full h-3.5 relative '>
          <div
            className={`bg-grid-blue w-full border-red border-b-2 border-l-2 border-opacity-60 mr-3 transition-colors duration-150  ${bottomBarBGColor}`}
          ></div>
          <div className='ml-auto h-fit absolute -right-[8px] '>
            {!isActive && isHovered ? (
              <BottomRightCornerSVG color={RED_DULL} tile='redTile' />
            ) : (
              <BottomRightCornerSVG color={BLUE_DARK} tile='blueTile' />
            )}
          </div>
        </div>
      </div>

      <TypeOnSoundControl
        volume={0.45}
        delay={0.1}
        transitionDuration={10}
        loop={true}
        isTyping={isTypingSound}
        onEndSound={handleEndSound}
      />

      <ScrabbleOnSoundControl volume={0.45} delay={0.1} transitionDuration={10} loop={true} isScrabble={isScrabbleSound} />
    </>
  )
}

export default Home
