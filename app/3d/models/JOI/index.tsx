import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, AnimationAction } from 'three'

import { useDracoLoader } from './../../../libs/useDracoLoader'
import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'

// Constants
const MODEL_PATH = '/glb/JOI.glb'

const JOI = () => {
  const { scene, clock } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current
  const mixerRef = useRef<AnimationMixer | null>(null)
  const actionRef = useRef<AnimationAction | null>(null)

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  useFrame(() => {
    if (mixerRef.current) {
      const delta = clock.getDelta()
      mixerRef.current.update(delta)
    }
  })

  useEffect(() => {
    gltfLoader.load(
      MODEL_PATH,
      gltf => {
        setInitialPositioning(gltf)
        startEyeEmissionAnimation(gltf)
        scene.add(gltf.scene)
        console.log('JOI model loaded', gltf)

        // Create an AnimationMixer instance
        const mixer = new AnimationMixer(gltf.scene)
        mixerRef.current = mixer

        // If there are animations, play the first one
        if (gltf.animations.length > 0) {
          const action = mixer.clipAction(gltf.animations[0])
          actionRef.current = action
          action.play()
        }
      },
      undefined,
      error => {
        console.error('An error occurred while loading the model:', error)
      }
    )
  }, [gltfLoader, scene, setInitialPositioning, startEyeEmissionAnimation])

  return null
}
export default JOI
