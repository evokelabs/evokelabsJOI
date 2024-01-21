import { useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationClip, AnimationMixer, Clock, Group, LoopOnce } from 'three'
import { useAnimations } from '@react-three/drei'

import { useDracoLoader } from './../../../libs/useDracoLoader'
import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'

// Constants
const MODEL_PATH = '/glb/JOI.glb'

const JOI = () => {
  const { scene } = useThree()
  const mixer = useRef<AnimationMixer | null>(null)
  const gltfLoader = useRef(useDracoLoader()).current
  const [model, setModel] = useState<Group | null>(null)
  const [animations, setAnimations] = useState<AnimationClip[] | null>(null)
  const currentAnimationIndex = useRef(0)

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  const { actions } = useAnimations(animations || [], model || undefined)

  useEffect(() => {
    gltfLoader.load(
      MODEL_PATH,
      gltf => {
        const loadedModel = gltf.scene
        setModel(loadedModel)
        setAnimations(gltf.animations)

        setInitialPositioning(gltf)
        startEyeEmissionAnimation(gltf)
        scene.add(loadedModel)
        console.log('JOI model loaded', gltf)

        if (gltf.animations && gltf.animations.length > 0) {
          mixer.current = new AnimationMixer(loadedModel)
          const action = mixer.current.clipAction(gltf.animations[currentAnimationIndex.current])
          action.play()
        }

        // Cleanup function
        return () => {
          scene.remove(loadedModel)
          if (mixer.current) {
            mixer.current.stopAllAction()
          }
        }
      },
      undefined,
      error => {
        console.error('An error occurred while loading the model:', error)
      }
    )
  }, [gltfLoader, scene, setInitialPositioning, startEyeEmissionAnimation])

  useEffect(() => {
    if (actions && mixer.current) {
      const actionKeys = Object.keys(actions)

      const playAnimation = (index: number) => {
        const action = actions[actionKeys[index]]
        if (action) {
          action.loop = LoopOnce
          action.clampWhenFinished = true
          action.play()
        }
      }

      playAnimation(currentAnimationIndex.current)

      const handleAnimationFinished = function (e: any) {
        console.log('finished')
        if (mixer.current) {
          const currentAction = actions[actionKeys[currentAnimationIndex.current]]
          if (currentAction) {
            currentAction.stop()
          }
          currentAnimationIndex.current = (currentAnimationIndex.current + 1) % actionKeys.length
          playAnimation(currentAnimationIndex.current)
        }
      }

      mixer.current.addEventListener('finished', handleAnimationFinished)

      // Cleanup function
      return () => {
        if (mixer.current) {
          mixer.current.removeEventListener('finished', handleAnimationFinished)
        }
      }
    }
  }, [actions])

  useFrame((state, delta) => {
    mixer.current?.update(new Clock().getDelta())
  })

  return null
}

export default JOI
