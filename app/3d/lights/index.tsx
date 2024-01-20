import PointLight from './PointLight'
import DirectionLight from './DirectionLight'
import AmbientLight from './AmbientLight'

export const Lights = () => {
  return (
    <>
      <DirectionLight />
      <PointLight />
      <PointLight positionOffset={[2.88, 0, 0]} />
      <AmbientLight />
    </>
  )
}
