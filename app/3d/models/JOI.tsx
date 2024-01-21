import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, MeshStandardMaterial, Object3D, Scene } from 'three'
import { useDracoLoader } from './../../libs/useDracoLoader'
import { gsap } from 'gsap'

// Constants
const MODEL_PATH = '/glb/JOI.glb'
const POSITION = { x: 0.7, y: 0.12, z: 2.1 }
const ROTATION = { pitch: 0, yaw: Math.PI / 0.9, roll: 0 }
const EYE_NAMES = ['JOI-Eye-Left', 'JOI-Eye-Right']
const EMISSIVE_INTENSITY_RANGE = { min: 0.5, max: 1.25 }
const DURATION_RANGE = { min: 0.25, max: 0.65 }

const JOI = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  // Generate an initial random value for duration
  let newDuration = gsap.utils.random(DURATION_RANGE.min, DURATION_RANGE.max)

  // Define the onRepeat function
  const onRepeat = (material: gsap.TweenTarget) => {
    // Generate a new random value for emissiveIntensity
    const newEmissiveIntensity = gsap.utils.random(EMISSIVE_INTENSITY_RANGE.min, EMISSIVE_INTENSITY_RANGE.max)

    // Update the random value for duration
    newDuration = gsap.utils.random(DURATION_RANGE.min, DURATION_RANGE.max)

    // Create a new tween that transitions to the new random value over the new random duration
    gsap.to(material, {
      emissiveIntensity: newEmissiveIntensity,
      duration: newDuration
    })
  }

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
                // Create a GSAP timeline with the onRepeat function as the onRepeat callback
                const tl = gsap.timeline({ repeat: -1, onRepeat: () => onRepeat(node.material) })

                // Add a dummy tween to the timeline with the initial random duration
                tl.to({}, { duration: newDuration })
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
  }, [gltfLoader, scene])

  return null
}

export default JOI
