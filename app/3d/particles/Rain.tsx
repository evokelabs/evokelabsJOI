import React, { useEffect, useMemo, useState } from 'react'
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
  const [isReady, setIsReady] = useState(false)

  const rainRef = useMemo(() => {
    const rainMaterial = new THREE.MeshBasicMaterial({
      color: 0x96e7ff,
      transparent: true,
      opacity: 0.375,
      side: THREE.DoubleSide
    })

    const positions = new Float32Array(RAIN_COUNT * 3)
    const velocities = new Float32Array(RAIN_COUNT)

    const plane = new THREE.PlaneGeometry(SCALE, SIZE)
    const rain = new THREE.InstancedMesh(plane, rainMaterial, RAIN_COUNT)

    for (let i = 0; i < RAIN_COUNT; i++) {
      positions[i * 3] = Math.random() * 23 - 12
      positions[i * 3 + 1] = Math.random() * (MAX_FALL_HEIGHT - (MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET))
      positions[i * 3 + 2] = Math.random() * -16 + 20
      velocities[i] = 0

      const matrix = new THREE.Matrix4()
      matrix.setPosition(new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]))
      rain.setMatrixAt(i, matrix)
    }

    setIsReady(true)

    return { rain, positions, velocities }
  }, [])

  useEffect(() => {
    const animate = () => {
      const { rain, positions, velocities } = rainRef

      for (let i = 0; i < RAIN_COUNT; i++) {
        velocities[i] = SPEED
        positions[i * 3 + 1] += velocities[i]
        positions[i * 3] += velocities[i] * SLANT

        if (positions[i * 3 + 1] < MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET) {
          positions[i * 3 + 1] = MAX_FALL_HEIGHT
          positions[i * 3] = Math.random() * 23 - 12
          velocities[i] = 0
        }

        const matrix = new THREE.Matrix4()
        matrix.setPosition(new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]))
        rain.setMatrixAt(i, matrix)
      }

      rain.instanceMatrix.needsUpdate = true

      requestAnimationFrame(animate)
    }
    animate()
  }, [rainRef])

  return isReady ? <primitive object={rainRef.rain as THREE.Object3D} /> : null
}

export default Rain
