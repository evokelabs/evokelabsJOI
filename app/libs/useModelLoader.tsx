import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { useDracoLoader } from './useDracoLoader'
import { Scene } from 'three'
import { GLTF } from 'three/examples/jsm/Addons.js'

export const useModelLoader = (models: string[], onModelLoaded: ((gltf: GLTF) => void)[]) => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  useEffect(() => {
    models.forEach((model, index) => {
      gltfLoader.load(
        model,
        gltf => {
          onModelLoaded[index](gltf)
          scene.add(gltf.scene)
        },
        undefined,
        error => {
          console.error('An error occurred while loading the model:', error)
        }
      )
    })

    return () => {
      scene.children.forEach(child => {
        if (child instanceof Scene) scene.remove(child)
      })
    }
  }, [gltfLoader, models, onModelLoaded, scene])
}
