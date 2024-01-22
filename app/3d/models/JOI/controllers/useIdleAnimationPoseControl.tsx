import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AnimationAction, AnimationClip, AnimationMixer, Clock, Object3D } from 'three'
import { useControls } from 'leva'
import { shuffleArray } from '@/app/libs/helpers'

export const useIdleAnimationPoseControl = (
  animations: AnimationClip[],
  model: Object3D,
  timescale: number = 1,
  playPosesInOrder: boolean = false,
  animation_blend_time: number = 0.75
) => {
  const mixer = useRef<AnimationMixer | null>(null)

  const actionsRef = useRef<{ [name: string]: AnimationAction }>({})
  const isFirstRender = useRef(true)
  const currentActionIndex = useRef(0)
  const shuffledAnimationNamesRef = useRef<string[]>([])
  const clock = useRef(new Clock(false))

  const animationNames = animations.map(animation => animation.name)

  const { selectedAnimation } = useControls({
    selectedAnimation: {
      options: animationNames,
      value: animationNames[0]
    }
  })

  const shuffledAnimationNames = useMemo(() => {
    if (!playPosesInOrder) {
      return shuffleArray(Object.keys(actionsRef.current))
    } else {
      return animationNames
    }
  }, [playPosesInOrder, animationNames])

  // Define the listener function
  const onLoop = useCallback(
    (event: { action: AnimationAction; loopDelta: number }) => {
      // Use the shuffled animation names from the ref
      const actionNames = shuffledAnimationNamesRef.current

      currentActionIndex.current = (currentActionIndex.current + 1) % actionNames.length
      const nextAction = actionsRef.current[actionNames[currentActionIndex.current]]

      // Cross fade to the next action
      event.action.crossFadeTo(nextAction, animation_blend_time, true)

      // Stop the current action after the cross fade duration
      setTimeout(() => {
        event.action.stop()
      }, animation_blend_time * 1000) // Convert to milliseconds

      // Play the next action
      nextAction.play()
      console.log('looping triggered, playing', nextAction.getClip().name)
    },
    [animation_blend_time]
  )

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(model)
      mixer.current.timeScale = timescale

      // Create AnimationAction instances for each animation
      animations.forEach(animation => {
        const action = mixer.current!.clipAction(animation)
        actionsRef.current[animation.name] = action
      })

      // shuffledAnimationNamesRef.current = shuffledAnimationNames
      shuffledAnimationNamesRef.current = animationNames

      mixer.current.addEventListener('loop', onLoop)

      const firstAction = actionsRef.current[shuffledAnimationNamesRef.current[0]]
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
  }, [animationNames, animations, model, onLoop, playPosesInOrder, shuffledAnimationNames, timescale])

  useEffect(() => {
    // If it's the first render, do nothing
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // If an animation is selected, stop the current animation and play the selected one
    if (selectedAnimation) {
      // Remove the loop event listener
      mixer.current?.removeEventListener('loop', onLoop)

      // Stop all actions
      Object.values(actionsRef.current).forEach(action => action.stop())

      // Play the selected animation
      const selectedAction = actionsRef.current[selectedAnimation]
      console.log('playing', selectedAction.getClip().name)
      selectedAction?.play()
    } else {
      // If no animation is selected, add the loop event listener back
      mixer.current?.addEventListener('loop', onLoop)

      // Play the first animation in the shuffled list
      const firstAction = actionsRef.current[shuffledAnimationNamesRef.current[0]]
      firstAction?.play()
    }
  }, [onLoop, selectedAnimation])

  useFrame(() => {
    mixer.current?.update(clock.current.getDelta())
  })

  return { mixer, actionsRef, currentActionIndex, shuffledAnimationNamesRef, onLoop }
}
