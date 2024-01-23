import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Matrix4, Vector3, Quaternion, Object3D, Object3DEventMap, MathUtils, Euler } from 'three'
import { gsap, Power2 } from 'gsap'

const MIN_WEIGHT_TIME = 2 // Minimum wait time in milliseconds
const MAX_WAIT_TIME = 4 // Maximum wait time in milliseconds
const CHANCE_TO_CHANGE = 0.75 // 20% chance to change weight
const WEIGHT_MULTIPLIER = 0.25
const ANIMATION_DURATION = 1.75
const MILLISECONDS_IN_SECOND = 1000

type Nodes = {
  [x: string]: Object3D<Object3DEventMap> | undefined
  mixamorigHead?: Object3D<Object3DEventMap>
}

export const useHeadAnimation = (nodes: Nodes) => {
  const weightRef = useRef(0) // Use useRef to preserve weight across renders
  const head = nodes.mixamorigHead // Access the head bone

  useEffect(() => {
    const weight = { value: weightRef.current }
    const changeWeight = () => {
      let newWeight = Math.random()
      newWeight = newWeight < CHANCE_TO_CHANGE ? newWeight * WEIGHT_MULTIPLIER : newWeight
      newWeight = parseFloat(newWeight.toFixed(2))
      gsap.to(weight, {
        duration: ANIMATION_DURATION,
        value: newWeight,
        ease: Power2.easeInOut,
        onUpdate: () => {
          weightRef.current = weight.value
        },
        onComplete: () => {      
          const delay =
            Math.random() * (MAX_WAIT_TIME * MILLISECONDS_IN_SECOND - MIN_WEIGHT_TIME * MILLISECONDS_IN_SECOND) +
            MIN_WEIGHT_TIME * MILLISECONDS_IN_SECOND
          setTimeout(changeWeight, delay)
        }
      })
    }
    changeWeight()
  }, [nodes]) // Add nodes to the dependency array if the effect should run again when nodes changes

  useFrame(({ camera }) => {
    if (head) {
      const m1 = new Matrix4()
      const v1 = new Vector3()
      const v3 = new Vector3(0, 0, 0)
      const q1 = new Quaternion()
      v1.copy(camera.position)
      head.updateWorldMatrix(true, false)
      m1.copy(head.matrixWorld).invert()
      v1.applyMatrix4(m1)
      q1.copy(head.quaternion) // Save the original orientation
      head.quaternion.setFromRotationMatrix(m1.lookAt(v1, v3, head.up))
      head.quaternion.slerp(q1, weightRef.current)

      // Limit the rotation of the head to 180 degrees
      const euler = new Euler().setFromQuaternion(head.quaternion, 'YXZ')
      euler.y = MathUtils.clamp(euler.y, -Math.PI / 2, Math.PI / 2)
      head.quaternion.setFromEuler(euler)
    }
  })
}
