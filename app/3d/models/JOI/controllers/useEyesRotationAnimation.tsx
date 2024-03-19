import { useCallback, useEffect, useRef } from 'react'
import { Mesh, Object3D, Euler, Vector3, Matrix4 } from 'three'
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
        const direction = new Vector3().subVectors(camera.position, rightEye.current.mesh.position).normalize()
        const distance = 0.0001 // Change this to the desired distance
        let target = new Vector3().addVectors(rightEye.current.mesh.position, direction.multiplyScalar(distance))

        // Limit the rotation of the eyes
        const eyeToCamera = new Vector3().subVectors(camera.position, rightEye.current.mesh.position).normalize()
        const eyeToTarget = new Vector3().subVectors(target, rightEye.current.mesh.position).normalize()
        const angle = eyeToCamera.angleTo(eyeToTarget)
        const maxAngle = Math.PI / 6 // Change this to the maximum allowed rotation angle
        if (angle > maxAngle) {
          // Adjust the target point to limit the rotation
          const rotationMatrix = new Matrix4().makeRotationAxis(eyeToCamera.cross(eyeToTarget), maxAngle)
          target = eyeToCamera.applyMatrix4(rotationMatrix).add(rightEye.current.mesh.position)
        }

        // rightEye.current.mesh.lookAt(target)
        // leftEye.current.mesh.lookAt(target)
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
    /**
     * The ID of the interval used for the eyes rotation animation.
     */
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
