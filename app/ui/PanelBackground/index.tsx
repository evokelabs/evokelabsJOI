import Header from './Header'
import ContentHead from './ContentHead'
import { BottomFooter, BottomLeftCornerSVG, TopLeftCornerSVG } from './UIElements'

const index = ({ heading, children }: { heading: string; children: React.ReactNode }) => {
  return (
    <div className='relative min-w-[40rem] max-w-[70rem]'>
      <div className='relative flex flex-row h-full'>
        <div className='w-auto h-auto grid grid-rows-[min-content,auto,min-content]'>
          <div className='pt-4'>
            <TopLeftCornerSVG />
          </div>
          <div className='w-[11px] bg-grid-red border-red border-2 border-r-0 border-opacity-60 justify-self-end border-t-0 border-b-0'></div>
          <div className='justify-self-end '>
            <BottomLeftCornerSVG />
          </div>
        </div>

        <div className='w-full'>
          <Header heading={heading} />
          <div className='bg-grid-blue pl-5 pr-3 pt-4 pb-3 border-red border-x-2 border-opacity-60 '>
            <ContentHead />
            <div className={'max-h-[900px] pr-3 overflow-y-auto red-scrollbar -my-2'}>{children}</div>
          </div>
          <BottomFooter />
        </div>
      </div>
    </div>
  )
}

export default index
