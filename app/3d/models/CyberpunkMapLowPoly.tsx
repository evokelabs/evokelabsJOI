import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Group, Mesh, Scene } from 'three'
import { gsap } from 'gsap'
import { useDracoLoader } from '@/app/libs/useDracoLoader'
import { AnimationContext } from '@/app/libs/AnimationContext'
import ShutterSoundControl from '@/app/audio/ambienceSFX/ShuttersSoundControl'
import { cloudfrontURL } from '@/app/libs/cloudfrontURL'

const CyberpunkMapLowPoly = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current
  const { setPointLightPlay, setAmbientLightPlay, shouldMapDarkness } = useContext(AnimationContext)
  // Controls shutter audio
  const [playShutterAudio, setPlayShutterAudio] = useState(false)
  const [shutterAudioVolume, setShutterAudioVolume] = useState(0.45)
  const meshRef = useRef<Group>()
  const [modelLoaded, setModelLoaded] = useState(false)

  const animateIntroShutters = (object: Mesh<any, any, any>) => {
    object.castShadow = true
    gsap.to(object.position, {
      y: 52,
      duration: 3.25,
      delay: 6,
      ease: 'linear',
      onStart: () => {
        setPlayShutterAudio(true)
        setAmbientLightPlay(true)

        gsap.delayedCall(3, () => {
          setPointLightPlay(true)
        })
      },
      onComplete: () => {
        setPlayShutterAudio(false)
      }
    })
  }

  const isAnimatingRef = useRef(false)

  const animateShutters = useCallback((object: Mesh<any, any, any>, direction: 'up' | 'down') => {
    const positionY = direction === 'up' ? 52 : 0
    const speed = 15
    const pointLightState = direction === 'up'

    if (isAnimatingRef.current) {
      gsap.killTweensOf(object.position)
      // isAnimatingRef.current = false
    }

    const distance = Math.abs(object.position.y - positionY)
    const duration = distance / speed

    gsap.to(object.position, {
      y: positionY,
      duration: duration,
      ease: 'power1.out',
      onStart: () => {
        if (!playShutterAudio) {
          setShutterAudioVolume(0.2)
        }
        isAnimatingRef.current = true
        setPointLightPlay(pointLightState)
      },
      onComplete: () => {
        isAnimatingRef.current = false
      }
    })
  }, [])

  const animateShuttersUp = (object: Mesh<any, any, any>) => animateShutters(object, 'up')
  const animateShuttersDown = (object: Mesh<any, any, any>) => animateShutters(object, 'down')

  useEffect(() => {
    if (modelLoaded && meshRef.current) {
      meshRef.current.traverse(object => {
        if (object instanceof Mesh && object.name === 'Window_Shutters_Closed_1') {
          shouldMapDarkness ? animateShuttersDown(object) : animateShuttersUp(object)
        } else if (object instanceof Mesh && object.name === 'Window_Shutters_Closed_2') {
          shouldMapDarkness ? animateShuttersDown(object) : animateShuttersUp(object)
        }
      })
    }
  }, [shouldMapDarkness])

  useEffect(() => {
    gltfLoader.load(
      `${cloudfrontURL}/glb/EvokeLabsMap-LowPoly.glb`,
      gltf => {
        if (meshRef.current) {
          scene.remove(meshRef.current)
        }
        meshRef.current = gltf.scene
        scene.add(gltf.scene)
        gltf.scene.traverse(object => {
          if (object instanceof Mesh) {
            switch (object.name) {
              case 'Window_Shutters_Closed_1':
                animateIntroShutters(object)
                break
              case 'Window_Shutters_Closed_2':
                object.castShadow = true
                animateIntroShutters(object)
                break

              default:
                object.castShadow = false
                object.receiveShadow = false
                break
            }
            setModelLoaded(true)
          }
        })
      },
      undefined,
      error => {
        console.error('An error occurred while loading the model:', error)
      }
    )

    return () => {
      scene.children.forEach(child => {
        if (child instanceof Scene) scene.remove(child)
      })
    }
  }, [scene, gltfLoader])

  return playShutterAudio ? <ShutterSoundControl volume={shutterAudioVolume} delay={0} transitionDuration={0} loop={false} /> : null
}

export default CyberpunkMapLowPoly
