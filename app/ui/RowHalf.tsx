import Image from 'next/image'
import { BLACK, RED, RED_DARK } from '../libs/UIConstants'
import IconDefault from './IconDefault'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const MAX_WIDTH = 546

const SVG = ({ heading, PNG }: { heading: string; PNG: StaticImport }) => {
  return (
    <>
      <svg width={MAX_WIDTH} height='172' viewBox={`0 0 ${MAX_WIDTH} 172`} fill='none'>
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
      <div className='absolute w-[142px] ml-4  opacity-80'>
        <Image src={PNG} alt={heading} className='text-teal font-rajdhani font-semibold text-center ' />
      </div>
    </>
  )
}

const RowHalf = ({ heading, paragraph, PNG }: { heading: string; paragraph: string; PNG: StaticImport }) => {
  return (
    <div className='relative items-center flex w-1/2' style={{ maxWidth: MAX_WIDTH }}>
      <div className='absolute flex flex-row items-start px-1'>
        <div className='w-fit pl-2.5'>
          <IconDefault />
        </div>
        <div className={'w-auto  pr-3 mt-1.5'}>
          <h2
            dangerouslySetInnerHTML={{ __html: heading }}
            className='text-teal-blur uppercase font-rajdhani text-[28px] font-semibold leading-none mb-1.5'
          ></h2>
          <p className='text-red-blur font-rajdhani text-[19px] leading-6 font-medium'>{paragraph}</p>
        </div>
      </div>

      <SVG PNG={PNG} heading={heading} />
    </div>
  )
}

export default RowHalf
