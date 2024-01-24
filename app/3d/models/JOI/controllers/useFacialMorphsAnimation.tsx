import { useEffect, useRef } from 'react'
import { Mesh } from 'three'
import { gsap } from 'gsap'

const DURATION = 0.55
const MIN_DELAY = 0.15
const MAX_DELAY = 1.85

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

    const animate = (smileIndex: number, eyebrowsIndex: number) => {
      const delay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY

      return gsap.to(
        meshes.map(mesh => mesh.morphTargetInfluences),
        {
          delay,
          duration: DURATION,
          [smileIndex]: Math.random(),
          [eyebrowsIndex]: Math.random(),
          ease: 'power1.inOut',
          onComplete: () => {
            if (meshes[0] && meshes[0].morphTargetInfluences) {
              lastSmileValueRef.current = meshes[0].morphTargetInfluences[smileIndex]
              lastEyebrowsValueRef.current = meshes[0].morphTargetInfluences[eyebrowsIndex]
            }
          }
        }
      )
    }

    if (smileIndex !== undefined && eyebrowsIndex !== undefined) {
      animate(smileIndex, eyebrowsIndex)
    }

    const startAnimation = () => {
      if (smileIndex !== undefined && eyebrowsIndex !== undefined) {
        const delay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY
        console.log('delay', delay)
        const masterTimeline = gsap.timeline({
          onComplete: startAnimation,
          delay
        })

        masterTimeline.add(animate(smileIndex, eyebrowsIndex))
      }
    }

    startAnimation()
  }, [model])
}
