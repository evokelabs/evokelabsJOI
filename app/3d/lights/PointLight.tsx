const BASE_POSITION: [number, number, number] = [-1.9, 2.45, 1.1]
const LIGHT_COLOR = '#FFB31F'
const LIGHT_INTENSITY = 6.5
const SHADOW_NORMAL_BIAS = 0.04
const DECAY = 2.75

type PointLightProps = {
  positionOffset?: [number, number, number]
}

const PointLight: React.FC<PointLightProps> = ({ positionOffset = [0, 0, 0] }) => {
  const position: [number, number, number] = [
    BASE_POSITION[0] + positionOffset[0],
    BASE_POSITION[1] + positionOffset[1],
    BASE_POSITION[2] + positionOffset[2]
  ]

  return (
    <pointLight
      color={LIGHT_COLOR}
      position={position}
      intensity={LIGHT_INTENSITY}
      castShadow
      shadow-normalBias={SHADOW_NORMAL_BIAS}
      decay={DECAY}
    />
  )
}

export default PointLight
