import { BLACK, BLUE_DARK, RED, RED_BLACK, RED_DARK } from '@/app/libs/UIConstants'
import { RED_TILE_PATTERN } from '../libs/TitleFillsPatterns'
import RedCRTBlur from '../libs/RedCRTBlur'

export const BottomFooter = () => {
  return (
    <div className='flex flex-row -mr-3'>
      <div className='bg-grid-blue w-full  border-red border-b-2 border-l-2 border-opacity-60 '></div>
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
    <svg width='26' height='13' viewBox='0 0 26 13'>
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M14 -15V1L2 13H-8V-15H14Z' fill={BLUE_DARK} />
        <path d='M14 -15V1L2 13H-8V-15H14Z' fill='url(#blueTile)' />
        <path d='M2 13L14 1V-15H12V0L1 11H-8V13H2Z' fill={RED} fillOpacity={0.6} />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

export const BottomRightCornerLarge = () => {
  return (
    <svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
      <path d='M0 0H22V1L1 22H0V0Z' fill={BLACK} fillOpacity={0.85} />
      <path d='M0 0H22V1L1 22H0V0Z' fill={RED_BLACK} fillOpacity={0.1} />
      <path d='M0 0H22V1L1 22H0V0Z' fill='url(#redTile)' />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M0 20L20 0H22V1L1 22H0V20Z' fill={RED} fillOpacity={0.6} />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}

export const BottomRightCornerSmall = () => {
  return (
    <svg width='17' height='17' viewBox='0 0 17 17' fill='none'>
      <path d='M0 0H22V1L1 22H0V0Z' fill={BLACK} fillOpacity={0.85} />
      <path d='M0 0H22V1L1 22H0V0Z' fill={RED_BLACK} fillOpacity={0.1} />
      <path d='M0 15V0H15L0 15Z' fill='url(#redTile)' />
      <RedCRTBlur />
      <g filter='url(#RedCRTBlur1) url(#RedCRTBlur2)'>
        <path d='M17 0.734512L0.817749 17H0V15L15 0H17V0.734512Z' fill={RED} fillOpacity={0.6} />
      </g>
      {RED_TILE_PATTERN}
    </svg>
  )
}
