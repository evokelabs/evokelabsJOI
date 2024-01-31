import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'

const BASE_POSITION: [number, number, number] = [3, 1.5, 7]
const LIGHT_COLOR = '#003C67'
const LIGHT_INTENSITY = 300
const SHADOW_NORMAL_BIAS = 0.04

const DirectionLight = () => {
  const lightRef = useRef<any>(null)
  const { scene } = useThree()

  useEffect(() => {
    if (lightRef.current) {
      // Create a target object for the light and add it to the scene
      const targetObject = new THREE.Object3D()
      targetObject.position.set(-1.5, 0.8, 1)
      scene.add(targetObject)

      // Set the target of the light to the target object
      lightRef.current.target = targetObject

      // Add a helper for the light
      // const lightHelper = new THREE.DirectionalLightHelper(lightRef.current, 1)
      // scene.add(lightHelper)

      // Add a helper for the target object
      // const targetHelper = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 0), targetObject.position, 1, 0xff0000)
      // scene.add(targetHelper)
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
      shadow-mapSize-width={2048} // Increase shadow map width
      shadow-mapSize-height={2048} // Increase shadow map height
      shadow-bias={-0.00002} // Adjust shadow bias
    />
  )
}

export default DirectionLight
