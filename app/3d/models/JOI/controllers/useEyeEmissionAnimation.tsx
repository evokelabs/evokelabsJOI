import { useCallback } from 'react'
import { gsap } from 'gsap'
import { Mesh, MeshStandardMaterial, Object3D } from 'three'
import { GLTF } from 'three/examples/jsm/Addons.js'

// Constants for the emission animation
const EMISSIVE_INTENSITY_RANGE = { min: 0.15, max: 5.5 }
const DURATION = 0.25

/**
 * Custom hook to create an eye emission animation.
 * Returns a function that starts the animation for a given GLTF model.
 */
export const useEyeEmissionAnimation = (): ((gltf: GLTF) => void) => {
  const startEyeEmissionAnimation = useCallback((gltf: GLTF) => {
    const object3DChild = gltf.scene.children.find(child => child instanceof Object3D)
    if (object3DChild) {
      const materials: MeshStandardMaterial[] = []

      object3DChild.traverse(node => {
        if (node instanceof Mesh && node.material instanceof MeshStandardMaterial) {
          materials.push(node.material)
        }
      })

      // Create a GSAP timeline with the startAnimation function as the onRepeat callback
      gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          materials.forEach(material => {
            // Generate a new random value for emissiveIntensity
            const newEmissiveIntensity = gsap.utils.random(EMISSIVE_INTENSITY_RANGE.min, EMISSIVE_INTENSITY_RANGE.max)

            // Create a new tween that transitions to the new random value over the constant duration
            gsap.to(material, {
              emissiveIntensity: newEmissiveIntensity,
              duration: DURATION
            })
          })
        }
      })
    }
  }, [])

  return startEyeEmissionAnimation
}
