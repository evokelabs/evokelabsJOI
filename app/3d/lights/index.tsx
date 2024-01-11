import React from 'react'
import PointLight from './PointLight'
import DirectionLight from './DirectionLight'

export const Lights = () => {
  return (
    <>
      <DirectionLight />
      <PointLight />
      <PointLight positionOffset={[2.88, 0, 0]} />
      <ambientLight intensity={0.5} color={'#005068'} />
    </>
  )
}
