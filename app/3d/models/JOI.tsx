import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, Clock } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'

const JOI = () => {
  const { scene } = useThree()
  const mixer = useRef<AnimationMixer | null>(null)

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene // Replace with the actual name of the root object in your model
  const { actions, names } = useAnimations(animations, model)

  useEffect(() => {
    if (model) {
      scene.add(model)
      console.log(animations)

      if (animations && animations.length > 0) {
        mixer.current = new AnimationMixer(model)
        Object.values(actions).forEach(action => action!.play())
      }
      model.position.x -= 0.1

      console.log(gltf.scene)

      return () => {
        // Remove the model from the scene
        scene.remove(model)
      }
    }
  }, [model, scene, actions, names, animations, gltf.scene])

  useFrame(() => {
    mixer.current?.update(new Clock().getDelta())
  })

  return null
}

export default JOI
