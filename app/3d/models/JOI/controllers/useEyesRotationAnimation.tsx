import { useCallback, useEffect, useRef } from 'react'
import { Mesh, Object3D, Euler } from 'three'
import { useEyesBlinkingAnimation } from './useEyesBlinkingAnimation'

const TIME_BETWEEN_EYE_MOVEMENTS = 2000

export const useEyesRotationAnimation = (model: Object3D, camera: THREE.Camera) => {
  const requestRef = useRef<number | null>(null)
  const rightEye = useRef<{ mesh: Mesh | null; initialRotation: Euler | null }>({ mesh: null, initialRotation: null })
  const leftEye = useRef<{ mesh: Mesh | null; initialRotation: Euler | null }>({ mesh: null, initialRotation: null })
  const lookAtCamera = useRef<boolean>(true)
  const { triggerBlink } = useEyesBlinkingAnimation(model)

  model.traverse(object => {
    if (object instanceof Mesh) {
      if (object.name === 'JOI-Eye-Right') {
        rightEye.current = { mesh: object, initialRotation: object.rotation.clone() }
      } else if (object.name === 'JOI-Eye-Left') {
        leftEye.current = { mesh: object, initialRotation: object.rotation.clone() }
      }
    }
  })

  const animate = useCallback(() => {
    if (rightEye.current.mesh && leftEye.current.mesh) {
      if (lookAtCamera.current) {
        rightEye.current.mesh.lookAt(camera.position)
        leftEye.current.mesh.lookAt(camera.position)
      } else {
        // Reset the eyes to their initial rotation
        if (rightEye.current.initialRotation && leftEye.current.initialRotation) {
          rightEye.current.mesh.rotation.copy(rightEye.current.initialRotation)
          leftEye.current.mesh.rotation.copy(leftEye.current.initialRotation)
        }
      }
    }
    requestRef.current = requestAnimationFrame(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    animate()
    const intervalId = setInterval(() => {
      // Every TIME_BETWEEN_EYE_MOVEMENTS milliseconds, there's a 50% chance the eyes will stop looking at the camera
      if (Math.random() < 0.5) {
        lookAtCamera.current = !lookAtCamera.current
        triggerBlink() // trigger the blink without offset
      }
    }, TIME_BETWEEN_EYE_MOVEMENTS)
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current)
      }
      clearInterval(intervalId)
    }
  }, [animate, triggerBlink])
}
