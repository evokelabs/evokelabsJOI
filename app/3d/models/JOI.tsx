import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Scene } from 'three'
import { useDracoLoader } from '@/app/libs/useDracoLoader'

const JOI = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  useEffect(() => {
    gltfLoader.load(
      '/glb/JOI.glb',
      gltf => {
        scene.add(gltf.scene)
      },
      undefined,
      error => {
        console.error('An error occurred while loading the model:', error)
      }
    )

    return () => {
      scene.children.forEach(child => {
        if (child instanceof Scene) scene.remove(child)
      })
    }
  }, [gltfLoader, scene])

  return null
}

export default JOI
