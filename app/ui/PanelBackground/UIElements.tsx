import { BLUE_DARK, RED, RED_DARK } from '@/app/libs/UIConstants'
import { RED_TILE_PATTERN } from '../libs/TitleFillsPatterns'

export const BottomFooter = () => {
  return (
    <div className='flex flex-row w-full h-6'>
      <div className='bg-grid-blue w-full  border-red border-b-2 border-l-2 border-opacity-60'></div>
      <div className='ml-auto h-fit'>
        <BottomRightCornerSVG />
      </div>
    </div>
  )
}

export const TopLeftCornerSVG = () => {
  return (
    <svg width='16' height='71' viewBox='0 0 16 71'>
      <path d='M16 71V0H7L0 7V66.5L4 71' fill={RED_DARK} fillOpacity={0.85} />
      <path d='M16 71V0H7L0 7V66.5L4 71' fill={RED} fillOpacity={0.1} />
      <path d='M16 71V0H7L0 7V66.5L4 71' fill='url(#redTile)' />
      <path d='M16 0V71V2H8L2 8V66L7 71L5.58579 72.4142L0 66.8284V7.17157L7.17157 0H16Z' fill={RED} fillOpacity={0.6} />
      {RED_TILE_PATTERN}
    </svg>
  )
}

export const BottomLeftCornerSVG = () => {
  return (
    <svg width='16' height='24' viewBox='0 0 16 24'>
      <path d='M8 -3L0 5V24H18V-3' fill={RED_DARK} fillOpacity={0.85} />
      <path d='M8 -3L0 5V24H18V-3' fill={RED} fillOpacity={0.1} />
      <path d='M8 -3L0 5V24H18V-3' fill='url(#redTile)' />
      <path d='M5 -3V0L0 5V24H18V-4H16V22H2V5.82843L7 1V-3H5Z' fill={RED} fillOpacity={0.6} />
      {RED_TILE_PATTERN}
    </svg>
  )
}

export const BottomRightCornerSVG = () => {
  return (
    <svg width='14' height='24' viewBox='0 0 14 24'>
      <path d='M14 -4V12L2 24H-8V-4H14Z' fill={BLUE_DARK} />
      <path d='M14 -4V12L2 24H-8V-4H14Z' fill='url(#blueTile)' />
      <path d='M2 24L14 12V-4H12V11L1 22H-8V24H2Z' fill={RED} fillOpacity={0.6} />
      {RED_TILE_PATTERN}
    </svg>
  )
}
