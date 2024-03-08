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
  const { setPointLightPlay, setAmbientLightPlay, setShouldMapDarkness, shouldMapDarkness } = useContext(AnimationContext)
  const [playShutterAudio, setPlayShutterAudio] = useState(false)
  const meshRef = useRef<Group>()

  const shouldMapDarknessRef = useRef(shouldMapDarkness)

  const animateIntroShutters = (object: Mesh<any, any, any>) => {
    object.castShadow = true
    gsap.to(object.position, {
      y: 2.7,
      duration: 3.25,
      delay: 6.5,
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

  const animateShuttersUp = useCallback(
    (object: Mesh<any, any, any>) => {
      console.log('animateShuttersUp')
      gsap.to(object.position, {
        y: 2.7,
        duration: 3.25,
        ease: 'linear',
        onStart: () => {
          setPlayShutterAudio(true)
          setPointLightPlay(true)
        },
        onComplete: () => {
          setPlayShutterAudio(false)
        }
      })
    },

    [setPlayShutterAudio, setPointLightPlay]
  )
  const animateShuttersDown = useCallback(
    (object: Mesh<any, any, any>) => {
      console.log('animateShuttersDown')
      gsap.to(object.position, {
        y: 0,
        duration: 3.25,
        ease: 'linear',
        onStart: () => {
          setPlayShutterAudio(true)
          setPointLightPlay(true)
        },
        onComplete: () => {
          setPlayShutterAudio(false)
        }
      })
    },
    [setPlayShutterAudio, setPointLightPlay]
  )

  useEffect(() => {
    shouldMapDarknessRef.current = shouldMapDarkness
  }, [shouldMapDarkness])

  useEffect(() => {
    console.log('useEffect shouldMapDarkness triggered,' + shouldMapDarknessRef.current)
    if (meshRef.current) {
      meshRef.current.traverse(object => {
        if (object instanceof Mesh && object.name === 'Window_Shutters_Closed') {
          if (shouldMapDarknessRef.current) {
            animateShuttersUp(object)
          } else {
            animateShuttersDown(object)
          }
        }
      })
    }
  }, [animateShuttersDown, animateShuttersUp, shouldMapDarknessRef])

  useEffect(() => {
    const videoTablet = document.createElement('video')
    videoTablet.src = '/videos/tablet.mp4'
    videoTablet.loop = true
    videoTablet.muted = true
    videoTablet.play()
    setShouldMapDarkness(true)

    // Create video textures
    const videoTextureTablet = new VideoTexture(videoTablet)

    const videoMaterialTablet = new MeshBasicMaterial({
      map: videoTextureTablet
    })

    gltfLoader.load(
      '/glb/EvokelabsRoom.glb',
      gltf => {
        if (meshRef.current) {
          scene.remove(meshRef.current)
        }
        meshRef.current = gltf.scene
        scene.add(meshRef.current)
        meshRef.current.traverse(object => {
          // console.log('Traversed object:', object)
          // console.log('Is Mesh:', object instanceof Mesh)
          // console.log('Name:', object.name)
          if (object instanceof Mesh) {
            switch (object.name) {
              case 'Window_Glass_Main':
                object.castShadow = false
                break
              case 'Window_Shutters_Closed':
                console.log('Window_Shutters_Closed found')
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
  }, [scene, gltfLoader, setPointLightPlay, setAmbientLightPlay, shouldMapDarkness])

  return playShutterAudio ? <ShutterSoundControl volume={0.45} delay={0} transitionDuration={0} loop={false} /> : null
}

export default CyberpunkMap
