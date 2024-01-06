import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Rain = () => {
  const rainRef = useRef<THREE.Points>()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const rainCount = 15000
    const positions = new Float32Array(rainCount * 3)
    const velocities = new Float32Array(rainCount)

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3] = Math.random() * 400 - 200
      positions[i * 3 + 1] = Math.random() * 500 - 250
      positions[i * 3 + 2] = Math.random() * 400 - 200
      velocities[i] = 0
    }

    const rainGeo = new THREE.BufferGeometry()
    rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    rainGeo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1))

    const rainMaterial = new THREE.PointsMaterial({
      color: 0x96e7ff,
      size: 0.3,
      transparent: true
    })

    const rain = new THREE.Points(rainGeo, rainMaterial)
    rainRef.current = rain

    // Set isReady to true to trigger a re-render
    setIsReady(true)

    const animate = () => {
      const positions = rainGeo.attributes.position.array as Float32Array
      const velocities = rainGeo.attributes.velocity.array as Float32Array

      for (let i = 0; i < rainCount; i++) {
        velocities[i] -= 0.0005 + Math.random() * 0.0005
        positions[i * 3 + 1] += velocities[i]
        if (positions[i * 3 + 1] < -200) {
          positions[i * 3 + 1] = 200
          velocities[i] = 0
        }
      }

      rainGeo.attributes.position.needsUpdate = true
      rain.rotation.y += 0.002

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return isReady ? <primitive object={rainRef.current as THREE.Object3D} /> : null
}

export default Rain
