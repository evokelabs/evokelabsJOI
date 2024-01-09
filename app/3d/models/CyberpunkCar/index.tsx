import { useEffect, useRef } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Object3D } from 'three'

import CyberpunkCarAnimation from './controllers/CyberpunkCarAnimation'
import CyberpunkCarSoundControl from './controllers/CyberpunkCarSoundControl'

import { CAR_OFFSET_X, CAR_OFFSET_Y, CAR_OFFSET_Z } from './constants'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'

const CyberpunkCar = () => {
  const { scene } = useThree()
  const carRef = useRef<Object3D>()

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(DRACO_DECODER_PATH)

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)

  const gltf = useLoader(GLTFLoader, '/glb/Cyberpunk-Car.glb', loader => loader.setDRACOLoader(dracoLoader))

  useEffect(() => {
    if (gltf.scene) {
      carRef.current = gltf.scene.children[0]
      gltf.scene.children[0].castShadow = true
      carRef.current.position.set(CAR_OFFSET_X, CAR_OFFSET_Y[0], CAR_OFFSET_Z[0])
      scene.add(gltf.scene)
    }
    return () => {
      if (gltf.scene) {
        scene.remove(gltf.scene)
      }
    }
  }, [gltf, scene])

  return (
    <>
      <CyberpunkCarAnimation carRef={carRef} />
      <CyberpunkCarSoundControl carRef={carRef} />
    </>
  )
}

export default CyberpunkCar
