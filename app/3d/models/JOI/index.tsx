import { useThree } from '@react-three/fiber'

import { useModelLoader } from './../../../libs/useModelLoader'
import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'

// Constants
const MODEL_PATH = '/glb/JOI.glb'

const JOI = () => {
  const { scene } = useThree()

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  useModelLoader(
    [MODEL_PATH],
    [
      gltf => {
        setInitialPositioning(gltf)
        startEyeEmissionAnimation(gltf)
        scene.add(gltf.scene)
      }
    ]
  )

  return null
}

export default JOI
