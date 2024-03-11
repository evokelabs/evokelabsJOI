import { useEffect, useState } from 'react'
import ParagraphHighlight from '../ui/ParagraphHighlight'
import { RED } from './UIConstants'

interface Quote {
  quote: string
  source: string
}

interface TypingAnimationProps {
  quotes: Quote[]
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ quotes }) => {
  const TIMER = 5000
  const TYPE_DELAY = 10

  // Function to shuffle an array
  const shuffleArray = (array: Quote[]): Quote[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  // Shuffle the quotes array
  const shuffledQuotes = shuffleArray(quotes)

  // Initialize currentQuote with the first quote from the quotes array
  const [index, setIndex] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(shuffledQuotes[0] || { quote: '', source: '' })
  const [typing, setTyping] = useState({ quote: '', source: '' })

  useEffect(() => {
    // Update the current quote and its index every TIMER milliseconds
    const interval = setInterval(() => {
      if (shuffledQuotes.length > 0) {
        setCurrentQuote(shuffledQuotes[index])
        setIndex((index + 1) % shuffledQuotes.length)
      }
    }, TIMER)

    return () => clearInterval(interval)
  }, [index, shuffledQuotes])

  useEffect(() => {
    // Reset the typing state when the current quote changes
    setTyping({ quote: '', source: '' })

    // Type the current quote and its source character by character
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < currentQuote.quote.length) {
        setTyping(typing => ({ ...typing, quote: typing.quote + currentQuote.quote[i - 1] }))
      } else if (i - currentQuote.quote.length < currentQuote.source.length) {
        setTyping(typing => ({ ...typing, source: typing.source + currentQuote.source[i - currentQuote.quote.length - 1] }))
      } else {
        clearInterval(typingInterval)
      }
      i++
    }, TYPE_DELAY)

    return () => clearInterval(typingInterval)
  }, [currentQuote])

  return (
    <div className='my-6 space-y-1 pr-2'>
      <ParagraphHighlight BGColor={RED} fontSize='lg' paragraph={typing.quote} />
      {typing.source ? <ParagraphHighlight BGColor={RED} fontSize='lg' paragraph={typing.source} /> : null}
    </div>
  )
}

export default TypingAnimation
