import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/v1/decoders/'

export const useDracoLoader = () => {
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath(DRACO_DECODER_PATH)

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)

  return gltfLoader
}
