import { BottomRightCornerLarge } from './PanelContent/UIElements'

const MAX_WIDTH = 361

const RowThird = ({ heading, paragraph }: { heading: string; paragraph: string }) => {
  return (
    <>
      <div className='inline-flex lg:w-1/3 flex-col '>
        <div className='relative items-center flex lg:min-h-[9em] h-fill bg-grid-darkRed border-r-2 border-l-2 border-t-2 border-red border-opacity-60 '>
          <div className={'mt-3.5 w-full relative pr-3.5 pl-3.5'}>
            <h2
              dangerouslySetInnerHTML={{ __html: heading }}
              className='text-teal-blur uppercase font-rajdhani text-[19px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-semibold leading-none mb-0.5 lg:mb-1'
            ></h2>
            <p className='text-red-blur font-rajdhani text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18.5px]  2xl:text-[20px] leading-4 sm:leading-5 lg:leading-6 font-medium'>
              {paragraph}
            </p>
          </div>
        </div>
        <div className='flex bottom-0 relative'>
          <div
            style={{ width: 'calc(100% - 22px)' }}
            className='w-full h-[22px] bg-grid-darkRed border-l-2 border-b-2 border-red border-opacity-60 '
          ></div>
          <BottomRightCornerLarge />
        </div>
      </div>
    </>
  )
}

export default RowThird
