import { useEffect } from 'react'
import { Mesh } from 'three'
import { useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/Addons.js'

import { useEyeEmissionAnimation } from './controllers/useEyeEmissionAnimation'
import { useInitialJOIPositioning } from './controllers/useInitialJOIPositioning'
import { useIdleAnimationPoseControl } from './controllers/useIdleAnimationPoseControl'
import { useHeadAnimation } from './controllers/useHeadAnimation'

const JOI = () => {
  const { scene, camera } = useThree()

  const gltf = useGLTF('/glb/JOI.glb')
  const { nodes, animations } = gltf
  const model = nodes.Scene || nodes.scene

  useIdleAnimationPoseControl(animations, model, 1, false, 1.5)

  const setInitialPositioning = useInitialJOIPositioning()
  const startEyeEmissionAnimation = useEyeEmissionAnimation()
  useHeadAnimation(nodes)

  useEffect(() => {
    if (!model) return

    scene.add(model)

    console.log('JOI model loaded', model)

    setInitialPositioning(gltf as GLTF)
    startEyeEmissionAnimation(gltf as GLTF)

    model.traverse(object => {
      if (object instanceof Mesh) {
        object.receiveShadow = true
      }
    })

    /// Eye animation

    let rightEye: Mesh<any, any> | null = null
    let leftEye: Mesh<any, any> | null = null

    model.traverse(object => {
      if (object instanceof Mesh) {
        if (object.name === 'JOI-Eye-Right') {
          rightEye = object
        } else if (object.name === 'JOI-Eye-Left') {
          leftEye = object
        }
      }
    })

    /// Update the eyes to face the camera in the animation loop
    const animate = () => {
      if (rightEye && leftEye) {
        // Make the eyes look at the camera
        rightEye.lookAt(camera.position)
        leftEye.lookAt(camera.position)
      }
      requestAnimationFrame(animate)
    }
    animate()
    ///

    return () => {
      scene.remove(model)
    }
  }, [camera.position, gltf, model, scene, setInitialPositioning, startEyeEmissionAnimation])

  return null
}

export default JOI
