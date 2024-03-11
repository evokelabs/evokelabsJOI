import { BLACK, RED } from '../libs/UIConstants'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'

const MAX_WIDTH = 361

const SVG = () => {
  return (
    <svg width={MAX_WIDTH} height='220' viewBox={`0 0 ${MAX_WIDTH} 220`} fill='none'>
      <path d='M2 217V2H359V197L339 217H2Z' fill={BLACK} fillOpacity='0.85' />
      <path d='M2 217V2H359V197L339 217H2Z' fill={RED} fillOpacity='0.1' />
      <path d='M2 217V2H359V197L339 217H2Z' fill='url(#redTile)' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H361V197.828L339.828 219H0V0ZM2 217V2H359V197L339 217H2Z'
        fill={RED}
        fillOpacity='0.6'
      />
      {RED_TILE_PATTERN}
    </svg>
  )
}

const RowThird = ({ heading, paragraph }: { heading: string; paragraph: string }) => {
  return (
    <div className='relative flex w-full 2xl:w-1/3' style={{ maxWidth: MAX_WIDTH }}>
      <div className='absolute flex flex-col py-3 px-4'>
        <h2 className='text-teal-blur font-rajdhani font-semibold text-3xl leading-none mb-1.5 mt-1 uppercase'>{heading}</h2>
        <p className='text-red-blur font-rajdhani font-medium text-xl leading-6 text-[20px]'>{paragraph}</p>
      </div>
      <SVG />
    </div>
  )
}

export default RowThird
