import Header from './Header'
import { BottomFooter, BottomLeftCornerSVG, TopLeftCornerSVG } from './UIElements'

interface PanelBackgroundProps {
  heading: string
  children: React.ReactNode
  contentHead?: React.ReactNode
}

const index = ({ heading, children, contentHead }: PanelBackgroundProps) => {
  return (
    <div className='relative min-w-[40rem] max-w-[72.5rem] mb-2 '>
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
          <div className='bg-grid-blue pl-3 pr-3 pt-2.5 pb-3.5 border-red border-x-2 border-opacity-60 uppercase shadow-red-blur '>
            {contentHead ? contentHead : null}
            <div className={'max-h-[900px] pr-3 overflow-y-auto red-scrollbar -my-2'}>{children}</div>
          </div>
          <BottomFooter />
        </div>
      </div>
    </div>
  )
}

export default index
