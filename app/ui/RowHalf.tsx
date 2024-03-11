import Image from 'next/image'
import { BLACK, RED } from '../libs/UIConstants'
import IconDefault from './IconDefault'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const SVG = ({ heading, PNG }: { heading: string; PNG: StaticImport }) => {
  return (
    <div className='hidden sm:block'>
      <svg width='546' height='172' viewBox={`0 0 546 172`} fill='none'>
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill={BLACK} fillOpacity='0.85' />
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill={RED} fillOpacity='0.1' />
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='url(#redTile)' />
        <path
          d='M2 1H1V2V170V171H2H528.986H529.402L529.695 170.705L544.709 155.614L545 155.322V154.909V2V1H544H2Z'
          stroke={RED}
          strokeOpacity='0.6'
          strokeWidth='2'
        />
        {RED_TILE_PATTERN}
      </svg>

      <div className='absolute w-[142px] ml-4 opacity-80 top-0 '>
        <Image src={PNG} alt={heading} className='text-teal -mt-1 md:mt-4 font-rajdhani font-semibold text-center ' />
      </div>
    </div>
  )
}

const RowHalf = ({ heading, paragraph, PNG }: { heading: string; paragraph: string; PNG: StaticImport }) => {
  return (
    <>
      <div className='relative items-center flex w-full 2xl:w-1/2 min-h-[9em] 2xl:max-w-[546px]'>
        <div className='absolute flex flex-row items-start px-1'>
          <div className='w-fit pl-2.5 hidden sm:block'>
            <IconDefault />
          </div>
          <div className={'pr-3 mt-1.5'}>
            <h2
              dangerouslySetInnerHTML={{ __html: heading }}
              className='text-teal-blur uppercase font-rajdhani text-[28px] font-semibold leading-none mb-1.5'
            ></h2>
            <p className='text-red-blur font-rajdhani text-[19px] leading-6 font-medium'>{paragraph}</p>
          </div>
        </div>
        <div className='hidden sm:block '>
          <SVG PNG={PNG} heading={heading} />
        </div>
      </div>
    </>
  )
}

export default RowHalf
