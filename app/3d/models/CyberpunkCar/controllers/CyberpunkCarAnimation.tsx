import { useFrame } from '@react-three/fiber'
import { useState } from 'react'
import { CAR_OFFSET_X, CAR_OFFSET_Y, CAR_OFFSET_Z, CAR_ANIM_SPEED, CAR_ANIM_DISTANCE } from '../constants'
import { CyberpunkRefType } from '../index'

// This component animates a car in a cyberpunk scene.
const CyberpunkCarAnimation = ({ carRef }: CyberpunkRefType) => {
  const [direction, setDirection] = useState(1)
  const [carAnimSpeed, setCarAnimSpeed] = useState(CAR_ANIM_SPEED[0]) // You can set the initial speed to any value you want

  const getRandomPosition = (range: [number, number]) => {
    return Math.random() * (range[1] - range[0]) + range[0]
  }

  const getRandomSpeed = () => {
    const minSpeed = CAR_ANIM_SPEED[0] // Set the minimum speed
    const maxSpeed = CAR_ANIM_SPEED[1] // Set the maximum speed
    return Math.random() * (maxSpeed - minSpeed) + minSpeed
  }

  // On each frame, update the car's position and speed.
  useFrame(({ clock }) => {
    if (carRef.current) {
      let elapsedTime = clock.getElapsedTime()

      // Reset the animation when the car's X position reaches a certain value
      if (carRef.current.position.x < -CAR_OFFSET_X || carRef.current.position.x > CAR_OFFSET_X) {
        clock.start() // Reset the clock
        elapsedTime = clock.getElapsedTime() // Get the reset elapsedTime
        carRef.current.position.x = CAR_OFFSET_X

        carRef.current.position.y = getRandomPosition(CAR_OFFSET_Y as [number, number])
        carRef.current.position.z = getRandomPosition(CAR_OFFSET_Z as [number, number])
        // Change the direction, rotation, and speed of the car
        const newDirection = Math.random() < 0.5 ? 1 : -1
        setDirection(newDirection)
        carRef.current.rotation.z = newDirection === 1 ? 0 : Math.PI
        setCarAnimSpeed(getRandomSpeed())
      }
      // Calculate the car's position based on the reset elapsedTime
      carRef.current.position.x = direction * ((elapsedTime / carAnimSpeed) * CAR_ANIM_DISTANCE + CAR_OFFSET_X)
    }
  })

  return null
}

export default CyberpunkCarAnimation
