import RedCRTBlur from './libs/RedCRTBlur'
import { BLACK, RED, RED_BLACK } from '../libs/UIConstants'
import { ReactNode } from 'react'

const PortfolioFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full h-60 mb-9 relative'>
      <div className='bg-grid-darkRed h-full border-red border-t-2 border-x-2 border-opacity-60  p-2 pb-0 border-b-0 shadow-red-blur '>
        {children}
      </div>

      <div className='h-2 border-b-2 bg-grid-darkRed border-l-2 border-red border-opacity-60 pr-4 relative pb-2  mr-2'>
        <div className='absolute -right-3 '>
          <svg width='16' height='10' viewBox='0 0 16 10'>
            <RedCRTBlur />
            <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
              <path d='M0 0H12V1L3 10H0V0Z' fill={BLACK} />
              <path d='M0 0H12V1L3 10H0V0Z' fill={RED_BLACK} fillOpacity='0.1' />
              <path d='M0 0H12V1L3 10H0V0Z' fill='url(#redTile)' fillOpacity='0.85' />
              <path d='M12 1L3 10H0V8H2L9.92339 0H12V1Z' fill={RED} fillOpacity={0.6} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PortfolioFrame
