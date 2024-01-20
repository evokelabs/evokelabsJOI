import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, Object3D, Scene } from 'three'
import { useDracoLoader } from './../../libs/useDracoLoader'

const JOI = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  useEffect(() => {
    gltfLoader.load(
      '/glb/JOI.glb',
      gltf => {
        gltf.scene.position.set(0.7, 0.12, 2.1) // x, y, z
        gltf.scene.rotation.set(0, Math.PI / 0.9, 0) // pitch, yaw, roll

        console.log('gltf.scene', gltf.scene)

        const object3DChild = gltf.scene.children.find(child => child instanceof Object3D)
        if (object3DChild) {
          object3DChild.traverse(node => {
            if (node instanceof Mesh) {
              node.receiveShadow = true
            }
          })
        }
        scene.add(gltf.scene)
      },
      undefined,
      error => {
        console.error('An error occurred while loading the model:', error)
      }
    )

    return () => {
      scene.children.forEach(child => {
        if (child instanceof Scene) scene.remove(child)
      })
    }
  }, [gltfLoader, scene])

  return null
}

export default JOI
