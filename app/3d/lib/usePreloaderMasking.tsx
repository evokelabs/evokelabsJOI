import { useState, useEffect } from 'react'
import gsap from 'gsap'

export const usePreloaderMasking = (isPreLoaderFinished: boolean, currentRouteSelection: string | null | number) => {
  const [showRainOverlay, setShowRainOverlay] = useState(true)

  useEffect(() => {
    console.log('currentRouteSelection', currentRouteSelection)
    let timeoutId: NodeJS.Timeout | undefined
    let maskAnimation: gsap.core.Tween | undefined
    if (isPreLoaderFinished && currentRouteSelection === null) {
      maskAnimation = gsap.fromTo(
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

      // Remove the mask and RainOverlay after 9 seconds or if currentRouteSelection changes
      timeoutId = setTimeout(() => {
        const element = document.querySelector('.masked-element')
        if (element) {
          element.classList.add('unmasked')
        }
        setShowRainOverlay(false)
      }, 9000)
    }

    return () => {
      // If the component unmounts or currentRouteSelection changes, remove the mask and RainOverlay and stop the animation
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (maskAnimation) {
        maskAnimation.kill()
      }
      const element = document.querySelector('.masked-element')
      if (element) {
        element.classList.add('unmasked')
      }
      setShowRainOverlay(false)
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

  return showRainOverlay
}
