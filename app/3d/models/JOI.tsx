import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, Clock, Mesh, Vector3 } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls } from 'leva' // Import useControls from leva
import { SkeletonUtils } from 'three-stdlib'

const JOI = () => {
  const { scene, camera } = useThree()
  const mixer = useRef<AnimationMixer | null>(null)

  const gltf = useGLTF('/glb/JOI.glb')
  const gltfHair = useGLTF('/glb/JOI-Hair.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene
  const { actions } = useAnimations(animations, model)

  const head = nodes.rigHead as Mesh // Access the head bone
  const neck = nodes.rigNeck as Mesh // Access the neck bone

  const { animation } = useControls({
    animation: {
      value: Object.keys(actions)[0], // Use the first animation as the initial value
      options: Object.keys(actions) // Use the names of the animations as options
    }
  })

  useEffect(() => {
    if (!model || !head) return

    scene.add(model)

    // Add the hair to the model
    const hair = gltfHair.nodes['JOI-Hair'] as Mesh

    // Clone the hair model and attach it to the spine bone
    const clonedHair = SkeletonUtils.clone(hair) as Mesh
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

    console.log(actions)

    return () => {
      // Remove the model from the scene
      scene.remove(model)
    }
  }, [model, scene, actions, animations, gltfHair, head])

  useEffect(() => {
    // Stop all animations
    Object.values(actions)?.forEach(action => action?.stop())

    // Play the selected animation
    actions?.[animation]?.play()
  }, [animation, actions])

  useFrame(() => {
    mixer.current?.update(new Clock().getDelta())

    if (neck) {
      const midpoint = new Vector3().addVectors(neck.position, camera.position).multiplyScalar(0.5)
      neck.lookAt(midpoint)
    }

    head?.lookAt(camera.position)
  })

  return null
}

export default JOI
