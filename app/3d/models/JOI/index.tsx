import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, AnimationAction, Clock, Matrix4, Mesh, Quaternion, Vector3 } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls } from 'leva' // Import useControls from leva

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { GLTF } from 'three/examples/jsm/Addons.js'

const JOI = () => {
  const { scene, camera } = useThree()
  const mixer = useRef<AnimationMixer | null>(null)
  const actionsRef = useRef<{ [name: string]: AnimationAction }>({})

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene
  const { actions } = useAnimations(animations, model)

  const head = nodes.mixamorigHead as Mesh // Access the head bone
  const neck = nodes.mixamorigNeck as Mesh // Access the neck bone

  const clock = useRef(new Clock())

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

    model.traverse(object => {
      if (object instanceof Mesh) {
        object.receiveShadow = true
      }
    })

    return () => {
      scene.remove(model)
    }
  }, [model, scene, actions, animations, head, setInitialPositioning, gltf, startEyeEmissionAnimation])

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(model)

      // Create AnimationAction instances for each animation
      animations.forEach(animation => {
        const action = mixer.current!.clipAction(animation)
        actionsRef.current[animation.name] = action
      })

      const firstAction = actionsRef.current[Object.keys(actionsRef.current)[0]]

      firstAction?.play()
      clock.current.start()

      // Define the listener function
      const onLoop = (event: any) => {
        if (event.action === firstAction) {
          console.log('Animation looped!')
          // Add your callback logic here
        }
      }

      // Add a loop event listener to the first action
      // Add a loop event listener to the first action
      mixer.current?.addEventListener('loop', onLoop)

      // Clean up the event listener when the component is unmounted or the dependencies change
      return () => {
        mixer.current?.removeEventListener('loop', onLoop)
      }
    }
  }, [actions, animation, animations, clock, model])

  useFrame(() => {
    mixer.current?.update(clock.current.getDelta())

    // if (head) {
    //   const targetRotation = new Quaternion().setFromRotationMatrix(
    //     new Matrix4().lookAt(head.position, camera.position, new Vector3(0, 0, 0))
    //   )

    //   const offset = new Quaternion().setFromAxisAngle(new Vector3(-1.5, 0, 0), Math.PI / 3.5)
    //   targetRotation.multiply(offset)

    //   head.quaternion.slerp(targetRotation, 0.5)
    // }
  })
  return null
}

export default JOI
