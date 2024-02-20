import { RED, RED_DARK } from '@/app/libs/UIConstants'
import IconClose from '../IconClose'
import { RED_TILE_PATTERN } from '../libs/TitleFillsPatterns'

const TopHeaderSVG = () => {
  return (
    <svg width='352' height='63' viewBox='0 0 352 63'>
      <path d='M350 14L336 0H9L0 9V63H352V14' fill={RED_DARK} fillOpacity={0.85} />
      <path d='M350 14L336 0H9L0 9V63H352V14' fill={RED} fillOpacity={0.1} />
      <path d='M350 14L336 0H9L0 9V63H352V14' fill='url(#redTile)' />
      <path d='M336 0L350 14H352V16H349L335 2H10L2 10V64H349V66H0V9.17157L9.17157 0H336Z' fill={RED} fillOpacity={0.6} />
      {RED_TILE_PATTERN}
    </svg>
  )
}

const PanelHeader = ({ headerTitle }: { headerTitle: string }) => {
  return (
    <div className='flex items-end border-red border-b-2 border-opacity-60 relative top-0.5'>
      <div className='absolute'>
        <h1 className='font-orbitron font-medium text-teal-blur text-[2rem] leading-none px-5 py-3.5 uppercase'>{headerTitle}</h1>
      </div>
      <div className='inline-block'>
        <TopHeaderSVG />
      </div>
      <div className='flex items-center relative bg-grid-red w-full h-[49px] border-red border-2 border-b-0  border-l-0 border-opacity-60  justify-end pr-1.5 shadow-red-blur'>
        <IconClose />
      </div>
    </div>
  )
}

export default PanelHeader
