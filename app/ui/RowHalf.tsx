import IconDefault from './IconDefault'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'

const MAX_WIDTH = 546

const SVG = () => {
  return (
    <svg width={MAX_WIDTH} height='172' viewBox={`0 0 ${MAX_WIDTH} 172`} fill='none'>
      <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='#0E0E17' fillOpacity='0.85' />
      <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='#DE5456' fillOpacity='0.1' />
      <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='url(#redTile)' />
      <path
        d='M2 1H1V2V170V171H2H528.986H529.402L529.695 170.705L544.709 155.614L545 155.322V154.909V2V1H544H2Z'
        stroke='#F75049'
        strokeOpacity='0.6'
        strokeWidth='2'
      />
      {RED_TILE_PATTERN}
    </svg>
  )
}

const RowHalf = ({ heading, paragraph }: { heading: string; paragraph: string }) => {
  return (
    <div className='relative items-center flex w-1/2' style={{ maxWidth: MAX_WIDTH }}>
      <div className='absolute flex flex-row items-start px-1'>
        <div className='w-fit pl-3'>
          <IconDefault />
        </div>
        <div className={'w-auto pl-1.5 pr-3.5'}>
          <h2
            dangerouslySetInnerHTML={{ __html: heading }}
            className='text-teal-blur font-rajdhani font-semibold text-3xl leading-none mb-1.5'
          ></h2>
          <p className='text-red-blur font-rajdhani text-[1.1875rem] leading-6  font-medium'>{paragraph}</p>
        </div>
      </div>
      <SVG />
    </div>
  )
}

export default RowHalf
