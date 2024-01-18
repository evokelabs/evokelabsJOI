import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import PointLight from './PointLight'
import DirectionLight from './DirectionLight'

export const Lights = () => {
  const ambientLightRef = useRef<THREE.AmbientLight>(null)

  useEffect(() => {
    if (ambientLightRef.current) {
      gsap.fromTo(ambientLightRef.current, { intensity: 0 }, { intensity: 1.5, duration: 4, delay: 4 })
    }
  }, [])

  return (
    <>
      <DirectionLight />
      <PointLight />
      <PointLight positionOffset={[2.88, 0, 0]} />
      <ambientLight ref={ambientLightRef} intensity={1.5} color={'#005068'} />
    </>
  )
}
