import { useState, useEffect } from 'react'
import gsap from 'gsap'

const MASK_REMOVAL_DELAY = 9000

export const usePreloaderMasking = (isPreLoaderFinished: unknown, currentRouteSelection: unknown) => {
  const [maskRemoved, setMaskRemoved] = useState(false)

  useEffect(() => {
    console.log('currentRouteSelection', currentRouteSelection)
    if (isPreLoaderFinished && currentRouteSelection === null) {
      // Determine the starting scale and ending scale based on the viewport width
      let startingScale = '686px 735px' // default scale
      let endingScale = '2500% 2500%' // default ending scale
      let startingPosition = '50% 45%' // default position
      const viewportWidth = window.innerWidth
      if (viewportWidth <= 640) {
        // scale-60
        startingScale = '60% 60%'
        endingScale = '2500% 2500%' // adjust as needed
        startingPosition = '50% 45%' // adjust for mobile
      } else if (viewportWidth <= 768) {
        // sm:scale-70
        startingScale = '70% 70%'
        endingScale = '2500% 2500%' // adjust as needed
        startingPosition = '50% 45%' // adjust for mobile
      } else if (viewportWidth >= 768) {
        // md:scale-100
        startingScale = '686px 735px'
        endingScale = '1200% 1200%' // adjust as needed
      }

      const maskAnimation = gsap.fromTo(
        '.masked-element',
        {
          webkitMaskSize: startingScale,
          maskSize: startingScale,
          webkitMaskPosition: startingPosition, // use startingPosition
          maskPosition: startingPosition // use startingPosition
        },
        {
          duration: 5, // adjust duration as needed
          webkitMaskSize: endingScale, // use endingScale
          maskSize: endingScale, // use endingScale
          ease: 'linear',
          yoyo: true,
          tween: 'circ.in',
          delay: 5
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

  return maskRemoved
}
