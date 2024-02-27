import { useContext, useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, MeshBasicMaterial, Scene, VideoTexture } from 'three'
import { gsap } from 'gsap'
import { useDracoLoader } from '@/app/libs/useDracoLoader'
import { AnimationContext } from '@/app/libs/AnimationContext'
import ShutterSoundControl from '@/app/audio/environment/ShuttersSoundControl'

const CyberpunkMap = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current
  const { setPointLightPlay, setAmbientLightPlay, setShouldJOISpeak } = useContext(AnimationContext)
  // Controls shutter audio
  const [playShutterAudio, setPlayShutterAudio] = useState(false)

  useEffect(() => {
    const videoTablet = document.createElement('video')
    videoTablet.src = '/videos/tablet.mp4'
    videoTablet.loop = true
    videoTablet.muted = true
    videoTablet.play()

    // Create video textures
    const videoTextureTablet = new VideoTexture(videoTablet)

    const videoMaterialTablet = new MeshBasicMaterial({
      map: videoTextureTablet
    })

    gltfLoader.load(
      '/glb/EvokelabsRoom.glb',
      gltf => {
        scene.add(gltf.scene)
        gltf.scene.traverse(object => {
          if (object instanceof Mesh) {
            console.log('object.name:', object.name)
            switch (object.name) {
              case 'Window_Glass_Main':
                object.castShadow = false
                break
              case 'Window_Shutters_Closed':
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
                    gsap.delayedCall(1, () => {
                      setShouldJOISpeak(true)
                    })
                  }
                })
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
  }, [scene, gltfLoader, setPointLightPlay, setAmbientLightPlay, setShouldJOISpeak])

  return playShutterAudio ? <ShutterSoundControl volume={0.45} delay={0} transitionDuration={0} loop={false} /> : null
}

export default CyberpunkMap
