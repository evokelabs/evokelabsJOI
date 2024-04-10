import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Group, Mesh, MeshBasicMaterial, Scene, VideoTexture } from 'three'
import { gsap } from 'gsap'
import { useDracoLoader } from '@/app/libs/useDracoLoader'
import { AnimationContext } from '@/app/libs/AnimationContext'
import ShutterSoundControl from '@/app/audio/ambienceSFX/ShuttersSoundControl'
import { cloudfrontURL } from '@/app/libs/cloudFrontURL'

const CyberpunkMap = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current
  const { setPointLightPlay, setAmbientLightPlay, shouldMapDarkness } = useContext(AnimationContext)
  const [playShutterAudio, setPlayShutterAudio] = useState(false)
  const [shutterAudioVolume, setShutterAudioVolume] = useState(0.45)
  const meshRef = useRef<Group>()
  const [modelLoaded, setModelLoaded] = useState(false)

  const animateIntroShutters = (object: Mesh<any, any, any>) => {
    object.castShadow = true
    gsap.to(object.position, {
      y: 2.7,
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
    const positionY = direction === 'up' ? 2.9 : 1.55
    const speed = 0.35
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
        if (object instanceof Mesh && object.name === 'Window_Shutters_Closed') {
          shouldMapDarkness ? animateShuttersDown(object) : animateShuttersUp(object)
        }
      })
    }
  }, [shouldMapDarkness])

  useEffect(() => {
    const videoTablet = document.createElement('video')
    videoTablet.src = `${cloudfrontURL}/videos/tablet.mp4`
    videoTablet.loop = true
    videoTablet.muted = true
    videoTablet.play()

    const videoTextureTablet = new VideoTexture(videoTablet)
    const videoMaterialTablet = new MeshBasicMaterial({ map: videoTextureTablet })

    gltfLoader.load(
      `${cloudfrontURL}/glb/EvokeLabsMap.glb`,
      gltf => {
        if (meshRef.current) {
          scene.remove(meshRef.current)
        }
        meshRef.current = gltf.scene
        scene.add(meshRef.current)
        meshRef.current.traverse(object => {
          if (object instanceof Mesh) {
            switch (object.name) {
              case 'Window_Glass_Main':
                object.castShadow = false
                break
              case 'Window_Shutters_Closed':
                animateIntroShutters(object)
                break
              case 'Wall_Curved_VendingMachine_Outdoor':
                object.castShadow = true
                break
              case 'VideoTexture-Tablet':
                object.material = videoMaterialTablet
                break
              default:
                object.castShadow = true
                object.receiveShadow = true
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

export default CyberpunkMap
