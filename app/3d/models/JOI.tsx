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
  const gltfHair = useLoader(GLTFLoader, '/glb/JOI-hair.glb', loader => loader.setDRACOLoader(dracoLoader))

  useEffect(() => {
    if (gltf.scene) {
      scene.add(gltf.scene)
      console.log(gltf.scene)

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

            folder.add(child.material, 'metalness', 0, 1).step(0.01)
            folder.add(child.material, 'roughness', 0, 1).step(0.01)

            // If the name of the child is JOI_Hair, set transparent to true

            folder.open()
          }
        }
      })
    }

    if (gltfHair.scene) {
      scene.add(gltfHair.scene)
    }

    return () => {
      if (gltf.scene) {
        scene.remove(gltf.scene)
      }
      if (gltfHair.scene) {
        scene.remove(gltfHair.scene)
      }
      // Dispose of the dat.GUI instance
      if (gui.current) {
        gui.current.destroy()
      }
    }
  }, [gltf, gltfHair, scene])

  return null
}

export default JOI
