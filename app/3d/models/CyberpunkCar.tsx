import { useEffect, useRef, useState } from 'react'
import { useLoader, useThree, useFrame } from '@react-three/fiber'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Object3D } from 'three'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'

const CAR_OFFSET_X = 65
const CAR_OFFSET_Y = [-0.4, 2] //distance from the ground
const CAR_OFFSET_Z = [4.5, 10] // distance from the camera

const CAR_ANIM_SPEED = [2, 5]
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
  const [carAnimSpeed, setCarAnimSpeed] = useState(CAR_ANIM_SPEED[0]) // You can set the initial speed to any value you want

  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null)
  const [audioSrc, setAudioSrc] = useState<AudioBufferSourceNode | null>(null)
  const [gainNode, setGainNode] = useState<GainNode | null>(null)
  const [panner, setPanner] = useState<StereoPannerNode | null>(null)

  useEffect(() => {
    const resumeAudio = async () => {
      if (!audioCtx) {
        const newAudioCtx = new AudioContext()
        const newAudioSrc = newAudioCtx.createBufferSource()
        const newGainNode = newAudioCtx.createGain()
        const newPanner = newAudioCtx.createStereoPanner()

        newAudioSrc.connect(newGainNode)
        newGainNode.connect(newPanner)
        newPanner.connect(newAudioCtx.destination)

        setAudioCtx(newAudioCtx)
        setAudioSrc(newAudioSrc)
        setGainNode(newGainNode)
        setPanner(newPanner)

        const response = await fetch('/sounds/engineLoop.ogg')
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await newAudioCtx.decodeAudioData(arrayBuffer)

        newAudioSrc.buffer = audioBuffer
        newAudioSrc.loop = true
        newAudioSrc.start()
      } else if (audioCtx.state === 'suspended') {
        await audioCtx.resume()
      }
    }

    window.addEventListener('click', resumeAudio)
    window.addEventListener('keydown', resumeAudio)

    return () => {
      window.removeEventListener('click', resumeAudio)
      window.removeEventListener('keydown', resumeAudio)
    }
  }, [audioCtx])

  // ... existing code ...

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

  const setRandomSpeed = () => {
    const minSpeed = CAR_ANIM_SPEED[0] // Set the minimum speed
    const maxSpeed = CAR_ANIM_SPEED[1] // Set the maximum speed
    const randomSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed
    setCarAnimSpeed(randomSpeed)
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
      let elapsedTime = clock.getElapsedTime()

      if (carRef.current && gainNode && panner) {
        const volume = 1 - Math.abs(carRef.current.position.x) / 25
        gainNode.gain.value = Math.max(0, Math.min(1, volume))

        const pan = carRef.current.position.x / -25
        panner.pan.value = Math.max(-1, Math.min(1, pan))
      }

      // Reset the animation when the car's X position reaches a certain value
      if (carRef.current.position.x < -CAR_OFFSET_X || carRef.current.position.x > CAR_OFFSET_X) {
        clock.start() // Reset the clock
        elapsedTime = clock.getElapsedTime() // Get the reset elapsedTime

        carRef.current.position.x = CAR_OFFSET_X
        setRandomYPosition()
        setRandomZPosition()
        // Change the direction, rotation, and speed of the car
        const newDirection = Math.random() < 0.5 ? 1 : -1
        setDirection(newDirection)
        carRef.current.rotation.z = newDirection === 1 ? 0 : Math.PI
        setRandomSpeed()
      }

      // Calculate the car's position based on the reset elapsedTime
      carRef.current.position.x = direction * ((elapsedTime / carAnimSpeed) * CAR_ANIM_DISTANCE + CAR_OFFSET_X)
    }
  })

  return null
}

export default CyberpunkCar
