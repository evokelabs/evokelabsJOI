import HR from '../ui/HR'
import PanelContent from '../ui/PanelContent'
import IconSmall from '../ui/IconSmall'
import VideoFrame from '../ui/VideoFrame'
import ButtonDefault from '../ui/ButtonDefault'
import JOISVG from '../ui/svg/mainmenu/JOISVG'
import YouTubeSVG from '../ui/svg/button/YouTubeSVG'
import { SoundAudioLevelControls } from './data/types'
import { Dispatch, SetStateAction } from 'react'

const ContentHead = () => {
  return (
    <>
      <div className='flex flex-row my-1 gap-1 md:gap-2'>
        <div className='w-fit hidden md:block'>
          <JOISVG />
          <IconSmall />
        </div>
        <div className='flex flex-col pr-4 justify-center gap-1'>
          <h2 className='text-teal-blur font-semibold leading-[0.8em] text-[1.2rem]  md:text-[1.85rem] '>
            INTRODUCING JOI: A DIGITAL LOVE STORY
          </h2>
          <p className=' text-red-blur leading-4 md:leading-5 font-medium text-[1rem] md:text-[1.4rem]'>
            AN EVOKE LABS ORIGINAL SHORT USING THE LATEST IN 3D ANIMATION, 2D MOTION, TRADITIONAL FILM TECHNIQUES, ARTIFICIAL INTELLIGENCE,
            VR / AR AND MACHINIMA TO BRING JOI TO LIFE
          </p>
        </div>
      </div>
      <HR />
    </>
  )
}

const JOISpecial = ({
  soundAudioLevelControls,
  setShouldMapDarkness
}: {
  soundAudioLevelControls: SoundAudioLevelControls
  setShouldMapDarkness: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <PanelContent headerTitle='JOI Special' contentHead={<ContentHead />}>
      <VideoFrame
        videoURL={`/videos/JOI-Introduction.mp4`}
        soundAudioLevelControls={soundAudioLevelControls}
        setShouldMapDarkness={setShouldMapDarkness}
      />
      <div className='flex flex-col md:flex-row justify-between gap-2 pb-1'>
        <div className='flex mt-2 md:mt-3 justify-start h-[2.6em] md:h-full'>
          <div className='scale-[60%] md:scale-100 origin-top-left'>
            <ButtonDefault label='4K VERSION' svgIcon={<YouTubeSVG />} />
          </div>
        </div>
        <div className='flex flex-row md:mt-3 mr-0 md:-mr-3 h-[2.6em] md:h-full'>
          <div className='scale-[60%] md:scale-100 origin-top-left'>
            <ButtonDefault />
          </div>
        </div>
      </div>
    </PanelContent>
  )
}

export default JOISpecial
