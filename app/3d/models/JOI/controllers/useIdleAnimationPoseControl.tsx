import { useEffect, useRef } from 'react'
import { AnimationAction, AnimationClip, AnimationMixer, Clock } from 'three'
import { useControls } from 'leva' // Import useControls from leva
import { shuffleArray } from '@/app/libs/helpers'
import { useFrame } from '@react-three/fiber'

export const useIdleAnimationPoseControl = (animations: any, model: any) => {
  const mixer = useRef<AnimationMixer | null>(null)
  const actionsRef = useRef<{ [name: string]: AnimationAction }>({})
  const shuffledAnimationNamesRef = useRef<string[]>([])
  const isFirstRender = useRef(true)
  const animationNames = animations.map((animation: any) => animation.name)

  const ANIMATION_BLEND_TIME = 0.75
  const TIMESCALE = 2
  const currentActionIndex = useRef(0)
  const clock = useRef(new Clock())

  const { selectedAnimation } = useControls({
    selectedAnimation: {
      options: animationNames,
      value: animationNames[0]
    }
  })

  const onLoop = (event: any) => {
    // Use the shuffled animation names from the ref
    const actionNames = shuffledAnimationNamesRef.current

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
    console.log('looping triggered, playing', nextAction.getClip().name)
  }

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
  }, [selectedAnimation])

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(model)
      mixer.current.timeScale = TIMESCALE

      // Create AnimationAction instances for each animation
      animations.forEach((animation: AnimationClip) => {
        const action = mixer.current!.clipAction(animation)
        actionsRef.current[animation.name] = action
      })

      shuffledAnimationNamesRef.current = shuffleArray(Object.keys(actionsRef.current))

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
  }, [animations, model])
  useFrame(() => {
    mixer.current?.update(clock.current.getDelta())
  })
  return null
}
