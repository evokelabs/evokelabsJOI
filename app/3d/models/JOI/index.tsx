import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Matrix4, Mesh, Quaternion, Vector3 } from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/Addons.js'
import { gsap } from 'gsap'

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

  const weightRef = useRef(0) // Use useRef to preserve weight across renders

  useEffect(() => {
    const changeWeight = () => {
      const newWeight = Math.random() < 0.5 ? 0 : 1 // Use weightRef.current to access and modify the weight
      gsap.to(weightRef, {
        duration: 1.5,
        current: newWeight,
        onComplete: () => {
          console.log('change weight trigger', weightRef.current) // Log the updated weight
          const delay = Math.random() * 5000 + 5000 // Random delay between 5 and 10 seconds
          setTimeout(changeWeight, delay)
        }
      })
    }
    changeWeight()
  }, [])

  useFrame(() => {
    if (head) {
      const m1 = new Matrix4()
      const v1 = new Vector3()
      const v3 = new Vector3(0, 0, 0)
      const q1 = new Quaternion()
      v1.copy(camera.position)
      head.updateWorldMatrix(true, false)
      m1.copy(head.matrixWorld).invert()
      v1.applyMatrix4(m1)
      q1.copy(head.quaternion) // Save the original orientation
      head.quaternion.setFromRotationMatrix(m1.lookAt(v1, v3, head.up))
      head.quaternion.slerp(q1, weightRef.current)
    }
  })

  return null
}

export default JOI
