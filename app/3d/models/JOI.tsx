import { useEffect } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Group } from 'three'

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
    const JOIgroup = new Group()

    if (gltf.scene) {
      JOIgroup.add(gltf.scene)
    }

    if (gltfHair.scene) {
      JOIgroup.add(gltfHair.scene)
    }

    scene.add(JOIgroup)

    JOIgroup.position.x -= 0.1

    return () => {
      // Remove the group from the scene
      scene.remove(JOIgroup)
    }
  }, [gltf, gltfHair, scene])

  return null
}

export default JOI
