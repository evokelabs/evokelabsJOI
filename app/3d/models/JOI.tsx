import { useEffect, useRef } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'

const JOI = () => {
  const { scene } = useThree()

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(DRACO_DECODER_PATH)

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)

  const gltf = useLoader(GLTFLoader, '/glb/JOI.glb', loader => loader.setDRACOLoader(dracoLoader))
  const gltfHair = useLoader(GLTFLoader, '/glb/JOI-hair.glb', loader => loader.setDRACOLoader(dracoLoader))

  useEffect(() => {
    if (gltf.scene) {
      scene.add(gltf.scene)
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
    }
  }, [gltf, gltfHair, scene])

  return null
}

export default JOI
