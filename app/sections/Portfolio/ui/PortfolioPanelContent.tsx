import { ReactNode, useState } from 'react'

interface PortfolioPanelContentProps {
  children: ReactNode
  onClick: () => void
}

const PortfolioPanelContent: React.FC<PortfolioPanelContentProps> = ({ children, onClick }) => {
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartPos({ x: e.clientX, y: e.clientY })
    setIsDragging(false)
  }

  const handleMouseMove = () => {
    setIsDragging(true)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    const endPos = { x: e.clientX, y: e.clientY }
    const diffX = Math.abs(startPos.x - endPos.x)
    const diffY = Math.abs(startPos.y - endPos.y)

    // If the mouse movement is less than 10 pixels, consider it a click.
    if (!isDragging || (diffX < 10 && diffY < 10)) {
      onClick()
    }
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endPos = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }
    const diffX = Math.abs(startPos.x - endPos.x)
    const diffY = Math.abs(startPos.y - endPos.y)

    // If the touch movement is less than 10 pixels, consider it a click.
    if (diffX < 10 && diffY < 10) {
      onClick()
    }
  }

  return (
    <div
      className='group h-[12em] md:h-60 mb-14 md:mb-8 relative'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className='bg-grid-darkRed h-full border-red border-2 border-opacity-60  p-2 shadow-red-blur group-hover:border-opacity-100 group-hover:bg-grid-teal group-hover:border-teal group-hover:shadow-teal-blur transition-all duration-150 cursor-pointer'>
        {children}
      </div>
    </div>
  )
}

export default PortfolioPanelContent
