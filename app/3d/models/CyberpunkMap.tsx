import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, Scene } from 'three'
import { gsap } from 'gsap'
import { useDracoLoader } from '@/app/libs/useDracoLoader'

const CyberpunkMap = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  useEffect(() => {
    gltfLoader.load(
      '/glb/EvokelabsRoom.glb',
      gltf => {
        scene.add(gltf.scene)
        gltf.scene.traverse(object => {
          if (object instanceof Mesh) {
            switch (object.name) {
              case 'Window_Glass_Main':
                object.castShadow = false
                break
              case 'Window_Shutters_Closed':
                object.castShadow = true
                gsap.to(object.position, { y: 2.7, duration: 5, delay: 2, ease: 'Power1.easeOut' })
                break
              case 'Wall_Curved_VendingMachine_Outdoor':
                object.castShadow = true
                break
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

    console.log('CyberpunkMap.tsx: scene.children:', scene.children)
    console.log('CyberpunkMap.tsx: scene:', scene)

    return () => {
      scene.children.forEach(child => {
        if (child instanceof Scene) scene.remove(child)
      })
    }
  }, [scene, gltfLoader])

  return null
}

export default CyberpunkMap
