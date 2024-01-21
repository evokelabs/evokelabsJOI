import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, Clock, Matrix4, Mesh, Quaternion, Vector3 } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls } from 'leva' // Import useControls from leva

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { GLTF } from 'three/examples/jsm/Addons.js'

const JOI = () => {
  const { scene, camera } = useThree()
  const mixer = useRef<AnimationMixer | null>(null)

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene
  const { actions } = useAnimations(animations, model)

  const head = nodes.mixamorigHead as Mesh // Access the head bone
  const neck = nodes.mixamorigNeck as Mesh // Access the neck bone

  const { animation } = useControls({
    animation: {
      value: Object.keys(actions)[0], // Use the first animation as the initial value
      options: Object.keys(actions) // Use the names of the animations as options
    }
  })

  useEffect(() => {
    if (!model || !head) return

    scene.add(model)

    setInitialPositioning(gltf as GLTF)
    startEyeEmissionAnimation(gltf as GLTF)

    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(model)
      Object.values(actions).forEach(action => action!.play())
    }

    // Make the entire model receive shadows
    model.traverse(object => {
      if (object instanceof Mesh) {
        object.receiveShadow = true
      }
    })

    console.log(actions)

    return () => {
      // Remove the model from the scene
      scene.remove(model)
    }
  }, [model, scene, actions, animations, head, setInitialPositioning, gltf, startEyeEmissionAnimation])

  useEffect(() => {
    // Stop all animations
    Object.values(actions)?.forEach(action => action?.stop())

    // Play the selected animation
    actions?.[animation]?.play()
  }, [animation, actions])

  useFrame(() => {
    mixer.current?.update(new Clock().getDelta())

    if (head) {
      // Calculate the target rotation
      const targetRotation = new Quaternion().setFromRotationMatrix(
        new Matrix4().lookAt(head.position, camera.position, new Vector3(0, 0, 0))
      )

      // Create a new Quaternion for the offset
      const offset = new Quaternion().setFromAxisAngle(new Vector3(-1.5, 0, 0), Math.PI / 3.5) // Adjust the axis and angle to fit your needs

      // Apply the offset to the target rotation
      targetRotation.multiply(offset)

      // Interpolate between the current rotation and the target rotation
      head.quaternion.slerp(targetRotation, 0.65)
    }
  })
  return null
}

export default JOI
