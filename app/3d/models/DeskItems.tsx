import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, Scene } from 'three'
import { useDracoLoader } from '@/app/libs/useDracoLoader'

const DeskItems = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  useEffect(() => {
    gltfLoader.load(
      '/glb/DeskItems.glb',
      gltf => {
        scene.add(gltf.scene)
        gltf.scene.traverse(object => {
          if (object instanceof Mesh) {
            switch (object.name) {
              default:
                object.castShadow = true
                object.receiveShadow = true
                break
            }
          }
        })
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
  }, [scene, gltfLoader])

  return null
}

export default DeskItems
