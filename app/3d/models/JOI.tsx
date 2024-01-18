import { useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, Clock, Object3D } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

const JOI = () => {
  const { scene, camera } = useThree()
  const mixer = useRef<AnimationMixer | null>(null)

  const gltf = useGLTF('/glb/JOI.glb')
  const gltfHair = useGLTF('/glb/JOI-Hair.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene // Replace with the actual name of the root object in your model
  const { actions, names } = useAnimations(animations, model)

  const head = nodes.rigHead // Access the head bone

  // const [rotationX, setRotationX] = useState(Math.PI / 4) // Initial rotation

  useEffect(() => {
    if (model) {
      scene.add(model)

      // Add the hair to the model
      const hair = gltfHair.nodes['JOI-Hair'] // Replace with the actual name of the hair object in your model

      // Clone the hair model and attach it to the spine bone
      const clonedHair = SkeletonUtils.clone(hair)
      head.add(clonedHair)

      clonedHair.position.set(0.01, 0.175, 0)

      clonedHair.rotation.x = -89.5 // Use the state variable for the rotation
      clonedHair.rotation.y = Math.PI // Rotate 180 degrees around the y-axis
      clonedHair.rotation.z = Math.PI // Rotate 90 degrees around the z-axis

      if (animations && animations.length > 0) {
        mixer.current = new AnimationMixer(model)
        Object.values(actions).forEach(action => action!.play())
      }

      return () => {
        // Remove the model from the scene
        scene.remove(model)
      }
    }
  }, [model, scene, actions, names, animations, gltfHair, head]) // Add rotationX to the dependency array

  useFrame(() => {
    mixer.current?.update(new Clock().getDelta())

    // Make the neck bone look at the camera
    if (head) {
      head.lookAt(camera.position)
    }
  })

  return null
}

export default JOI
