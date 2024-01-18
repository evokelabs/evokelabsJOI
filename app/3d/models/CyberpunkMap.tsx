import { useEffect } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Mesh } from 'three'
import { gsap } from 'gsap'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'

const CyberpunkMap = () => {
  const { scene } = useThree()

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(DRACO_DECODER_PATH)

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)

  const gltf = useLoader(GLTFLoader, '/glb/EvokelabsRoom.glb', loader => loader.setDRACOLoader(dracoLoader))

  useEffect(() => {
    if (gltf.scene) {
      scene.add(gltf.scene)
      gltf.scene.traverse(object => {
        if (object instanceof Mesh) {
          if (object.name === 'Window_Glass_Main') {
            object.castShadow = false
          } else if (object.name === 'Window_Shutters_Closed') {
            object.castShadow = true
            gsap.to(object.position, { y: 2.7, duration: 5, delay: 2, ease: 'Power1.easeOut' })
          } else if (object.name === 'Wall_Curved_VendingMachine_Outdoor') {
            object.castShadow = true
          } else {
            object.castShadow = true
            object.receiveShadow = true
          }
        }
      })
    }
    return () => {
      if (gltf.scene) {
        scene.remove(gltf.scene)
      }
    }
  }, [gltf, scene])

  return null
}

export default CyberpunkMap
