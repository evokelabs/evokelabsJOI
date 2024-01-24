import { useCallback, useEffect, useRef } from 'react'
import { Mesh, Object3D } from 'three'

export const useEyesRotationAnimation = (model: Object3D, camera: THREE.Camera) => {
  const requestRef = useRef<number | null>(null)
  const rightEye = useRef<Mesh | null>(null)
  const leftEye = useRef<Mesh | null>(null)

  model.traverse(object => {
    if (object instanceof Mesh) {
      if (object.name === 'JOI-Eye-Right') {
        rightEye.current = object
      } else if (object.name === 'JOI-Eye-Left') {
        leftEye.current = object
      }
    }
  })

  const animate = useCallback(() => {
    if (rightEye.current && leftEye.current) {
      rightEye.current.lookAt(camera.position)
      leftEye.current.lookAt(camera.position)
    }
    requestRef.current = requestAnimationFrame(animate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    animate()
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate])
}
