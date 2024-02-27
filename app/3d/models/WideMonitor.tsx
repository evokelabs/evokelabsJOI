import { useCallback, useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Object3D } from 'three'
import { useDracoLoader } from '@/app/libs/useDracoLoader'

const WideMonitor = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current
  const addedMeshesRef = useRef<Object3D[]>([])

  const handleModelError = useCallback((error: unknown) => {
    console.error('An error occurred while loading the model:', error)
  }, [])

  const handleModelLoad = useCallback(
    (gltf: { scene: Object3D }) => {
      gltf.scene.traverse(child => {
        if (child instanceof Object3D) {
          child.castShadow = true
          child.receiveShadow = true
          scene.add(child)
          addedMeshesRef.current.push(child)
        }
      })
    },
    [scene]
  )

  const loadModel = useCallback(() => {
    gltfLoader.load('/glb/WideMonitor.glb', handleModelLoad, undefined, handleModelError)
  }, [gltfLoader, handleModelLoad, handleModelError])

  useEffect(() => {
    loadModel()

    return () => {
      addedMeshesRef.current.forEach(mesh => {
        scene.remove(mesh)
      })
      addedMeshesRef.current = []
    }
  }, [scene, loadModel])

  return null
}

export default WideMonitor
