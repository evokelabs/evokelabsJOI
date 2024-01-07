import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Rain settings
const MAX_FALL_HEIGHT = 10
const MIN_FALL_HEIGHT = 0
const MIN_FALL_HEIGHT_OFFSET = 6
const RAIN_COUNT = 5000
const SPEED = -0.15
const SCALE = 0.35
const SIZE = 0.005
const ROTATION = 0.05
const SLANT = 0.05

const Rain = () => {
  const rainRef = useRef<THREE.Group | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const rainMaterial = new THREE.SpriteMaterial({
      color: 0x96e7ff,
      transparent: true,
      opacity: 0.25
    })

    const positions = new Float32Array(RAIN_COUNT * 3)
    const velocities = new Float32Array(RAIN_COUNT)

    const rain = new THREE.Group()
    rainRef.current = rain

    for (let i = 0; i < RAIN_COUNT; i++) {
      positions[i * 3] = Math.random() * 23 - 12
      positions[i * 3 + 1] = Math.random() * (MAX_FALL_HEIGHT - (MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET))
      positions[i * 3 + 2] = Math.random() * -16 + 20
      velocities[i] = 0

      const sprite = new THREE.Sprite(rainMaterial)
      sprite.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
      sprite.scale.set(SIZE, SCALE, 1)
      rain.add(sprite)
    }

    setIsReady(true)

    const animate = () => {
      for (let i = 0; i < RAIN_COUNT; i++) {
        velocities[i] = SPEED
        positions[i * 3 + 1] += velocities[i]
        positions[i * 3] += velocities[i] * SLANT

        if (positions[i * 3 + 1] < MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET) {
          positions[i * 3 + 1] = MAX_FALL_HEIGHT
          positions[i * 3] = Math.random() * 23 - 12
          velocities[i] = 0
        }

        const sprite = rain.children[i] as THREE.Sprite
        sprite.position.y = positions[i * 3 + 1]
        sprite.position.x = positions[i * 3]
        sprite.scale.set(SIZE, SCALE, 1)
        sprite.material.rotation = ROTATION
      }

      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return isReady ? <primitive object={rainRef.current as THREE.Object3D} /> : null
}

export default Rain
