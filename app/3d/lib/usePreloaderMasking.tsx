import { useEffect, Dispatch, SetStateAction } from 'react'
import gsap from 'gsap'

const MASK_REMOVAL_DELAY = 9000

export const usePreloaderMasking = (
  isPreLoaderFinished: unknown,
  currentRouteSelection: unknown,
  setMaskRemoved: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    if (isPreLoaderFinished && currentRouteSelection === null) {
      // Determine the starting scale and ending scale based on the viewport width
      let startingScale = '686px 735px' // default scale
      let endingScale = '2500% 2500%' // default ending scale
      const viewportWidth = window.innerWidth
      if (viewportWidth <= 640) {
        // scale-60
        startingScale = '50% 50%'
        endingScale = '2500% 2500%' // adjust as needed
      } else if (viewportWidth <= 768) {
        // sm:scale-70
        startingScale = '100% 100%'
        endingScale = '2500% 2500%' // adjust as needed
      } else if (viewportWidth >= 768) {
        // md:scale-100
        startingScale = '735px 919px'
        endingScale = '2400% 2400%' // adjust as needed
      }

      const maskAnimation = gsap.fromTo(
        '.masked-element',
        {
          webkitMaskSize: startingScale,
          maskSize: startingScale,
          webkitMaskPosition: '50% 50%',
          maskPosition: '50% 50%'
        },
        {
          duration: 4, // adjust duration as needed
          webkitMaskSize: endingScale, // use endingScale
          ease: 'circ.in',
          delay: 4.5
        }
      )

      // Remove the mask after MASK_REMOVAL_DELAY seconds or if currentRouteSelection changes
      const timeoutId = setTimeout(() => {
        const element = document.querySelector('.masked-element')
        if (element) {
          element.classList.add('unmasked')
        }
        setMaskRemoved(true)
      }, MASK_REMOVAL_DELAY)

      return () => {
        // If the component unmounts or currentRouteSelection changes, remove the mask and stop the animation
        clearTimeout(timeoutId)
        maskAnimation.kill()
        const element = document.querySelector('.masked-element')
        if (element) {
          element.classList.add('unmasked')
        }
      }
    }
  }, [isPreLoaderFinished, currentRouteSelection])

  useEffect(() => {
    if (currentRouteSelection !== null) {
      const element = document.querySelector('.masked-element')
      if (element) {
        element.classList.add('unmasked')
      }
    }
  }, [currentRouteSelection])

  return null
}
