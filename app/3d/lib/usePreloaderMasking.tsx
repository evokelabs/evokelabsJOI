import { useEffect } from 'react'
import gsap from 'gsap'

export const usePreloaderMasking = (isPreLoaderFinished: unknown, currentRouteSelection: unknown) => {
  useEffect(() => {
    console.log('currentRouteSelection', currentRouteSelection)
    if (isPreLoaderFinished && currentRouteSelection === null) {
      const maskAnimation = gsap.fromTo(
        '.masked-element',
        {
          webkitMaskSize: '686px 735px',
          maskSize: '686px 735px',
          webkitMaskPosition: '50% 40%', // center the mask
          maskPosition: '50% 40%' // center the mask
        },
        {
          duration: 5, // adjust duration as needed
          webkitMaskSize: '1100% 1100%',
          maskSize: '1100% 1100%',
          ease: 'linear',
          yoyo: true,
          tween: 'circ.in',
          delay: 4.4
        }
      )

      // Remove the mask after 8 seconds or if currentRouteSelection changes
      const timeoutId = setTimeout(() => {
        const element = document.querySelector('.masked-element')
        if (element) {
          element.classList.add('unmasked')
        }
      }, 9000)

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
}
