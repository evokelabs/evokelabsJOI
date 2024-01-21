import { useCallback, useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, MeshStandardMaterial, Object3D, Scene } from 'three'
import { useDracoLoader } from './../../../libs/useDracoLoader'
import { gsap } from 'gsap'
import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'

// Constants
const MODEL_PATH = '/glb/JOI.glb'
const POSITION = { x: 0.7, y: 0.12, z: 2.1 }
const ROTATION = { pitch: 0, yaw: Math.PI / 0.9, roll: 0 }
const EYE_NAMES = ['JOI-Eye-Left', 'JOI-Eye-Right']

const JOI = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  useEffect(() => {
    gltfLoader.load(
      MODEL_PATH,
      gltf => {
        const { x, y, z } = POSITION
        gltf.scene.position.set(x, y, z)

        const { pitch, yaw, roll } = ROTATION
        gltf.scene.rotation.set(pitch, yaw, roll)

        const object3DChild = gltf.scene.children.find(child => child instanceof Object3D)
        if (object3DChild) {
          object3DChild.traverse(node => {
            if (node instanceof Mesh && EYE_NAMES.includes(node.name)) {
              node.receiveShadow = true

              if (node.material instanceof MeshStandardMaterial) {
                // Create a GSAP timeline with the startAnimation function as the onRepeat callback
                gsap.timeline({ repeat: -1, onRepeat: () => startEyeEmissionAnimation(node.material) })
              }
            }
          })
        }
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
  }, [gltfLoader, startEyeEmissionAnimation, scene])

  return null
}

export default JOI
