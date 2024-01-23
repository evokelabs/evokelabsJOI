import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Euler, Matrix4, Mesh, Quaternion, Vector3 } from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/Addons.js'

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { useIdleAnimationPoseControl } from './controllers/useIdleAnimationPoseControl'

const JOI = () => {
  const { scene, camera } = useThree()

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene

  useIdleAnimationPoseControl(animations, model, 1.2, true, 1.5)

  const head = nodes.mixamorigHead as Mesh // Access the head bone
  const neck = nodes.mixamorigNeck as Mesh // Access the neck bone

  const axisAngleVector = useRef(new Vector3(-1.5, 0, 0))
  const piValue = useRef(3.5)

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

  useFrame(() => {
    if (head) {
      const m1 = new Matrix4()
      const v1 = new Vector3()
      const v3 = new Vector3(0, 0, 0)
      const q1 = new Quaternion()
      const weight =  0 // Change this to control the weight
      v1.copy(camera.position)
      head.updateWorldMatrix(true, false)
      m1.copy(head.matrixWorld).invert()
      v1.applyMatrix4(m1)
      q1.copy(head.quaternion) // Save the original orientation
      head.quaternion.setFromRotationMatrix(m1.lookAt(v1, v3, head.up))
      head.quaternion.slerp(q1, weight)
    }
  })

  return null
}

export default JOI
