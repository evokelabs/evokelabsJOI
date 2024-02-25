import { useState, useEffect, FC } from 'react'

interface TypewriterProps {
  text: string
  delay?: number
  infinite?: boolean
}

const Typewriter: FC<TypewriterProps> = ({ text, delay = 85, infinite = false }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)
    } else if (infinite) {
      setCurrentIndex(0)
      setCurrentText('')
    }

    return () => timeout && clearTimeout(timeout)
  }, [currentIndex, delay, infinite, text])

  return <span>{currentText}</span>
}

export default Typewriter
