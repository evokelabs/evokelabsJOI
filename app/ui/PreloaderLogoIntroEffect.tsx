import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ElabsStroke from './svg/ElabsStroke'
import ElabsFill from './svg/ElabsFill'

const PreloaderLogoIntroEffect = ({ isPreLoaderFinished }: { isPreLoaderFinished: boolean }) => {
  const elabsFillRef = useRef(null)
  const elabsStrokeRef = useRef(null)

  useEffect(() => {
    if (isPreLoaderFinished && elabsFillRef.current && elabsStrokeRef.current) {
      gsap.fromTo(elabsFillRef.current, { opacity: 1 }, { opacity: 0, duration: 2.5, delay: 1 })

      const tl = gsap.timeline()
      tl.fromTo(elabsStrokeRef.current, { opacity: 0 }, { opacity: 1, duration: 2.5 }).to(elabsStrokeRef.current, {
        opacity: 0,
        duration: 2.5
      })
    }
  }, [isPreLoaderFinished])

  if (!isPreLoaderFinished) {
    return null
  }

  return (
    <>
      <div
        ref={elabsFillRef}
        className='absolute top-0 scale-[60%] sm:scale-[70%] md:scale-100 md:left-0 w-full h-full flex justify-center items-center pointer-events-none '
        style={{ opacity: 1 }}
      >
        <ElabsFill />
      </div>
      <div
        ref={elabsStrokeRef}
        className='absolute top-0 scale-[60%] sm:scale-[70%] md:scale-100 md:left-0 w-full h-full justify-center items-center pointer-events-none flex '
      >
        <ElabsStroke />
      </div>
    </>
  )
}

export default PreloaderLogoIntroEffect
