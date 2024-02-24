import { BLACK, RED } from '../libs/UIConstants'
import IconDefault from './IconDefault'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'

const MAX_WIDTH = 1103

const SVG = () => {
  return (
    <svg width={MAX_WIDTH} height='172' viewBox={`0 0 ${MAX_WIDTH} 172`} fill='none'>
      <path d='M2 170V2H1101V154.909L1085.99 170H2Z' fill={BLACK} fillOpacity='0.85' />
      <path d='M2 170V2H1101V154.909L1085.99 170H2Z' fill={RED} fillOpacity='0.1' />
      <path d='M2 170V2H1101V154.909L1085.99 170H2Z' fill='url(#redTile)' />
      <path
        d='M2 1H1V2V170V171H2H1085.99H1086.4L1086.7 170.705L1101.71 155.614L1102 155.322V154.909V2V1H1101H2Z'
        stroke={RED}
        strokeOpacity='0.6'
        strokeWidth='2'
      />
      {RED_TILE_PATTERN}
    </svg>
  )
}

const RowFull = ({
  heading,
  subHeading,
  paragraph,
  svgIcon
}: {
  heading: string
  subHeading: string
  paragraph: string
  svgIcon: JSX.Element
}) => {
  return (
    <div className='relative flex items-center ' style={{ maxWidth: MAX_WIDTH }}>
      <div className='absolute flex flex-row items-center px-1 w-auto'>
        <div className='w-fit pl-3'>
          <div className='absolute -ml-0.5'>{svgIcon}</div>
          <IconDefault />
        </div>
        <div className={'w-auto pl-1.5 pr-3.5'}>
          <h1 className='font-rajdhani font-semibold text-teal-blur text-[1.75rem] leading-none'>{heading}</h1>
          <h2 className='font-rajdhani font-semibold text-red-blur text-[1.25rem] leading-none '>{subHeading}</h2>
          <p className='font-rajdhani font-medium text-red-blur text-[1.125rem] leading-5 mt-1'>{paragraph}</p>
        </div>
      </div>
      <SVG />
    </div>
  )
}

export default RowFull
