import React from 'react'
import { TileFill } from './libs/TileFill'
import IconDefault from './IconDefault'

const SVG = () => {
  return (
    <svg width='1103' height='172' viewBox='0 0 1103 172' fill='none'>
      <path d='M2 170V2H1101V154.909L1085.99 170H2Z' fill='#0E0E17' fill-opacity='0.85' />
      <path d='M2 170V2H1101V154.909L1085.99 170H2Z' fill='#DE5456' fill-opacity='0.1' />
      <path d='M2 170V2H1101V154.909L1085.99 170H2Z' fill='url(#RowFullPattern)' fill-opacity='0.1' />
      <path
        d='M2 1H1V2V170V171H2H1085.99H1086.4L1086.7 170.705L1101.71 155.614L1102 155.322V154.909V2V1H1101H2Z'
        stroke='#F75049'
        stroke-opacity='0.6'
        stroke-width='2'
      />
      <defs>
        <pattern id='RowFullPattern' patternContentUnits='objectBoundingBox' width='0.00291174' height='0.0190476'>
          <use xlinkHref='#RowFullImage' transform='scale(0.000727934 0.0047619)' />
        </pattern>
        <image id='RowFullImage' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

const RowFull = ({ title, subTitle, paragraph }: { title: string; subTitle: string; paragraph: string }) => {
  return (
    <div className='relative flex items-center w-full'>
      <div className='absolute flex flex-row items-center px-1'>
        <div className='w-fit'>
          <IconDefault />
        </div>
        <div className={'w-auto px-1.5'}>
          <h1 className='font-rajdhani font-semibold text-teal-blur text-[1.75rem] leading-none text-shadow-CRTteal'>{title}</h1>
          <h2 className='font-rajdhani font-semibold text-red-blur text-[1.25rem] leading-none '>{subTitle}</h2>
          <p className='font-rajdhani font-medium text-red-blur text-[1.125rem] leading-5 mt-1'>{paragraph}</p>
        </div>
      </div>
      <SVG />
    </div>
  )
}

export default RowFull
