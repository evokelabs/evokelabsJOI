import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'

import { useDracoLoader } from './../../../libs/useDracoLoader'
import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'

// Constants
const MODEL_PATH = '/glb/JOI.glb'

const JOI = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  useEffect(() => {
    gltfLoader.load(
      MODEL_PATH,
      gltf => {
        setInitialPositioning(gltf)
        startEyeEmissionAnimation(gltf)
        scene.add(gltf.scene)
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
