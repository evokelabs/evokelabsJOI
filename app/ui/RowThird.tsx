import React from 'react'
import { TileFill } from './libs/TileFill'
import IconDefault from './IconDefault'

const SVG = () => {
  return (
    <svg width='360' height='220' viewBox='0 0 360 220' fill='none'>
      <path d='M2 217V2H359V197L339 217H2Z' fill='#0E0E17' fill-opacity='0.85' />
      <path d='M2 217V2H359V197L339 217H2Z' fill='#DE5456' fill-opacity='0.1' />
      <path d='M2 217V2H359V197L339 217H2Z' fill='url(#RowThirdPattern)' fill-opacity='0.1' />
      <path
        d='M2 1H1V2V217V218H2H339H339.414L339.707 217.707L359.707 197.707L360 197.414V197V2V1H359H2Z'
        stroke='#F75049'
        stroke-opacity='0.6'
        stroke-width='2'
      />
      <defs>
        <pattern id='RowThirdPattern' patternContentUnits='objectBoundingBox' width='0.00896359' height='0.0148837'>
          <use xlinkHref='#RowThirdImage' transform='scale(0.0022409 0.00372093)' />
        </pattern>
        <image id='RowThirdImage' width='4' height='4' xlinkHref={TileFill} />
      </defs>
    </svg>
  )
}

const RowThird = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='relative flex w-1/3'>
      <div className='absolute flex flex-col py-3 px-4'>
        <h2 className='text-teal font-rajdhani font-semibold text-3xl leading-none mb-1.5 mt-1'>{title}</h2>
        <p className='text-red font-rajdhani text-xl leading-6 font-medium'>{text}</p>
      </div>
      <SVG />
    </div>
  )
}

export default RowThird
