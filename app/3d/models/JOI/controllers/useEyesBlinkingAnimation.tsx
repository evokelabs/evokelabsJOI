import { useEffect } from 'react'
import { Mesh, Object3D } from 'three'
import { gsap } from 'gsap'

const BLINK_DURATION = 0.1
const MIN_DELAY = 4
const MAX_DELAY = 8

export const useEyesBlinkingAnimation = (model: Object3D | undefined) => {
  useEffect(() => {
    if (!model) return

    const tl = gsap.timeline({ repeat: -1, repeatDelay: Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY })
    const meshes: Mesh[] = []

    model.traverse((object: Object3D) => {
      if (object instanceof Mesh && object.morphTargetDictionary?.Blink !== undefined) {
        meshes.push(object)
      }
    })

    if (meshes.length > 0 && meshes[0].morphTargetDictionary?.Blink !== undefined) {
      const blinkIndex = meshes[0].morphTargetDictionary.Blink
      tl.to(
        meshes.map(mesh => mesh.morphTargetInfluences),
        {
          duration: BLINK_DURATION,
          [blinkIndex]: 1
        }
      )
        .to(
          meshes.map(mesh => mesh.morphTargetInfluences),
          {
            duration: BLINK_DURATION / 3,
            [blinkIndex]: 1
          }
        )
        .to(
          meshes.map(mesh => mesh.morphTargetInfluences),
          {
            duration: BLINK_DURATION,
            [blinkIndex]: 0,
            onComplete: () => {
              tl.repeatDelay(Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY)
            }
          }
        )
    }
  }, [model])
}
