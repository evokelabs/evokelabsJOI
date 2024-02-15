import React from 'react'
import { TileFill } from './libs/TileFill'

const RowThird = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='relative my-2 w-[546px]'>
      <svg width='546' height='172' viewBox='0 0 546 172' fill='none'>
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='#0E0E17' fill-opacity='0.85' />
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='#DE5456' fill-opacity='0.1' />
        <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='url(#RowThirdPattern)' fill-opacity='0.1' />
        <path
          d='M2 1H1V2V170V171H2H528.986H529.402L529.695 170.705L544.709 155.614L545 155.322V154.909V2V1H544H2Z'
          stroke='#F75049'
          stroke-opacity='0.6'
          stroke-width='2'
        />
        <path d='M16 16H156V142L142 156H16V16Z' fill='#151A2B' />
        <path d='M16 16H156V142L142 156H16V16Z' fill='url(#RowThirdPattern1)' fill-opacity='0.3' />
        <path
          d='M16 15H15V16V156V157H16H142H142.414L142.707 156.707L156.707 142.707L157 142.414V142V16V15H156H16Z'
          stroke='#F75049'
          stroke-opacity='0.6'
          stroke-width='2'
        />
        <mask id='mask0_836_760' x='16' y='16' width='140' height='140'>
          <path d='M16 16H156V142L142 156H16V16Z' fill='#151A2B' />
          <path d='M16 16H156V142L142 156H16V16Z' fill='url(#RowThirdPattern2)' fill-opacity='0.3' />
        </mask>
        <g mask='url(#mask0_836_760)'></g>
        <defs>
          <pattern id='RowThirdPattern' patternContentUnits='objectBoundingBox' width='0.00590406' height='0.0190476'>
            <use xlinkHref='#RowThirdImage' transform='scale(0.00147601 0.0047619)' />
          </pattern>
          <pattern id='RowThirdPattern1' patternContentUnits='objectBoundingBox' width='0.0228571' height='0.0228571'>
            <use xlinkHref='#RowThirdImage' transform='scale(0.00571429)' />
          </pattern>
          <pattern id='RowThirdPattern2' patternContentUnits='objectBoundingBox' width='0.0228571' height='0.0228571'>
            <use xlinkHref='#RowThirdImage' transform='scale(0.00571429)' />
          </pattern>
          <image id='RowThirdImage' width='4' height='4' xlinkHref={TileFill} />
        </defs>
      </svg>

      <div className={'absolute pl-[10.5rem] pr-4 pt-3 top-0 w-full'}>
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className='text-teal font-rajdhani font-semibold text-3xl leading-none mb-1.5 mt-1'
        ></h2>
        <p className='text-red font-rajdhani text-[1.1875rem] leading-6  font-medium'>{text}</p>
      </div>
    </div>
  )
}

export default RowThird
