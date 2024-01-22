import { useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Matrix4, Mesh, Quaternion, Vector3 } from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/Addons.js'

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { useIdleAnimationPoseControl } from './controllers/useIdleAnimationPoseControl'

const JOI = () => {
  const { scene } = useThree()

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene

  useIdleAnimationPoseControl(animations, model, 1.2, true, 1.5)

  const head = nodes.mixamorigHead as Mesh // Access the head bone
  const neck = nodes.mixamorigNeck as Mesh // Access the neck bone

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

  useFrame(({ camera }) => {
    // if (head) {
    //   const targetRotation = new Quaternion().setFromRotationMatrix(
    //     new Matrix4().lookAt(head.position, camera.position, new Vector3(0, 1, 0))
    //   )
    //   const offset = new Quaternion().setFromAxisAngle(new Vector3(-1.5, 0, 0), Math.PI / 3.5)
    //   targetRotation.multiply(offset)
    //   head.quaternion.slerp(targetRotation, 0.2)
    // }
    if (head) {
      const targetRotation = new Quaternion().setFromRotationMatrix(
        new Matrix4().lookAt(head.position, camera.position, new Vector3(0, 0, 0))
      )
      const offset = new Quaternion().setFromAxisAngle(new Vector3(-1.5, 0, 0), Math.PI / 3.5)
      targetRotation.multiply(offset)
      head.quaternion.slerp(targetRotation, 1)
    }
  })

  return null
}

export default JOI
