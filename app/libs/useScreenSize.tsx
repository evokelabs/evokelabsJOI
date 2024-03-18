import { useState, useEffect } from 'react'
import { LG_BREAKPOINT, MD_BREAKPOINT, SM_BREAKPOINT, XL_BREAKPOINT, _2XL_BREAKPOINT, _3XL_BREAKPOINT } from './breakPoints'

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('BASE')

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < SM_BREAKPOINT) {
        setScreenSize('BASE')
      } else if (window.innerWidth < MD_BREAKPOINT) {
        setScreenSize('SM')
      } else if (window.innerWidth < LG_BREAKPOINT) {
        setScreenSize('MD')
      } else if (window.innerWidth < XL_BREAKPOINT) {
        setScreenSize('LG')
      } else if (window.innerWidth < _2XL_BREAKPOINT) {
        setScreenSize('XL')
      } else if (window.innerWidth < _3XL_BREAKPOINT) {
        setScreenSize('2XL')
      } else {
        setScreenSize('3XL')
      }
    }

    window.addEventListener('resize', updateScreenSize)
    updateScreenSize()

    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenSize
}
