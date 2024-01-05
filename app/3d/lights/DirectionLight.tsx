import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'

const BASE_POSITION: [number, number, number] = [11, 6, 15]
const LIGHT_COLOR = '#003C67'
const LIGHT_INTENSITY = 150
const SHADOW_NORMAL_BIAS = 0.04

const DirectionLight = () => {
  const lightRef = useRef<any>(null)
  const { scene } = useThree()

  useEffect(() => {
    if (lightRef.current) {
      const targetObject = new THREE.Object3D()
      targetObject.position.set(0, 0.8, 2)
      scene.add(targetObject)
      lightRef.current.target = targetObject
    }
  }, [scene])

  const position: [number, number, number] = [BASE_POSITION[0], BASE_POSITION[1], BASE_POSITION[2]]

  return (
    <directionalLight
      ref={lightRef}
      color={LIGHT_COLOR}
      position={position}
      intensity={LIGHT_INTENSITY}
      castShadow
      shadow-normalBias={SHADOW_NORMAL_BIAS}
    />
  )
}

export default DirectionLight
