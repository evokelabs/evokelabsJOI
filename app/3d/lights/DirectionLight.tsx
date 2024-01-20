import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'

const BASE_POSITION: [number, number, number] = [11, 6, 15]
const LIGHT_COLOR = '#003C67'
const LIGHT_INTENSITY = 500
const SHADOW_NORMAL_BIAS = 0.04

const DirectionLight = () => {
  const lightRef = useRef<any>(null)
  const { scene } = useThree()

  useEffect(() => {
    if (lightRef.current) {
      // Create a target object for the light and add it to the scene
      const targetObject = new THREE.Object3D()
      targetObject.position.set(0, 0.8, 2)
      scene.add(targetObject)

      // Set the target of the light to the target object
      lightRef.current.target = targetObject
    }
  }, [scene])

  return (
    <directionalLight
      ref={lightRef}
      color={LIGHT_COLOR}
      position={BASE_POSITION}
      intensity={LIGHT_INTENSITY}
      castShadow
      shadow-normalBias={SHADOW_NORMAL_BIAS}
    />
  )
}

export default DirectionLight
