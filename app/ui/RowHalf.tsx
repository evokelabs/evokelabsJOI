import React from 'react'
import { TileFill } from './libs/TileFill'
import IconDefault from './IconDefault'

const SVG = () => {
  return (
    <svg width='546' height='172' viewBox='0 0 546 172' fill='none'>
      <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='#0E0E17' fill-opacity='0.85' />
      <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='#DE5456' fill-opacity='0.1' />
      <path d='M2 170V2H544V154.909L528.986 170H2Z' fill='url(#RowHalfPattern)' fill-opacity='0.1' />
      <path
        d='M2 1H1V2V170V171H2H528.986H529.402L529.695 170.705L544.709 155.614L545 155.322V154.909V2V1H544H2Z'
        stroke='#F75049'
        stroke-opacity='0.6'
        stroke-width='2'
      />
      <defs>
        <pattern id='RowHalfPattern' patternContentUnits='objectBoundingBox' width='0.00590406' height='0.0190476'>
          <use xlinkHref='#RowHalfImage' transform='scale(0.00147601 0.0047619)' />
        </pattern>
        <image id='RowHalfImage' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

const RowHalf = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='relative items-center flex w-1/2'>
      <div className='absolute flex flex-row items-center px-1'>
        <div className='w-fit'>
          <IconDefault />
        </div>
        <div className={'w-auto px-1.5'}>
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className='text-teal-blur font-rajdhani font-semibold text-3xl leading-none mb-1.5 mt-1'
          ></h2>
          <p className='text-red-blur font-rajdhani text-[1.1875rem] leading-6  font-medium'>{text}</p>
        </div>
      </div>
      <SVG />
    </div>
  )
}

export default RowHalf
