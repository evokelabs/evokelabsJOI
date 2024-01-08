import { useEffect, useRef } from 'react'
import { useLoader, useThree, useFrame } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Object3D } from 'three'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'

const CAR_OFFSET_X = 22
const CAR_OFFSET_Y = 1
const CAR_OFFSET_Z = 14

const CAR_ANIM_SPEED = 2.25
const CAR_ANIM_DISTANCE = -40

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
      carRef.current.position.set(CAR_OFFSET_X, CAR_OFFSET_Y, CAR_OFFSET_Z)
      scene.add(gltf.scene)
    }
    return () => {
      if (gltf.scene) {
        scene.remove(gltf.scene)
      }
    }
  }, [gltf, scene])

  useFrame(({ clock }) => {
    if (carRef.current) {
      const elapsedTime = clock.getElapsedTime()
      const loopTime = elapsedTime % CAR_ANIM_SPEED
      carRef.current.position.x = (loopTime / CAR_ANIM_SPEED) * CAR_ANIM_DISTANCE + CAR_OFFSET_X
      if (loopTime >= CAR_ANIM_SPEED) {
        carRef.current.position.x = CAR_OFFSET_X
      }
    }
  })
  return null
}

export default CyberpunkCar
