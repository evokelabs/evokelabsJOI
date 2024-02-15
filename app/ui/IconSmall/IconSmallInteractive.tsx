import { useRef } from 'react'
import useButtonIconController from '../libs/useButtonIconController'
import SVG from './SVG'

const IconSmallInteractive = ({ isHovered, isActive, isMouseDown }: { isHovered: boolean; isActive: boolean; isMouseDown: boolean }) => {
  const svgRef = useRef(null)
  const pathBGFillRef = useRef(null)
  const pathBGStrokeRef = useRef(null)
  const pathFGFillRef = useRef(null)

  useButtonIconController({ isHovered, isActive, isMouseDown, svgRef, pathBGFillRef, pathBGStrokeRef, pathFGFillRef })

  return <SVG svgRef={svgRef} pathBGFillRef={pathBGFillRef} pathBGStrokeRef={pathBGStrokeRef} pathFGFillRef={pathFGFillRef} />
}

export default IconSmallInteractive
