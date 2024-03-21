import { LoadingManager } from 'three'
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/v1/decoders/'

export const useDracoLoader = (manager?: LoadingManager | undefined) => {
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(DRACO_DECODER_PATH)

  const gltfLoader = new GLTFLoader(manager)
  gltfLoader.setDRACOLoader(dracoLoader)

  return gltfLoader
}
