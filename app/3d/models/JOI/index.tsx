import { useCallback, useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, MeshStandardMaterial, Object3D, Scene } from 'three'
import { useDracoLoader } from './../../../libs/useDracoLoader'
import { gsap } from 'gsap'
import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'

// Constants
const MODEL_PATH = '/glb/JOI.glb'

const JOI = () => {
  const { scene } = useThree()
  const setInitialPositioning = useInitialJOIPositioning()
  const gltfLoader = useRef(useDracoLoader()).current

  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  const traverseObject3DChild = useCallback((gltf: { scene: { children: any[] } }, callback: any) => {
    const object3DChild = gltf.scene.children.find(child => child instanceof Object3D)
    if (object3DChild) {
      object3DChild.traverse(callback)
    }
  }, [])

  useEffect(() => {
    gltfLoader.load(
      MODEL_PATH,
      gltf => {
        setInitialPositioning(gltf)

        traverseObject3DChild(gltf, (node: { material: gsap.TweenTarget }) => {
          if (node instanceof Mesh) {
            if (node.material instanceof MeshStandardMaterial) {
              // Create a GSAP timeline with the startAnimation function as the onRepeat callback
              gsap.timeline({ repeat: -1, onRepeat: () => startEyeEmissionAnimation(node.material) })
            }
          }
        })

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
  }, [gltfLoader, startEyeEmissionAnimation, scene, setInitialPositioning, traverseObject3DChild])

  return null
}

export default JOI
