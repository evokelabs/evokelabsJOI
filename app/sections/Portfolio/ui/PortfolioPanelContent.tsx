// PortfolioFrame.tsx
import { ReactNode } from 'react'

interface PortfolioPanelContent {
  children: ReactNode
  onClick: () => void
}

const PortfolioPanelContent: React.FC<PortfolioPanelContent> = ({ children, onClick }) => {
  return (
    <div className='group w-full h-60 mb-9 relative' onClick={onClick}>
      <div className='bg-grid-darkRed h-full border-red border-2 border-opacity-60  p-2 shadow-red-blur group-hover:border-opacity-100 group-hover:bg-grid-teal group-hover:border-teal group-hover:shadow-teal-blur transition-all duration-150  cursor-pointer'>
        {children}
      </div>
    </div>
  )
}

export default PortfolioPanelContent
