import { useContext, useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, MeshBasicMaterial, Scene, VideoTexture } from 'three'
import { gsap } from 'gsap'
import { useDracoLoader } from '@/app/libs/useDracoLoader'
import { AnimationContext } from '@/app/libs/AnimationContext'
import ShutterSoundControl from '@/app/audio/environment/ShuttersSoundControl'

const CyberpunkMapLowPoly = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current
  const { setPointLightPlay, setAmbientLightPlay, setShouldJOISpeak } = useContext(AnimationContext)
  // Controls shutter audio
  const [playShutterAudio, setPlayShutterAudio] = useState(false)

  useEffect(() => {
    gltfLoader.load(
      '/glb/EvokelabsRoomLowPoly.glb',
      gltf => {
        scene.add(gltf.scene)
        gltf.scene.traverse(object => {
          if (object instanceof Mesh) {
            console.log('object.name:', object.name)
            switch (object.name) {
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

              default:
                object.castShadow = false
                object.receiveShadow = false
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

export default CyberpunkMapLowPoly
