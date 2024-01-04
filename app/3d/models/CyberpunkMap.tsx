import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const CyberpunkMap = () => {
  const gltf = useLoader(GLTFLoader, '/glb/EvokelabsRoom.glb')
  return <primitive object={gltf.scene} />
}

export default CyberpunkMap
