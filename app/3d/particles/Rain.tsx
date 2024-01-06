import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Rain = () => {
  const MAX_FALL_HEIGHT = 30
  const MIN_FALL_HEIGHT = 0
  const rainRef = useRef<THREE.Points>()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const rainCount = 15000
    const positions = new Float32Array(rainCount * 3)
    const velocities = new Float32Array(rainCount)

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3] = Math.random() * 23 - 12
      positions[i * 3 + 1] = Math.random() * MAX_FALL_HEIGHT - MIN_FALL_HEIGHT
      positions[i * 3 + 2] = Math.random() * -16 + 20
      velocities[i] = 0
    }

    const rainGeo = new THREE.BufferGeometry()
    rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    rainGeo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1))

    const rainMaterial = new THREE.PointsMaterial({
      color: 0x96e7ff,
      size: 0.05,
      transparent: false
    })

    const rain = new THREE.Points(rainGeo, rainMaterial)
    rainRef.current = rain

    // Set isReady to true to trigger a re-render
    setIsReady(true)

    const animate = () => {
      const positions = rainGeo.attributes.position.array as Float32Array
      const velocities = rainGeo.attributes.velocity.array as Float32Array

      for (let i = 0; i < rainCount; i++) {
        velocities[i] = -0.05 // Set to a constant value
        positions[i * 3 + 1] += velocities[i]
        if (positions[i * 3 + 1] < MIN_FALL_HEIGHT) {
          positions[i * 3 + 1] = MAX_FALL_HEIGHT
          velocities[i] = 0
        }
      }

      rainGeo.attributes.position.needsUpdate = true

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return isReady ? <primitive object={rainRef.current as THREE.Object3D} /> : null
}

export default Rain
