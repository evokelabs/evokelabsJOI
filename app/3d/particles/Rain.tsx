import { SoundControlContext } from '@/app/libs/SoundControlContext'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

// Rain settings
const MAX_FALL_HEIGHT = 10
const MIN_FALL_HEIGHT = 0
const MIN_FALL_HEIGHT_OFFSET = 6
const RAIN_COUNT = 5000
const SPEED = -0.15
const SCALE = 0.5
const SIZE = 0.003
const ROTATION = 0.75
const SLANT = 0.05

const Rain = () => {
  const [isReady, setIsReady] = useState(false)
  const { muteRain } = useContext(SoundControlContext)

  const rainRef = useMemo(() => {
    const rainMaterial = new THREE.MeshBasicMaterial({
      color: 0xe1f8ff,
      transparent: true,
      opacity: 0.375,
      side: THREE.DoubleSide
    })

    const positions = new Float32Array(RAIN_COUNT * 3)
    const velocities = new Float32Array(RAIN_COUNT)

    // Create a single plane using BufferGeometry
    const planeGeometry = new THREE.BufferGeometry()
    const vertices = new Float32Array([
      -0.5 * SCALE,
      -0.5 * SIZE,
      0,
      0.5 * SCALE,
      -0.5 * SIZE,
      0,
      0.5 * SCALE,
      0.5 * SIZE,
      0,

      -0.5 * SCALE,
      -0.5 * SIZE,
      0,
      0.5 * SCALE,
      0.5 * SIZE,
      0,
      -0.5 * SCALE,
      0.5 * SIZE,
      0
    ])
    planeGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

    // Use InstancedBufferGeometry to create instances of the plane
    const rainGeometry = new THREE.InstancedBufferGeometry()
    rainGeometry.setAttribute('position', planeGeometry.getAttribute('position'))

    const rain = new THREE.InstancedMesh(rainGeometry, rainMaterial, RAIN_COUNT)

    const matrix = new THREE.Matrix4()
    const position = new THREE.Vector3()

    const rotationMatrix = new THREE.Matrix4().makeRotationZ(ROTATION)

    for (let i = 0; i < RAIN_COUNT; i++) {
      positions[i * 3] = Math.random() * 23 - 12
      positions[i * 3 + 1] = Math.random() * (MAX_FALL_HEIGHT - (MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET))
      positions[i * 3 + 2] = Math.random() * -16 + 20
      velocities[i] = 0

      position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
      matrix.makeRotationZ(ROTATION) // Apply rotation to matrix
      matrix.multiply(rotationMatrix)
      matrix.setPosition(position)
      rain.setMatrixAt(i, matrix)
    }

    setIsReady(true)

    return { rain, positions, velocities, matrix, position }
  }, [])

  const muteRainRef = useRef(muteRain)
  useEffect(() => {
    muteRainRef.current = muteRain
  }, [muteRain])

  useEffect(() => {
    const animate = () => {
      const { rain, positions, velocities, matrix, position } = rainRef

      for (let i = 0; i < RAIN_COUNT; i++) {
        velocities[i] = SPEED
        positions[i * 3 + 1] += velocities[i]
        positions[i * 3] += velocities[i] * SLANT

        if (positions[i * 3 + 1] < MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET) {
          // if (!muteRainRef.current) {
          // Reposition every raindrop that falls below the minimum height
          // Randomize the height at which each raindrop is repositioned
          positions[i * 3 + 1] = Math.random() * (MAX_FALL_HEIGHT - (MIN_FALL_HEIGHT - MIN_FALL_HEIGHT_OFFSET)) + MIN_FALL_HEIGHT
          positions[i * 3] = Math.random() * 23 - 12
          velocities[i] = 0
          // }
        }

        position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
        matrix.setPosition(position)
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
