import { useCallback, useEffect, useMemo, useRef } from 'react'
import { AnimationAction, AnimationClip, AnimationMixer, Clock, Object3D } from 'three'
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
  const currentActionIndex = useRef(0)
  const clock = useRef(new Clock())

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
        },
        onComplete: function () {
          event.action.stop()
        }
      })

      nextAction.play()
      // console.log('looping triggered, playing', nextAction.getClip().name)
    },
    [animationBlendTime]
  )

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

      // If playPosesInOrder is false, ensure 'Idle-00-BootUp' is the first animation to play
      if (!playPosesInOrder) {
        const index = shuffledAnimationNamesRef.current.indexOf('Idle-00-BootUp')
        if (index > -1) {
          shuffledAnimationNamesRef.current.splice(index, 1)
        }
        shuffledAnimationNamesRef.current.unshift('Idle-00-BootUp')
      }

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
