import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Mesh, BufferGeometry, MeshBasicMaterial, BackSide, VideoTexture, Texture, TextureLoader } from 'three'

declare global {
  interface Navigator {
    connection: {
      downlink: number
    }
  }
}

const VIDEO_IMAGE = './videos/CyberpunkCityBG.png'
const VIDEO_NORMAL = './videos/CyberpunkCityBG.mp4'
const VIDEO_4K = './videos/CyberpunkCityBG-4K.mp4'

const VideoSkybox = () => {
  const meshRef = useRef<Mesh<BufferGeometry, MeshBasicMaterial>>(null)
  const videoRef = useRef<HTMLVideoElement>(document.createElement('video'))
  const [texture, setTexture] = useState<VideoTexture | Texture | null>(null)

  useEffect(() => {
    const video = videoRef.current
    const imageLoader = new TextureLoader()
    const imageTexture = imageLoader.load(VIDEO_IMAGE)
    setTexture(imageTexture)

    const isHighRes = window.screen.width > 1920 || window.screen.height > 1080
    const isUltrawide = window.matchMedia('(aspect-ratio: 21/9)').matches
    const isFastNetwork = navigator.connection ? navigator.connection.downlink > 5 : true

    video.src = (isHighRes || isUltrawide) && isFastNetwork ? VIDEO_4K : VIDEO_NORMAL
    video.loop = true
    video.muted = true
    video.addEventListener('loadeddata', () => {
      const videoTexture = new VideoTexture(video)
      setTexture(videoTexture)
    })
    video.play()
  }, [])

  useFrame(() => {
    if (meshRef.current && texture) {
      ;(meshRef.current.material as MeshBasicMaterial).map = texture
      texture.needsUpdate = true
    }
  })

  if (!texture) {
    return null
  }

  return (
    <mesh ref={meshRef} scale={[-1, 0.55, 0.8]}>
      <boxGeometry attach='geometry' args={[2000, 2000, 2000]} />
      <meshBasicMaterial side={BackSide} map={texture} />
    </mesh>
  )
}

export default VideoSkybox
