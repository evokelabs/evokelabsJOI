import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Mesh, BufferGeometry, MeshBasicMaterial, BackSide, VideoTexture, RepeatWrapping } from 'three'

const VideoSkybox = () => {
  const meshRef = useRef<Mesh<BufferGeometry, MeshBasicMaterial>>(null)
  const video = document.createElement('video')
  const [videoTexture, setVideoTexture] = useState<VideoTexture | null>(null)

  useEffect(() => {
    video.src = './videos/CyberpunkCityBG.mp4'
    video.loop = true
    video.muted = true
    video.addEventListener('loadeddata', () => {
      const texture = new VideoTexture(video)
      texture.wrapS = RepeatWrapping
      texture.wrapT = RepeatWrapping
      setVideoTexture(texture)
    })
    video.play()
  }, [])

  useFrame(() => {
    if (meshRef.current && videoTexture) {
      ;(meshRef.current.material as MeshBasicMaterial).map = videoTexture
      videoTexture.needsUpdate = true
    }
  })

  if (!videoTexture) {
    return null
  }

  videoTexture.offset.x = 0 // adjust this value to scroll the texture on the X-axis

  // ...

  return (
    <mesh ref={meshRef} scale={[-1, 0.55, 0.8]}>
      <boxGeometry attach='geometry' args={[2000, 2000, 2000]} />
      <meshBasicMaterial side={BackSide} map={videoTexture} />
    </mesh>
  )
}

export default VideoSkybox
