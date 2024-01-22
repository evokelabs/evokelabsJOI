import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { GLTF } from 'three/examples/jsm/Addons.js'

import { useIdleAnimationPoseControl } from './controllers/useIdleAnimationPoseControl'

const JOI = () => {
  const { scene } = useThree()

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene
  const { actions } = useAnimations(animations, model)

  useIdleAnimationPoseControl(animations, model, 5, true)

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  useEffect(() => {
    if (!model) return

    scene.add(model)
    setInitialPositioning(gltf as GLTF)
    startEyeEmissionAnimation(gltf as GLTF)

    model.traverse(object => {
      if (object instanceof Mesh) {
        object.receiveShadow = true
      }
    })

    return () => {
      scene.remove(model)
    }
  }, [gltf, model, scene, setInitialPositioning, startEyeEmissionAnimation])

  return null
}

export default JOI
