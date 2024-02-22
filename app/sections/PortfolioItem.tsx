import ButtonDefault from '../ui/ButtonDefault'
import PanelBackground from '../ui/PanelContent'
import VideoFrame from '../ui/VideoFrame'

const PortfolioItem = () => {
  return (
    <PanelBackground headerTitle='Past Gigs'>
      <div className='m-2'>
        <div className={'h-full relative flex items-end overflow-hidden'}>
          <div className='w-full h-full'>
            <h2 className='uppercase text-teal-blur text-[29px] font-semibold leading-5  pt-0.5 block '>TikTok Collection</h2>
            <h3 className='uppercase text-teal-blur text-[19px] font-medium leading-tight pt-0.5  inline-block '>Front end lead</h3>
          </div>
        </div>
        <div className='w-fit pointer-events-none'>
          <ul className='flex gap-3 text-black uppercase font-semibold text-[16px] mt-1'>
            <li className='bg-red shadow-red-blur px-2'>Motion</li>
            <li className='bg-red shadow-red-blur px-2'>Development</li>
          </ul>
        </div>
        <div className='my-3 text-red-blur text-[22px]'></div>
        <VideoFrame videoURL={'videos/portfolio/front/tiktok.mp4'} />
        <div className='flex flex-row justify-between my-4'>
          <ButtonDefault label='Launch' />

          <div className='flex flex-row -mr-3.5'>
            <ButtonDefault label='Back' />
            <ButtonDefault />
          </div>
        </div>
      </div>
    </PanelBackground>
  )
}

export default PortfolioItem
