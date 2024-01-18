import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, Box3, Clock, Mesh, Object3D, Vector3 } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'

const JOI = () => {
  const { scene, camera } = useThree()
  const mixer = useRef<AnimationMixer | null>(null)

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene // Replace with the actual name of the root object in your model
  const { actions, names } = useAnimations(animations, model)

  const head = nodes.rigHead // Access the head bone

  useEffect(() => {
    if (model) {
      scene.add(model)

      if (animations && animations.length > 0) {
        mixer.current = new AnimationMixer(model)
        Object.values(actions).forEach(action => action!.play())
      }

      model.position.x -= 0.1

      const eyeLeftObject = new Object3D()
      const eyeRightObject = new Object3D()

      model.add(eyeLeftObject)
      model.add(eyeRightObject)

      return () => {
        // Remove the model from the scene
        scene.remove(model)
      }
    }
  }, [model, scene, actions, names, animations])

  useFrame(() => {
    mixer.current?.update(new Clock().getDelta())

    // Make the head bone look at the camera
    if (head) {
      head.lookAt(camera.position)
    }
  })

  return null
}

export default JOI
