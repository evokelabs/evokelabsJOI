import { useEffect, useCallback, useState } from 'react'
import { Mesh, Object3D } from 'three'
import { gsap } from 'gsap'

const BLINK_DURATION = 0.1
const MIN_DELAY = 4
const MAX_DELAY = 8

export const useEyesBlinkingAnimation = (model: Object3D | undefined) => {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null)
  const [blinkIndex, setBlinkIndex] = useState<number | null>(null)
  const [meshes, setMeshes] = useState<Mesh[]>([])

  const triggerBlink = useCallback(() => {
    if (tl && blinkIndex !== null) {
      tl.clear() // clear the timeline
        .to(
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
            [blinkIndex]: 0
          }
        )
    }
  }, [tl, blinkIndex, meshes])

  useEffect(() => {
    if (!model) return

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY })
    const meshes: Mesh[] = []

    model.traverse((object: Object3D) => {
      if (object instanceof Mesh && object.morphTargetDictionary?.Blink !== undefined) {
        meshes.push(object)
      }
    })

    if (meshes.length > 0 && meshes[0].morphTargetDictionary?.Blink !== undefined) {
      const blinkIndex = meshes[0].morphTargetDictionary.Blink
      setTl(timeline)
      setBlinkIndex(blinkIndex)
      setMeshes(meshes)
    }
  }, [model])

  return { triggerBlink }
}
