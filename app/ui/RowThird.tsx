import React from 'react'
import { RED_TILE_PATTERN } from './libs/SVGTileFills'

const MAX_WIDTH = '360px'

const SVG = () => {
  return (
    <svg width={MAX_WIDTH} height='220' viewBox={`0 0 ${MAX_WIDTH} 220`} fill='none'>
      <path d='M2 217V2H359V197L339 217H2Z' fill='#0E0E17' fill-opacity='0.85' />
      <path d='M2 217V2H359V197L339 217H2Z' fill='#DE5456' fill-opacity='0.1' />
      <path d='M2 217V2H359V197L339 217H2Z' fill='url(#redTile)' />
      <path
        d='M2 1H1V2V217V218H2H339H339.414L339.707 217.707L359.707 197.707L360 197.414V197V2V1H359H2Z'
        stroke='#F75049'
        stroke-opacity='0.6'
        stroke-width='2'
      />
      {RED_TILE_PATTERN}
    </svg>
  )
}

const RowThird = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='relative flex w-1/3' style={{ maxWidth: MAX_WIDTH }}>
      <div className='absolute flex flex-col py-4 px-5'>
        <h2 className='text-teal-blur font-rajdhani font-semibold text-3xl leading-none mb-1.5 mt-1'>{title}</h2>
        <p className='text-red-blur font-rajdhani text-xl leading-6 font-medium'>{text}</p>
      </div>
      <SVG />
    </div>
  )
}

export default RowThird
