import { useCallback } from 'react'
import { Mesh, Object3D } from 'three'
import { GLTF } from 'three/examples/jsm/Addons.js'

// Constants
const POSITION = { x: 0.7, y: 0.12, z: 2.1 }
const ROTATION = { pitch: 0, yaw: Math.PI / 0.9, roll: 0 }
const EYE_NAMES = ['JOI-Eye-Left', 'JOI-Eye-Right']

/**
 * Custom hook to set the initial positioning of the JOI model.
 * Returns a function that sets the position, rotation, and shadow properties for a given GLTF model.
 */
export const useInitialJOIPositioning = (): ((gltf: GLTF) => void) => {
  const setInitialPositioning = useCallback((gltf: GLTF) => {
    if (!gltf.scene) {
      console.error('GLTF model does not have a scene')
      return
    }

    const { x, y, z } = POSITION
    gltf.scene.position.set(x, y, z)

    const { pitch, yaw, roll } = ROTATION
    gltf.scene.rotation.set(pitch, yaw, roll)

    

    const object3DChild = gltf.scene.children.find(child => child instanceof Object3D)
    if (object3DChild) {
      object3DChild.traverse(node => {
        if (node instanceof Mesh && EYE_NAMES.includes(node.name)) {
          node.receiveShadow = true
        }
      })
    }
  }, [])

  return setInitialPositioning
}
