import HR from '@/app/ui/HR'
import ButtonDefault from '../../ui/ButtonDefault'
import PanelBackground from '../../ui/PanelContent'
import VideoFrame from '../../ui/VideoFrame'
import YouTubeSVG from '@/app/ui/svg/button/YouTubeSVG'
import FigmaSVG from '@/app/ui/svg/button/FigmaSVG'
import GithubSVG from '@/app/ui/svg/button/GithubSVG'
import LaunchSVG from '@/app/ui/svg/button/LaunchSVG'
import BackSVG from '@/app/ui/svg/button/BackSVG'
import { SoundAudioLevelControls } from '../data/types'
import { RoutesContext } from '@/app/libs/RoutesContext'
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import VideoFrameMute from '@/app/ui/VideoFrameMute'
import useSoundControl from '@/app/libs/useSoundControl'

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
  isNew?: boolean
  figma?: string
  github?: string
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
  mutedVideo,
  figma,
  github
}) => {
  const { currentPortfolioSelection, setCurrentPortfolioSelection } = useContext(RoutesContext)

  const { setUserMutedAll, wasMuted } = useSoundControl(soundAudioLevelControls)

  return (
    <PanelBackground headerTitle='Past Gigs'>
      <div className='flex flex-row justify-between items-start md:items-center '>
        <div className='m-2 ml-0 relative flex flex-col justify-start'>
          <h2 className='uppercase text-teal-blur text-[28px] md:text-[32px] font-semibold leading-7 bg-opacity-85 inline'>{heading}</h2>

          <h3 className='uppercase text-red-blur text-[15px] md:text-[19px] font-medium leading-tight bg-opacity-85 inline'>
            {subHeading}
          </h3>

          <div className='relative w-fit pointer-events-none'>
            <ul className='flex flex-wrap gap-2 text-black uppercase font-semibold text-[14px] md:text-[16px] mt-1'>
              {technology.map((tech, index) => (
                <li key={index} className='bg-red shadow-red-blur px-2 pt-0.5'>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='min-w-[16em] md:w-fit h-fit origin-right items-center absolute md:relative top-[0.45em] md:top-0 right-12 md:right-0 md-0 scale-[50%] md:scale-100'>
          <ButtonDefault label='BACK' svgIcon={<BackSVG />} />
        </div>
      </div>

      <div className='mt-1 w-full'>
        {!mutedVideo ? (
          <VideoFrame videoURL={mainVideo} soundAudioLevelControls={soundAudioLevelControls} setShouldMapDarkness={setShouldMapDarkness} />
        ) : (
          <VideoFrameMute videoURL={mainVideo} soundAudioLevelControls={soundAudioLevelControls} />
        )}
      </div>
      {desc && (
        <>
          <div
            dangerouslySetInnerHTML={{ __html: desc }}
            className='mt-3 text-red-blur font-semibold text-[16px] md:text-[21px] space-y-4 md:space-y-6'
          ></div>
          {/* <HR /> */}
        </>
      )}
      {(link || desc) && (
        <div className='flex flex-row mt-2 md:mt-4 md:mb-2 justify-between md:w-full scale-[60%] md:scale-[100%] origin-top-left -mb-6 '>
          {link && (
            <div
              onClick={() => setUserMutedAll(true)}
              onTouchEnd={() => setUserMutedAll(true)}
              className='md:ml-auto flex flex-col justify-start md:justify-end md:w-full md:scale-100 origin-left'
            >
              <ButtonDefault label='LAUNCH' svgIcon={<LaunchSVG />} link={link} />
            </div>
          )}

          <div className='md:ml-auto flex flex-col justify-start md:justify-end md:w-full  md:scale-100 origin-right md:place-items-end'>
            <ButtonDefault />
          </div>
        </div>
      )}
      {figma && github && (
        <div className='flex  gap-y-2 flex-row mt-2 md:mt-4 md:mb-2 md:w-full scale-[60%] md:scale-[100%] origin-top-left -mb-6 '>
          <div
            onClick={() => setUserMutedAll(true)}
            onTouchEnd={() => setUserMutedAll(true)}
            className='md:ml-auto flex flex-col justify-start md:justify-end md:w-full md:scale-100 origin-left'
          >
            <ButtonDefault label={'UI/UX DESIGN'} svgIcon={<FigmaSVG />} link={figma} />
          </div>
          <div
            onClick={() => setUserMutedAll(true)}
            onTouchEnd={() => setUserMutedAll(true)}
            className='md:ml-auto flex flex-col justify-start md:justify-end md:w-full md:scale-100 origin-left relative md:-left-6'
          >
            <ButtonDefault label='SOURCE CODE' svgIcon={<GithubSVG />} link={github} />
          </div>
          <div className='md:ml-auto flex flex-col justify-start md:justify-end md:w-full  md:scale-100 origin-right md:place-items-end'>
            <ButtonDefault />
          </div>
        </div>
      )}
    </PanelBackground>
  )
}

export default PortfolioItem
