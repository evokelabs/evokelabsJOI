import { useContext, useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, Scene } from 'three'
import { gsap } from 'gsap'
import { useDracoLoader } from './../../libs/useDracoLoader'
import { AnimationContext } from './../../libs/AnimationContext'

const CyberpunkMap = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current
  const { setPointLightPlay, setAmbientLightPlay } = useContext(AnimationContext)

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
                gsap.to(object.position, {
                  y: 2.7,
                  duration: 5,
                  delay: 3,
                  ease: 'Power1.easeOut',
                  onStart: () => {
                    setAmbientLightPlay(true)
                    gsap.delayedCall(3, () => {
                      setPointLightPlay(true)
                    })
                  }
                })
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

    return () => {
      scene.children.forEach(child => {
        if (child instanceof Scene) scene.remove(child)
      })
    }
  }, [scene, gltfLoader, setPointLightPlay, setAmbientLightPlay])

  return null
}

export default CyberpunkMap
