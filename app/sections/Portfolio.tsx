import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'
import PortfolioFrame from '../ui/PortfolioFrame'

const PortfolioTile = () => {
  return (
    <>
      <div className={' h-full relative flex items-end overflow-hidden'}>
        <div className='absolute top-0 w-full h-full'>
          <video className='w-full h-full object-cover' loop autoPlay muted poster='' src={'videos/portfolio/front/tiktok.mp4'} />
        </div>
        <div className='relative bottom-0 pb-0 pl-2'>
          <h2 className='uppercase text-teal-blur text-[29px] font-semibold leading-7 px-2 pt-0.5 block bg-opacity-85 bg-black'>
            TikTok Collection
          </h2>
          <h3 className='uppercase text-red-blur text-[19px] font-medium leading-tight  px-2 pt-0.5  inline-block bg-opacity-85 bg-black mt-0.5'>
            Front end lead
          </h3>
        </div>
      </div>
      <div className='w-fit pt-0.5 pointer-events-none'>
        <ul className=' flex gap-3 text-black uppercase font-semibold text-[16px] mt-4 -ml-2.5 '>
          <li className='bg-red shadow-red-blur px-2'>Motion</li>
          <li className='bg-red shadow-red-blur px-2'>Development</li>
        </ul>
      </div>
    </>
  )
}

const Portfolio = () => {
  return (
    <PanelBackground headerTitle='Past Gigs' contentHead={<ContentHead icon={<IconSmall />} heading='Portfolio' />}>
      <div className='grid grid-cols-2 gap-5 mb-2 mr-1'>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
      </div>
    </PanelBackground>
  )
}

export default Portfolio
