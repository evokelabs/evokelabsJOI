import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationMixer, AnimationAction, Clock, Mesh } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls } from 'leva' // Import useControls from leva

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { GLTF } from 'three/examples/jsm/Addons.js'

const ANIMATION_BLEND_TIME = 0.75
const TIMESCALE = 5

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

  const head = nodes.mixamorigHead as Mesh
  const neck = nodes.mixamorigNeck as Mesh

  const clock = useRef(new Clock())

  const currentActionIndex = useRef(0)

  const animationNames = animations.map(animation => animation.name)

  const { selectedAnimation } = useControls({
    selectedAnimation: {
      options: animationNames,
      value: animationNames[0]
    }
  })

  useEffect(() => {
    if (selectedAnimation && actionsRef.current[selectedAnimation]) {
      const event = { action: actionsRef.current[selectedAnimation] }
      onLoop(event)
    }
  }, [selectedAnimation])

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

  // Define the listener function
  const onLoop = (event: any) => {
    const actionNames = Object.keys(actionsRef.current)

    currentActionIndex.current = (currentActionIndex.current + 1) % actionNames.length
    const nextAction = actionsRef.current[actionNames[currentActionIndex.current]]

    // Crossfade to the next action
    event.action.crossFadeTo(nextAction, ANIMATION_BLEND_TIME, true)

    // Stop the current action after the crossfade duration
    setTimeout(() => {
      event.action.stop()
    }, ANIMATION_BLEND_TIME * 1000) // Convert to milliseconds

    // Play the next action
    nextAction.play()
    console.log('looping triggered, playing', nextAction)
  }

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(model)
      mixer.current.timeScale = TIMESCALE

      // Create AnimationAction instances for each animation
      animations.forEach(animation => {
        const action = mixer.current!.clipAction(animation)
        actionsRef.current[animation.name] = action
      })

      mixer.current.addEventListener('loop', onLoop)

      const firstAction = actionsRef.current[Object.keys(actionsRef.current)[0]]
      firstAction?.play()

      // Capture the current value of clock.current in a variable
      const currentClock = clock.current
      const currentActionsRef = actionsRef.current
      currentClock.start()

      // Use the captured value in the cleanup function
      return () => {
        mixer.current?.removeEventListener('loop', onLoop)
        currentClock.stop()
        Object.values(currentActionsRef).forEach(action => action.stop())
      }
    }
  }, [actions, animations, model])

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
