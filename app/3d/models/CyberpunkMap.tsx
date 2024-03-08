import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Group, Mesh, MeshBasicMaterial, Scene, VideoTexture } from 'three'
import { gsap } from 'gsap'
import { useDracoLoader } from '@/app/libs/useDracoLoader'
import { AnimationContext } from '@/app/libs/AnimationContext'
import ShutterSoundControl from '@/app/audio/environment/ShuttersSoundControl'

const CyberpunkMap = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current
  const { setPointLightPlay, setAmbientLightPlay, shouldMapDarkness } = useContext(AnimationContext)
  const [playShutterAudio, setPlayShutterAudio] = useState(false)
  const meshRef = useRef<Group>()
  const [modelLoaded, setModelLoaded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const animateShutters = useCallback((object: Mesh<any, any, any>, positionY: number) => {
    console.log('animateShutters')
    if (isAnimating) return

    setIsAnimating(true)

    gsap.to(object.position, {
      y: positionY,
      duration: 1,
      ease: 'linear',
      onStart: () => {
        if (!playShutterAudio) {
          // setPlayShutterAudio(true)
        }
        setPointLightPlay(true)
      },
      onComplete: () => {
        setPlayShutterAudio(false)
        setIsAnimating(false)
      }
    })
  }, [])

  const animateShuttersUp = (object: Mesh<any, any, any>) => animateShutters(object, 2.7)
  const animateShuttersDown = (object: Mesh<any, any, any>) => animateShutters(object, 1.62)

  useEffect(() => {
    if (modelLoaded && meshRef.current && !isAnimating) {
      meshRef.current.traverse(object => {
        if (object instanceof Mesh && object.name === 'Window_Shutters_Closed') {
          shouldMapDarkness ? animateShuttersUp(object) : animateShuttersDown(object)
        }
      })
    }
  }, [animateShuttersDown, animateShuttersUp, modelLoaded])

  useEffect(() => {
    const videoTablet = document.createElement('video')
    videoTablet.src = '/videos/tablet.mp4'
    videoTablet.loop = true
    videoTablet.muted = true
    videoTablet.play()

    const videoTextureTablet = new VideoTexture(videoTablet)
    const videoMaterialTablet = new MeshBasicMaterial({ map: videoTextureTablet })

    gltfLoader.load(
      '/glb/EvokelabsRoom.glb',
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
                animateShuttersUp(object)
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

  return playShutterAudio ? <ShutterSoundControl volume={0.45} delay={0} transitionDuration={0} loop={false} /> : null
}

export default CyberpunkMap
