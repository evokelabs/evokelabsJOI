import { useEffect, useRef, useState } from 'react'
import { useLoader, useThree, useFrame } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Object3D } from 'three'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'

const CAR_OFFSET_X = 20
const CAR_OFFSET_Y = [-0.4, 2.2]
const CAR_OFFSET_Z = [4.5, 20]

const CAR_ANIM_SPEED = 3
const CAR_ANIM_DISTANCE = -40

const CyberpunkCar = () => {
  const { scene } = useThree()
  const carRef = useRef<Object3D>()

  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(DRACO_DECODER_PATH)

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)

  const gltf = useLoader(GLTFLoader, '/glb/Cyberpunk-Car.glb', loader => loader.setDRACOLoader(dracoLoader))

  const [direction, setDirection] = useState(1)

  const setRandomYPosition = () => {
    if (carRef.current) {
      const randomY = Math.random() * (CAR_OFFSET_Y[1] - CAR_OFFSET_Y[0]) + CAR_OFFSET_Y[0]
      carRef.current.position.y = randomY
    }
  }

  const setRandomZPosition = () => {
    if (carRef.current) {
      const randomZ = Math.random() * (CAR_OFFSET_Z[1] - CAR_OFFSET_Z[0]) + CAR_OFFSET_Z[0]
      carRef.current.position.z = randomZ
    }
  }

  useEffect(() => {
    if (gltf.scene) {
      carRef.current = gltf.scene.children[0]
      gltf.scene.children[0].castShadow = true
      carRef.current.position.set(CAR_OFFSET_X, CAR_OFFSET_Y[0], CAR_OFFSET_Z[0])
      setRandomYPosition()
      setRandomZPosition()
      // Set the initial direction and rotation of the car
      const initialDirection = Math.random() < 0.5 ? 1 : -1
      setDirection(initialDirection)
      carRef.current.rotation.z = initialDirection === 1 ? 0 : Math.PI
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
      carRef.current.position.x = direction * ((loopTime / CAR_ANIM_SPEED) * CAR_ANIM_DISTANCE + CAR_OFFSET_X)
      if (Math.abs(loopTime - CAR_ANIM_SPEED) < 0.1) {
        carRef.current.position.x = CAR_OFFSET_X
        setRandomYPosition()
        setRandomZPosition()
        // Change the direction and rotation of the car
        const newDirection = Math.random() < 0.5 ? 1 : -1
        setDirection(newDirection)
        carRef.current.rotation.z = newDirection === 1 ? 0 : Math.PI
        console.log('direction', newDirection)
        console.log('carRef.current.rotation.z', carRef.current.rotation.z)
      }
    }
  })

  return null
}

export default CyberpunkCar
