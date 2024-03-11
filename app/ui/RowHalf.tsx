import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { BLACK, RED, RED_BLACK } from '../libs/UIConstants'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'
import RedCRTBlur from './libs/RedCRTBlur'

const BottomRightCornerLarge = () => {
  return (
    <svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
      <path d='M0 0H22V1L1 22H0V0Z' fill={BLACK} fillOpacity={0.85} />
      <path d='M0 0H22V1L1 22H0V0Z' fill={RED_BLACK} fillOpacity={0.1} />
      <path d='M0 0H22V1L1 22H0V0Z' fill='url(#redTile)' />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M0 20L20 0H22V1L1 22H0V20Z' fill={RED} fillOpacity={0.6} />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

const BottomRightCornerSmall = () => {
  return (
    <svg width='17' height='17' viewBox='0 0 17 17' fill='none'>
      <path d='M0 0H22V1L1 22H0V0Z' fill={BLACK} fillOpacity={0.85} />
      <path d='M0 0H22V1L1 22H0V0Z' fill={RED_BLACK} fillOpacity={0.1} />
      <path d='M0 15V0H15L0 15Z' fill='url(#redTile)' />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M17 0.734512L0.817749 17H0V15L15 0H17V0.734512Z' fill={RED} fillOpacity={0.6} />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

const RowHalf = ({ heading, paragraph, PNG }: { heading: string; paragraph: string; PNG: StaticImport }) => {
  return (
    <>
      <div className='inline-flex lg:w-[49.4%] flex-col '>
        <div className='relative items-center flex lg:min-h-[9em] h-fill bg-grid-darkRed border-r-2 border-l-2 border-t-2 border-red border-opacity-60 '>
          <div className='bg-grid-blue border-2-red w-[140px] lg:w-[180px] left-2.5 top-2 relative z-30'>
            <Image src={PNG} alt={heading} className='text-teal font-rajdhani font-semibold text-center opacity-80' />
          </div>
          <div className={'mt-1.5 w-full relative left-4 top-1 pr-5 pl-1'}>
            <h2
              dangerouslySetInnerHTML={{ __html: heading }}
              className='text-teal-blur uppercase font-rajdhani text-[18px] sm:text-[20px] md:text-[28px] font-semibold leading-none md:mb-1.5'
            ></h2>
            <p className='text-red-blur font-rajdhani text-[14px] sm:text-[16px] md:text-[19px] leading-4 sm:leading-5 lg:leading-6 font-medium'>
              {paragraph}
            </p>
          </div>
        </div>
        <div className='flex relative bottom-0'>
          <div
            style={{ width: 'calc(100% - 17px)' }}
            className='w-full h-[17px] bg-grid-darkRed border-l-2 border-b-2 border-red border-opacity-60 '
          ></div>
          <BottomRightCornerSmall />
        </div>
      </div>
    </>
  )
}

export default RowHalf
