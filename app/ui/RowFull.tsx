import { BLACK, RED } from '../libs/UIConstants'
import IconDefault from './IconDefault'
import { BottomRightCornerSmall } from './PanelContent/UIElements'
import { RED_TILE_PATTERN } from './libs/TitleFillsPatterns'

const MAX_WIDTH = 1103

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
    <>
      <div className='inline-flex w-full flex-row '>
        <div className='relative items-center flex lg:min-h-[9em] h-fill bg-grid-darkRed border-l-2 border-red border-t-2 border-b-2 border-opacity-60 w-full'>
          <div className='w-[150px] p-2 z-20'>
            <div className='relative top-0'>
              <IconDefault />
            </div>
            <div className='absolute top-2.5 left-2'>{svgIcon}</div>
          </div>
          <div className={'w-full relative left-3 pr-6 pl-1'}>
            <h1 className='font-rajdhani font-semibold text-teal-blur text-[1.75rem] leading-none'>{heading}</h1>
            <h2 className='font-rajdhani font-semibold text-red-blur text-[1.25rem] leading-none '>{subHeading}</h2>
            <p className='font-rajdhani font-medium text-red-blur text-[1.125rem] leading-5 mt-1'>{paragraph}</p>
          </div>
        </div>
        <div className='flex relative flex-col'>
          <div
            style={{ height: 'calc(100% - 17px)' }}
            className='w-full h-[17px] bg-grid-darkRed border-red border-r-2 border-t-2  border-opacity-60 '
          ></div>
          <BottomRightCornerSmall />
        </div>
      </div>
    </>
  )
}

export default RowFull
