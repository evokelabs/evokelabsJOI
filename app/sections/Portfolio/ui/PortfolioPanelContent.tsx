// PortfolioFrame.tsx
import { ReactNode } from 'react'

interface PortfolioPanelContent {
  children: ReactNode
  onClick: () => void
}

const PortfolioPanelContent: React.FC<PortfolioPanelContent> = ({ children, onClick }) => {
  return (
    <div className='group h-[12em] md:h-60 mb-14 md:mb-8 relative' onClick={onClick} onTouchStart={onClick}>
      <div className='bg-grid-darkRed h-full border-red border-2 border-opacity-60  p-2 shadow-red-blur group-hover:border-opacity-100 group-hover:bg-grid-teal group-hover:border-teal group-hover:shadow-teal-blur transition-all duration-150 cursor-pointer'>
        {children}
      </div>
    </div>
  )
}

export default PortfolioPanelContent
