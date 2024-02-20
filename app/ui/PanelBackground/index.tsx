import ContentHead from './ContentHead'
import Header from './Header'
import { BottomFooter, BottomLeftCornerSVG, TopLeftCornerSVG } from './UIElements'

interface PanelBackgroundProps {
  heading: string
  children: React.ReactNode
}

const index = ({ heading, children }: PanelBackgroundProps) => {
  return (
    <div className='relative min-w-[40rem] mb-2 '>
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
          <div className='bg-grid-blue pl-3 pr-0 pt-2.5  border-red border-x-2 border-opacity-60  shadow-red-blur '>
            <div className={'max-h-[660px] pr-3 overflow-y-auto red-scrollbar '}>{children}</div>
          </div>
          <BottomFooter />
        </div>
      </div>
    </div>
  )
}

export default index
