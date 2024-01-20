import React from 'react'

const BASE_POSITION: [number, number, number] = [-0.6, 2.5, 0.7]
const LIGHT_COLOR = '#FFA775'

const SHADOW_NORMAL_BIAS = 0.04
const DECAY = 4.85

type PointLightProps = {
  positionOffset?: [number, number, number]
}

const PointLight = React.forwardRef<THREE.PointLight, PointLightProps>(({ positionOffset = [0, 0, 0] }, ref) => {
  const position: [number, number, number] = [
    BASE_POSITION[0] + positionOffset[0],
    BASE_POSITION[1] + positionOffset[1],
    BASE_POSITION[2] + positionOffset[2]
  ]

  return (
    <pointLight
      ref={ref}
      color={LIGHT_COLOR}
      position={position}
      intensity={0}
      castShadow
      shadow-normalBias={SHADOW_NORMAL_BIAS}
      decay={DECAY}
    />
  )
})

PointLight.displayName = 'PointLight'

export default PointLight
