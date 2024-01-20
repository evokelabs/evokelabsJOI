import { useEffect, useRef, useMemo, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Scene } from 'three'
import { useAnimations } from '@react-three/drei'
import { useControls } from 'leva'
import { useDracoLoader } from '@/app/libs/useDracoLoader'

const JOI = () => {
  const { scene } = useThree()

  const gltfLoader = useDracoLoader()

  useEffect(() => {
    gltfLoader.load(
      '/glb/JOI.glb',
      gltf => {
        scene.add(gltf.scene)
      },
      undefined,
      error => {
        console.error('An error occurred while loading the model:', error)
      }
    )

    return () => {
      scene.children.forEach(child => {
        if (child instanceof Scene) scene.remove(child)
      })
    }
  }, [gltfLoader, scene])

  // useFrame(() => {
  //   mixer.current?.update(new Clock().getDelta())
  // })

  return null
}

export default JOI
