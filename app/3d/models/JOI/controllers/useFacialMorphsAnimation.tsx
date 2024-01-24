import { useEffect, useRef } from 'react'
import { Mesh } from 'three'
import { gsap } from 'gsap'

const DURATION = 0.25
const MIN_DELAY = 0.5
const MAX_DELAY = 1.5

export const useMorphAnimation = (model: THREE.Object3D | null) => {
  const lastSmileValueRef = useRef(0)
  const lastEyebrowsValueRef = useRef(0)

  useEffect(() => {
    if (!model) return

    const meshes: Mesh[] = []
    model.traverse(object => {
      if ((object as Mesh).isMesh) {
        meshes.push(object as Mesh)
      }
    })

    const smileIndex = meshes[0]?.morphTargetDictionary?.Smile
    const eyebrowsIndex = meshes[0]?.morphTargetDictionary?.Eyebrows

    if (smileIndex !== undefined) {
      const animate = (index: number, lastValueRef: React.MutableRefObject<number>) => {
        const delay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY
        const timeline = gsap.timeline()

        timeline.to(
          meshes.map(mesh => mesh.morphTargetInfluences),
          {
            delay,
            duration: DURATION,
            [index]: Math.random(),
            ease: 'power1.inOut',
            onComplete: () => {
              if (meshes[0] && meshes[0].morphTargetInfluences) {
                lastValueRef.current = meshes[0].morphTargetInfluences[index]
              }
              timeline.clear()
              animate(index, lastValueRef)
            }
          }
        )
      }

      if (smileIndex !== undefined) {
        animate(smileIndex, lastSmileValueRef)
      }

      if (eyebrowsIndex !== undefined) {
        animate(eyebrowsIndex, lastEyebrowsValueRef)
      }
    }
  }, [model])
}
