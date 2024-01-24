import { useEffect } from 'react'
import { Mesh, Object3D } from 'three'
import { gsap } from 'gsap'

export const useEyesBlinkingAnimation = (model: Object3D | undefined) => {
  useEffect(() => {
    if (!model) return

    model.traverse((object: Object3D) => {
      if (object instanceof Mesh && object.morphTargetDictionary && object.morphTargetInfluences) {
        if (object.morphTargetDictionary.Blink !== undefined) {
          console.log('Blinking')
          const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 })
          tl.to(object.morphTargetInfluences, {
            duration: 0.15,
            [object.morphTargetDictionary.Blink]: 1
          })
            .to(object.morphTargetInfluences, {
              duration: 0.05,
              [object.morphTargetDictionary.Blink]: 1
            })
            .to(object.morphTargetInfluences, {
              duration: 0.15,
              [object.morphTargetDictionary.Blink]: 0
            })
        }
      }
    })
  }, [model])
}
