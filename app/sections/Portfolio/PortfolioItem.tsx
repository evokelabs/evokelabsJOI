import HR from '@/app/ui/HR'
import ButtonDefault from '../../ui/ButtonDefault'
import PanelBackground from '../../ui/PanelContent'
import VideoFrame from '../../ui/VideoFrame'
import YouTubeSVG from '@/app/ui/svg/button/YouTubeSVG'
import FigmaSVG from '@/app/ui/svg/button/FigmaSVG'
import LaunchSVG from '@/app/ui/svg/button/LaunchSVG'
import BackSVG from '@/app/ui/svg/button/BackSVG'
import { SoundAudioLevelControls } from '../data/types'

interface PortfolioItem {
  id: number
  heading: string
  subHeading: string
  technology: string[]
  desc: string
  video: string
  thumb: string
  link: string
  mainVideo: string
  date: string
  recommended: number
}

interface PortfolioItemProps extends PortfolioItem {
  soundAudioLevelControls: SoundAudioLevelControls
}
const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  heading,
  subHeading,
  technology,
  desc,
  video,
  thumb,
  link,
  mainVideo,
  soundAudioLevelControls
}) => {
  return (
    <PanelBackground headerTitle='Past Gigs'>
      <div className='m-2 relative'>
        <div className='flex flex-row w-full justify-between'>
          <div className={'h-full relative flex items-end overflow-hidden'}>
            <div className='w-full h-full'>
              <div className='relative'>
                <div>
                  <h2 className='uppercase text-teal-blur text-[32px] font-semibold leading-7 pt-0.5 inline-block bg-opacity-85 bg-black'>
                    {heading}
                  </h2>
                </div>
                <div>
                  <h3 className='uppercase text-red-blur text-[19px] font-medium leading-tight   pt-0.5 inline-block bg-opacity-85 bg-black '>
                    {subHeading}
                  </h3>
                </div>
                <div className='relative w-fit pointer-events-none'>
                  <ul className='flex gap-3 text-black uppercase font-semibold text-[16px] mt-1'>
                    {technology.map((tech, index) => (
                      <li key={index} className='bg-red shadow-red-blur px-2'>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ButtonDefault />
        </div>

        <div className='mt-3'>
          <VideoFrame videoURL={mainVideo} soundAudioLevelControls={soundAudioLevelControls} />
        </div>
        {desc && (
          <>
            <div dangerouslySetInnerHTML={{ __html: desc }} className='mt-3 text-teal-blur text-[20px] space-y-6'></div>
            <HR />
          </>
        )}
        <div className='flex flex-row  my-4 justify-between'>
          <div>{link && <ButtonDefault label='LAUNCH' svgIcon={<LaunchSVG />} />}</div>
          <div className='flex flex-row -mr-3.5'>
            {/* <ButtonDefault label='Figma' svgIcon={<FigmaSVG />} />
            <ButtonDefault label='YouTube' svgIcon={<YouTubeSVG />} /> */}
            <ButtonDefault label='BACK' svgIcon={<BackSVG />} />
          </div>
        </div>
      </div>
    </PanelBackground>
  )
}

export default PortfolioItem
