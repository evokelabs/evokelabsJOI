import HR from '@/app/ui/HR'
import ButtonDefault from '../../ui/ButtonDefault'
import PanelBackground from '../../ui/PanelContent'
import VideoFrame from '../../ui/VideoFrame'
import YouTubeSVG from '@/app/ui/svg/button/YouTubeSVG'
import FigmaSVG from '@/app/ui/svg/button/FigmaSVG'
import LaunchSVG from '@/app/ui/svg/button/LaunchSVG'
import BackSVG from '@/app/ui/svg/button/BackSVG'
import { SoundAudioLevelControls } from '../data/types'
import { RoutesContext } from '@/app/libs/RoutesContext'
import { Dispatch, SetStateAction, useContext, useEffect } from 'react'
import VideoFrameMute from '@/app/ui/VideoFrameMute'

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
  slug: string
  mutedVideo: boolean
}

interface PortfolioItemProps extends PortfolioItem {
  soundAudioLevelControls: SoundAudioLevelControls
  setShouldMapDarkness: Dispatch<SetStateAction<boolean>>
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
  slug,
  soundAudioLevelControls,
  setShouldMapDarkness,
  mutedVideo
}) => {
  const { currentPortfolioSelection, setCurrentPortfolioSelection } = useContext(RoutesContext)

  const setUserMutedAll = (muteAll: boolean) => {
    console.log('muting all')
    soundAudioLevelControls.setMuteAll(true)
    soundAudioLevelControls.setMuteMusic(true)
    soundAudioLevelControls.setMuteRain(true)
    soundAudioLevelControls.setMuteSFX(true)
  }

  useEffect(() => {
    // Cleanup function
    return () => {
      setCurrentPortfolioSelection(null)
    }
  }, [])

  return (
    <PanelBackground headerTitle='Past Gigs'>
      <div className='flex flex-row justify-between items-center'>
        <div className='m-2 relative flex flex-col justify-start'>
          <h2 className='uppercase text-teal-blur text-[32px] font-semibold leading-7 pt-0.5 inline-block bg-opacity-85 bg-black'>
            {heading}
          </h2>

          <h3 className='uppercase text-red-blur text-[19px] font-medium leading-tight pt-0.5 inline-block bg-opacity-85 bg-black '>
            {subHeading}
          </h3>

          <div className='relative w-fit pointer-events-none'>
            <ul className='flex flex-wrap gap-3 text-black uppercase font-semibold text-[16px] mt-1'>
              {technology.map((tech, index) => (
                <li key={index} className='bg-red shadow-red-blur px-2'>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='scale-[60%] min-w-[16em] lg:scale-[100%] lg:w-fit h-fit origin-right right-2 md:right-2 relative hidden md:block items-center'>
          <ButtonDefault label='BACK' svgIcon={<BackSVG />} />
        </div>
      </div>

      <div className='mt-3 w-full '>
        {!mutedVideo ? (
          <VideoFrame videoURL={mainVideo} soundAudioLevelControls={soundAudioLevelControls} setShouldMapDarkness={setShouldMapDarkness} />
        ) : (
          <VideoFrameMute videoURL={mainVideo} soundAudioLevelControls={soundAudioLevelControls} />
        )}
      </div>
      {desc && (
        <>
          <div dangerouslySetInnerHTML={{ __html: desc }} className='mt-3 text-red-blur font-semibold text-[21px] space-y-6'></div>
          {/* <HR /> */}
        </>
      )}
      {(link || desc) && (
        <div className='flex flex-row mt-4 mb-3 justify-between'>
          <div onClick={() => setUserMutedAll(true)}>{link && <ButtonDefault label='LAUNCH' svgIcon={<LaunchSVG />} link={link} />}</div>
          <div className='flex flex-row -mr-3.5'>
            {/* <ButtonDefault label='Figma' svgIcon={<FigmaSVG />} /> */}
            {/* <ButtonDefault label='YouTube' svgIcon={<YouTubeSVG />} /> */}
            <ButtonDefault />
          </div>
        </div>
      )}
    </PanelBackground>
  )
}

export default PortfolioItem
