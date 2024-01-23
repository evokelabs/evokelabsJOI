import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Matrix4, Mesh, Quaternion, Vector3 } from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/Addons.js'

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { useIdleAnimationPoseControl } from './controllers/useIdleAnimationPoseControl'
import { GUI } from 'dat.gui'

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
    const gui = new GUI()
    gui.add(axisAngleVector.current, 'x', -10, 10).step(0.1).name('AxisAngle X')
    gui.add(axisAngleVector.current, 'y', -10, 10).step(0.1).name('AxisAngle Y')
    gui.add(axisAngleVector.current, 'z', -10, 10).step(0.1).name('AxisAngle Z')
    gui.add(piValue, 'current', 0, 10).step(0.1).name('Pi Value')
  }, [])

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

  const lowestPoint = 1
  const highestPoint = 2

  const headTiltDown = 6
  const headTiltUp = 2.5

  useFrame(() => {
    if (head) {
      const targetRotation = new Quaternion().setFromRotationMatrix(
        new Matrix4().lookAt(head.position, camera.position, new Vector3(0, 0, 0))
      )

      piValue.current = headTiltDown + ((camera.position.y - lowestPoint) / (highestPoint - lowestPoint)) * (headTiltUp - headTiltDown)

      const offset = new Quaternion().setFromAxisAngle(axisAngleVector.current, Math.PI / piValue.current)
      targetRotation.multiply(offset)
      head.quaternion.slerp(targetRotation, 1)
    }
  })

  return null
}

export default JOI
