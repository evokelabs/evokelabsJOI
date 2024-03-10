import { SetStateAction, createContext, Dispatch } from 'react'

export const GPUContext = createContext<{
  lowGPU: boolean | null
  setLowGPU: Dispatch<SetStateAction<boolean | null>>
}>({
  lowGPU: null,
  setLowGPU: () => {}
})
