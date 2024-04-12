import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Mesh, MeshBasicMaterial, Scene, VideoTexture } from 'three'
import { useDracoLoader } from '@/app/libs/useDracoLoader'
import { cloudfrontURL } from '@/app/libs/cloudfrontURL'

const WideMonitor = () => {
  const { scene } = useThree()
  const gltfLoader = useRef(useDracoLoader()).current

  useEffect(() => {
    // Create video elements
    const videoMonitor = document.createElement('video')
    videoMonitor.src = `${cloudfrontURL}/videos/monitor.mp4`
    videoMonitor.loop = false
    videoMonitor.muted = true
    videoMonitor.play()
    // Create video textures
    const videoTextureMonitor = new VideoTexture(videoMonitor)
    // Create materials with emissive map
    const videoMaterialMonitor = new MeshBasicMaterial({
      map: videoTextureMonitor
    })
    gltfLoader.load(
      `${cloudfrontURL}/glb/WideMonitor.glb`,
      gltf => {
        scene.add(gltf.scene)
        gltf.scene.traverse(object => {
          if (object instanceof Mesh) {
            switch (object.name) {
              case 'VideoTexture-Widescreen':
                // object.material = videoMaterialMonitor
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
  }, [scene, gltfLoader])

  return null
}

export default WideMonitor
