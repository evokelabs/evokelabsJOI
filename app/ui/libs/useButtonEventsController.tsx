import { Dispatch, SetStateAction, useEffect } from 'react'

const useButtonEventsController = ({
  svg,
  setIsHovered,
  setIsMouseDown,
  setIsActive
}: {
  svg: SVGSVGElement | null
  setIsHovered: Dispatch<SetStateAction<boolean>>
  setIsMouseDown: Dispatch<SetStateAction<boolean>>
  setIsActive: Dispatch<SetStateAction<boolean>>
}) => {
  useEffect(() => {
    const svgCurrent = svg
    if (svgCurrent) {
      svgCurrent.addEventListener('mouseenter', () => {
        setIsHovered(true)
      })
      svgCurrent.addEventListener('mouseleave', () => {
        setIsHovered(false)
      })
      svgCurrent.addEventListener('mousedown', () => {
        setIsMouseDown(true)
      })
      svgCurrent.addEventListener('mouseup', () => {
        setIsMouseDown(false)
      })
      svgCurrent.addEventListener('click', () => {
        setIsActive(true)
      })
    }
  }, [setIsActive, setIsHovered, setIsMouseDown, svg])
}

export default useButtonEventsController
