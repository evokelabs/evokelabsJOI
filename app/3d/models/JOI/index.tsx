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
import { useMorphAnimation } from './controllers/useFacialMorphsAnimation'
import { useJOIVoice } from './controllers/useJOIVoice'

const JOI = () => {
  const { scene, camera } = useThree()

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene

  useIdleAnimationPoseControl(animations, model, 1, false, 1.75)

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()
  useEyesRotationAnimation(model, camera)
  useHeadAnimation(nodes)
  useEyesBlinkingAnimation(model as Mesh)
  useMorphAnimation(model)
  useJOIVoice(model)

  useEffect(() => {
    if (!model) return

    scene.add(model)

    setInitialPositioning(gltf as GLTF)
    startEyeEmissionAnimation(gltf as GLTF)

    model.traverse((object: THREE.Object3D) => {
      if (object instanceof Mesh) {
        const mesh = object as Mesh
        if (mesh.morphTargetDictionary && mesh.morphTargetInfluences) {
          mesh.receiveShadow = true
        }
      }
    })

    return () => {
      scene.remove(model)
    }
  }, [camera.position, gltf, model, scene, setInitialPositioning, startEyeEmissionAnimation])

  return null
}

export default JOI
