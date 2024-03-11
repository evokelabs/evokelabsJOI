import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { BottomRightCornerSmall } from './PanelContent/UIElements'

const RowHalf = ({ heading, paragraph, PNG }: { heading: string; paragraph: string; PNG: StaticImport }) => {
  return (
    <>
      <div className='inline-flex 2xl:w-[49.4%] flex-col '>
        <div className='relative items-center flex lg:min-h-[9em] h-fill bg-grid-darkRed border-r-2 border-l-2 border-t-2 border-red border-opacity-60 '>
          <div className='bg-grid-blue border-2-red w-[140px] lg:w-[180px] left-2.5 top-2 relative z-30'>
            <Image src={PNG} alt={heading} className='text-teal font-rajdhani font-semibold text-center opacity-80' />
          </div>
          <div className={'mt-1.5 w-full relative left-4 top-1 pr-6 pl-1'}>
            <h2
              dangerouslySetInnerHTML={{ __html: heading }}
              className='text-teal-blur uppercase font-rajdhani text-[18px] sm:text-[20px] md:text-[25px] font-semibold leading-none lg:mb-1'
            ></h2>
            <p className='text-red-blur font-rajdhani text-[14px] sm:text-[16px] md:text-[17px] leading-4 sm:leading-5 lg:leading-6 font-medium'>
              {paragraph}
            </p>
          </div>
        </div>
        <div className='flex relative bottom-0'>
          <div
            style={{ width: 'calc(100% - 17px)' }}
            className='w-full h-[17px] bg-grid-darkRed border-l-2 border-b-2 border-red border-opacity-60 '
          ></div>
          <BottomRightCornerSmall />
        </div>
      </div>
    </>
  )
}

export default RowHalf
