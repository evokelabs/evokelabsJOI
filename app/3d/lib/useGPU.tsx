import { useState, useEffect } from 'react'
import { getGPUTier } from 'detect-gpu' // Assuming you have this import

export const useGPU = (debug = false) => {
  const [gpuTier, setGpuTier] = useState<number | null>(null)
  const [lowGPU, setLowGPU] = useState<boolean | null>(null)

  useEffect(() => {
    const isLowGPU = gpuTier === null || gpuTier <= 2
    setLowGPU(isLowGPU)
  }, [gpuTier])

  useEffect(() => {
    if (gpuTier !== null) {
      return
    }

    const fetchGpuTier = async () => {
      if (debug) {
        setGpuTier(0) // Set to low GPU tier when in debug mode
        return
      }

      const canvasContext = document.createElement('canvas').getContext('webgl2')
      if (!canvasContext) {
        console.error('WebGL 2 not supported')
        return
      }

      const gpuInfo = await getGPUTier({ glContext: canvasContext })
      if (!gpuInfo || gpuInfo.tier === undefined) {
        console.error('Could not determine GPU tier')
        return
      }

      setGpuTier(gpuInfo.tier)
    }

    fetchGpuTier()
  }, [gpuTier, debug])

  return { lowGPU, setLowGPU }
}
