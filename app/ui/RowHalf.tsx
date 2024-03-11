import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const RowHalf = ({ heading, paragraph, PNG }: { heading: string; paragraph: string; PNG: StaticImport }) => {
  return (
    <>
      <div className='relative items-center flex w-full lg:w-[49.4%] lg:min-h-[9em] h-fill bg-grid-darkRed border-2-red gap-3'>
        <div className='ml-2 my-2 bg-grid-blue border-2-red w-[220px] '>
          <Image src={PNG} alt={heading} className='text-teal font-rajdhani font-semibold text-center opacity-80' />
        </div>
        <div className={'pr-3 lg:pr-2 mt-1.5 w-full'}>
          <h2
            dangerouslySetInnerHTML={{ __html: heading }}
            className='text-teal-blur uppercase font-rajdhani text-[18px] sm:text-[20px] md:text-[28px] font-semibold leading-none mb-1 md:mb-1.5'
          ></h2>
          <p className='text-red-blur font-rajdhani text-[14px] sm:text-[16px] md:text-[19px] leading-4 sm:leading-5 lg:leading-6 font-medium'>
            {paragraph}
          </p>
        </div>
      </div>
    </>
  )
}

export default RowHalf
