import { useState, useCallback } from 'react'
import { ThreeEvent } from '@react-three/fiber'

export interface UIState {
  selectedShowOnlyOption: string
  selectedSortByOption: string
}

export interface UIActions {
  selectedShowOnlyOption: string
  setSelectedShowOnlyOption: (option: string) => void
  setSelectedSortByOption: (option: string) => void
  handleMouseDown: () => void
  handleMouseUp: () => void
  handleMouseMove: (event: ThreeEvent<PointerEvent>) => void
  container: (node: HTMLDivElement | null) => void
  eventSource: HTMLElement | undefined
}

export const useUI = (setPosition: (position: [number, number, number]) => void): UIState & UIActions => {
  const [selectedShowOnlyOption, setSelectedShowOnlyOption] = useState<string>('All')
  const [selectedSortByOption, setSelectedSortByOption] = useState<string>('Date (Newest)')
  const [eventSource, setEventSource] = useState<HTMLElement | undefined>()
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback(
    (event: ThreeEvent<PointerEvent>) => {
      if (isDragging) {
        const x = event.unprojectedPoint.x
        const y = event.unprojectedPoint.y
        setPosition([x, y, 2.1])
      }
    },
    [isDragging, setPosition]
  )

  const container = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setEventSource(node)
    }
  }, [])

  return {
    selectedShowOnlyOption,
    setSelectedShowOnlyOption,
    selectedSortByOption,
    setSelectedSortByOption,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    container,
    eventSource
  }
}
