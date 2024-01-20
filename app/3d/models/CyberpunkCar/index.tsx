import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Object3D, Object3DEventMap } from 'three'
import { useDracoLoader } from '@/app/libs/useDracoLoader'

import CyberpunkCarAnimation from './controllers/CyberpunkCarAnimation'
import CyberpunkCarSoundControl from './controllers/CyberpunkCarSoundControl'

import { CAR_OFFSET_X, CAR_OFFSET_Y, CAR_OFFSET_Z } from './constants'

export type CyberpunkRefType = {
  carRef: MutableRefObject<THREE.Mesh | THREE.Object3D | null>
}

const CyberpunkCar = () => {
  const { scene } = useThree()
  const carRef = useRef<Object3D | null>(null)
  const [isCarLoaded, setCarLoaded] = useState(false)
  const gltfRef = useRef<{ scene: Object3D<Object3DEventMap> } | null>(null)

  const gltfLoader = useRef(useDracoLoader()).current

  const handleModelLoad = useCallback(
    (gltf: { scene: Object3D<Object3DEventMap> }) => {
      const car = gltf.scene.children[0] as Object3D
      gltfRef.current = gltf
      if (carRef.current && scene.children.includes(carRef.current)) {
        return // If the car model already exists in the scene, do not execute the rest of the code
      }
      carRef.current = car
      car.castShadow = true
      car.position.set(CAR_OFFSET_X, CAR_OFFSET_Y[0], CAR_OFFSET_Z[0])
      scene.add(car)
      setCarLoaded(true) // Set isCarLoaded to true when the model finishes loading
    },
    [scene, carRef, setCarLoaded]
  )

  const loadModel = useCallback(() => {
    gltfLoader.load('/glb/CyberpunkCar.glb', handleModelLoad, undefined, handleModelError)
  }, [gltfLoader, handleModelLoad])

  const handleModelError = (error: unknown) => {
    console.error('An error occurred while loading the model:', error)
  }

  useEffect(() => {
    loadModel()

    return () => {
      if (gltfRef.current?.scene) {
        scene.remove(gltfRef.current.scene)
      }
    }
  }, [scene, loadModel])

  return (
    <>
      {isCarLoaded && <CyberpunkCarAnimation carRef={carRef} />}
      {isCarLoaded && <CyberpunkCarSoundControl carRef={carRef} />}
    </>
  )
}

export default CyberpunkCar
