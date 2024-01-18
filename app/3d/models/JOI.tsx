import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, Clock, Mesh } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three/examples/jsm/Addons.js'

const JOI = () => {
  const { scene, camera } = useThree()
  const mixer = useRef<AnimationMixer | null>(null)

  const gltf = useGLTF('/glb/JOI.glb')
  const gltfHair = useGLTF('/glb/JOI-Hair.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene
  const { actions } = useAnimations(animations, model)

  const head = nodes.rigHead // Access the head bone

  useEffect(() => {
    if (!model || !head) return

    scene.add(model)

    // Add the hair to the model
    const hair = gltfHair.nodes['JOI-Hair']

    // Clone the hair model and attach it to the spine bone
    const clonedHair = SkeletonUtils.clone(hair)
    head.add(clonedHair)

    clonedHair.position.set(0.01, 0.175, 0)
    clonedHair.rotation.set(-89.5, Math.PI, Math.PI) // Set all rotations at once to correct alignment

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

    return () => {
      // Remove the model from the scene
      scene.remove(model)
    }
  }, [model, scene, actions, animations, gltfHair, head])

  useFrame(() => {
    mixer.current?.update(new Clock().getDelta())

    // Make the neck bone look at the camera
    head?.lookAt(camera.position)
  })

  return null
}

export default JOI
