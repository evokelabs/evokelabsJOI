import { useEffect, useRef } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'
import * as dat from 'dat.gui'
import { Mesh, MeshStandardMaterial } from 'three'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'

const JOI = () => {
  const { scene } = useThree()
  const gui = useRef<dat.GUI | null>(null)

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(DRACO_DECODER_PATH)

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)

  const gltf = useLoader(GLTFLoader, '/glb/JOI.glb', loader => loader.setDRACOLoader(dracoLoader))

  useEffect(() => {
    if (gltf.scene) {
      scene.add(gltf.scene)

      // Create a new dat.GUI instance
      gui.current = new dat.GUI()

      // Add sliders for the material properties
      gltf.scene.traverse(child => {
        if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
          if (gui.current) {
            let folder

            // Check if a folder for this mesh already exists
            if (gui.current.__folders[child.name]) {
              folder = gui.current.__folders[child.name]
            } else {
              folder = gui.current.addFolder(child.name)
            }

            folder.add(child.material, 'metalness', 0, 1)
            folder.add(child.material, 'roughness', 0, 1)
            folder.open()
          }
        }
      })
    }
    return () => {
      if (gltf.scene) {
        scene.remove(gltf.scene)
      }
      // Dispose of the dat.GUI instance
      if (gui.current) {
        gui.current.destroy()
      }
    }
  }, [gltf, scene])

  return null
}

export default JOI