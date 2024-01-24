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

import { gsap } from 'gsap'

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

  useEffect(() => {
    if (!model) return

    scene.add(model)

    console.log('JOI model loaded', model)

    setInitialPositioning(gltf as GLTF)
    startEyeEmissionAnimation(gltf as GLTF)

    model.traverse(object => {
      if (object instanceof Mesh && object.morphTargetDictionary && object.morphTargetInfluences) {
        object.receiveShadow = true
        console.log(object.name, 'morph targets:', object.morphTargetDictionary)

        if (object.morphTargetDictionary.Blink !== undefined) {
          console.log('Blinking')
          const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 })
          tl.to(object.morphTargetInfluences, {
            duration: 0.15,
            [object.morphTargetDictionary.Blink]: 1
          })
            .to(object.morphTargetInfluences, {
              duration: 0.05,
              [object.morphTargetDictionary.Blink]: 1
            })
            .to(object.morphTargetInfluences, {
              duration: 0.15,
              [object.morphTargetDictionary.Blink]: 0
            })
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
