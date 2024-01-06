import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GUI } from 'dat.gui'

const Rain = () => {
  const MAX_FALL_HEIGHT = 10
  const MIN_FALL_HEIGHT = 0
  const MIN_FALL_HEIGHT_OFFSET = 6

  const rainMaterial = new THREE.SpriteMaterial({
    color: 0x96e7ff,
    transparent: true
  })

  const rain = new THREE.Group()

  const rainRef = useRef<THREE.Group>(rain)
  const [isReady, setIsReady] = useState(false)

  const parameters = {
    speed: -0.05,
    scale: 0.1,
    size: 0.05
  }

  useEffect(() => {
    const rainCount = 1500
    const positions = new Float32Array(rainCount * 3)
    const velocities = new Float32Array(rainCount)

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3] = Math.random() * 23 - 12
      positions[i * 3 + 1] = Math.random() * (MAX_FALL_HEIGHT - (MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET))
      positions[i * 3 + 2] = Math.random() * -16 + 20
      velocities[i] = 0

      const sprite = new THREE.Sprite(rainMaterial)
      sprite.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
      sprite.scale.set(parameters.size, parameters.scale, 1) // Set the x and y scale to create a rectangle
      rain.add(sprite)
    }

    // Create a GUI and add controls for the parameters
    const gui = new GUI()
    gui.add(parameters, 'speed', -0.5, 0)
    gui.add(parameters, 'scale', 0.005, 2)
    gui.add(parameters, 'size', 0.001, 1)

    // Set isReady to true to trigger a re-render
    setIsReady(true)

    const animate = () => {
      for (let i = 0; i < rainCount; i++) {
        velocities[i] = parameters.speed
        positions[i * 3 + 1] += velocities[i]
        if (positions[i * 3 + 1] < MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET) {
          positions[i * 3 + 1] = MAX_FALL_HEIGHT
          velocities[i] = 0
        }

        const sprite = rain.children[i] as THREE.Sprite
        sprite.position.y = positions[i * 3 + 1]
        sprite.scale.set(parameters.size, parameters.scale, 1)
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return isReady ? <primitive object={rainRef.current as THREE.Object3D} /> : null
}

export default Rain
