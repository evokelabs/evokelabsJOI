import { useFrame } from '@react-three/fiber'
import { MutableRefObject, useState } from 'react'

import { CAR_OFFSET_X, CAR_OFFSET_Y, CAR_OFFSET_Z, CAR_ANIM_SPEED, CAR_ANIM_DISTANCE } from '../constants'

interface CyberpunkCarAnimationProps {
  carRef: MutableRefObject<any>
}

const CyberpunkCarAnimation: React.FC<CyberpunkCarAnimationProps> = ({ carRef }) => {
  const [direction, setDirection] = useState(1)
  const [carAnimSpeed, setCarAnimSpeed] = useState(CAR_ANIM_SPEED[0]) // You can set the initial speed to any value you want

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

  useFrame(({ clock }) => {
    if (carRef.current) {
      let elapsedTime = clock.getElapsedTime()

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

export default CyberpunkCarAnimation
