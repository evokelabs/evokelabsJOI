import { useCallback, useEffect, useMemo, useRef } from 'react'
import { AnimationAction, AnimationClip, AnimationMixer, Clock, Object3D } from 'three'
import { useControls } from 'leva' // Import useControls from leva
import { shuffleArray } from '@/app/libs/helpers'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'

export const useIdleAnimationPoseControl = (
  animations: AnimationClip[],
  model: Object3D,
  timescale: number = 1,
  playPosesInOrder: boolean = false,
  animationBlendTime: number = 0.75
) => {
  const mixer = useRef<AnimationMixer | null>(null)
  const actionsRef = useRef<{ [name: string]: AnimationAction }>({})
  const shuffledAnimationNamesRef = useRef<string[]>([])
  const isFirstRender = useRef(true)
  const animationNames = animations.map(animation => animation.name)
  const currentActionIndex = useRef(0)
  const clock = useRef(new Clock())

  const { selectedAnimation } = useControls({
    selectedAnimation: {
      options: animationNames,
      value: animationNames[0]
    }
  })

  shuffledAnimationNamesRef.current = useMemo(() => {
    const animationNames = animations.map(animation => animation.name)
    return playPosesInOrder ? [...animationNames] : shuffleArray(animationNames)
  }, [animations, playPosesInOrder])

  // Store a reference to the GSAP animation
  const gsapAnimation = useRef<gsap.core.Tween | null>(null)

  // Cleanup function
  const cleanup = useCallback((action: AnimationAction | null) => {
    if (gsapAnimation.current) {
      gsapAnimation.current.kill()
      gsapAnimation.current = null
      if (action) {
        action.stop()
      }
    }
  }, [])


  const onLoop = useCallback(
    (event: { action: AnimationAction; loopDelta: number }) => {
      // If the GSAP animation is still active when onLoop is called again, return early
      if (gsapAnimation.current && gsapAnimation.current.isActive()) {
        return
      }

      const actionNames = shuffledAnimationNamesRef.current

      console.log('actionNames', actionNames)

      currentActionIndex.current = (currentActionIndex.current + 1) % actionNames.length
      const nextAction = actionsRef.current[actionNames[currentActionIndex.current]]

      const blendTime = { value: 0 }

      gsapAnimation.current = gsap.to(blendTime, {
        value: 1,
        duration: animationBlendTime,
        ease: 'power1.inOut',
        onUpdate: function () {
          // Manually control the weights of the two actions
          event.action.setEffectiveWeight(1 - blendTime.value)
          nextAction.setEffectiveWeight(blendTime.value)

          // If the current animation is 'Idle-00-BootUp' and it has finished playing, remove it from actionNames
          if (event.action.getClip().name === 'Idle-00-BootUp' && blendTime.value === 1) {
            const index = actionNames.indexOf('Idle-00-BootUp')
            if (index > -1) {
              actionNames.splice(index, 1)
              // Decrement currentActionIndex.current by one
              currentActionIndex.current -= 1
            }
          }
        },
        onComplete: function () {
          event.action.stop()
        }
      })

      nextAction.play()
      console.log('looping triggered, playing', nextAction.getClip().name)
    },
    [animationBlendTime]
  )

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

    // Return the cleanup function
    return () => {
      cleanup(null)
    }
  }, [selectedAnimation, onLoop, cleanup])

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(model)
      mixer.current.timeScale = timescale

      // Create AnimationAction instances for each animation
      animations.forEach((animation: AnimationClip) => {
        const action = mixer.current!.clipAction(animation)
        actionsRef.current[animation.name] = action
      })

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
  }, [animations, model, onLoop, playPosesInOrder, timescale])
  useFrame(() => {
    mixer.current?.update(clock.current.getDelta())
  })
  return null
}
