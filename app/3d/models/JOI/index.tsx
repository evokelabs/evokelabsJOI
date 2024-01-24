import { useEffect } from 'react'
import { Mesh } from 'three'
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/Addons.js'

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { useIdleAnimationPoseControl } from './controllers/useIdleAnimationPoseControl'
import { useHeadAnimation } from './controllers/useHeadAnimation'
import { useEyesRotationAnimation } from './controllers/useEyesRotationAnimation'

import { useEyesBlinkingAnimation } from './controllers/useEyesBlinkingAnimation'

const JOI = () => {
  const { scene, camera } = useThree()

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene

  useIdleAnimationPoseControl(animations, model, 1, false, 1.5)

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()
  useEyesRotationAnimation(model, camera)
  useHeadAnimation(nodes)
  useEyesBlinkingAnimation(model as Mesh)

  useEffect(() => {
    if (!model) return

    scene.add(model)

    setInitialPositioning(gltf as GLTF)
    startEyeEmissionAnimation(gltf as GLTF)

    model.traverse(object => {
      if (object instanceof Mesh && object.morphTargetDictionary && object.morphTargetInfluences) {
        object.receiveShadow = true
      }
    })

    return () => {
      scene.remove(model)
    }
  }, [camera.position, gltf, model, scene, setInitialPositioning, startEyeEmissionAnimation])

  return null
}

export default JOI
