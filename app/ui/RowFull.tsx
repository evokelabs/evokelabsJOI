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
        <div className='relative items-center flex lg:min-h-[9em] bg-grid-darkRed border-l-2 border-red border-t-2 border-b-2 border-opacity-60 w-full flex-col md:flex-row'>
          <div className='w-fit lg:w-[150px] p-2 pr-0 lg:p-2 z-20 relative'>
            <div className='relative top-0 '>
              <IconDefault />
            </div>
            <div className='absolute top-2.5'>{svgIcon}</div>
          </div>
          <div className={'w-full relative p-3 md:p-0 lg:p-5 lg:pl-5 md:text-left -mt-3 md:mt-0 text-center '}>
            <h1 className='font-rajdhani font-bold text-teal-blur text-[1.25rem] lg:text-[1.9rem] leading-[0.8em]'>{heading}</h1>
            <h2 className='font-rajdhani font-bold text-red-blur text-[1rem] lg:text-[1.5rem] leading-none'>{subHeading}</h2>
            <p className='font-rajdhani font-medium text-red-blur text-[0.8rem] leading-4 lg:text-[1.225rem] lg:leading-5 '>{paragraph}</p>
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
