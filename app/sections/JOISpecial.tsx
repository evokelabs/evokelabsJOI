import HR from '../ui/HR'
import PanelContent from '../ui/PanelContent'
import IconSmall from '../ui/IconSmall'
import VideoFrame from '../ui/VideoFrame'
import ButtonDefault from '../ui/ButtonDefault'
import JOISVG from '../ui/svg/mainMenu/JOISVG'
import YouTubeSVG from '../ui/svg/button/YouTubeSVG'
import { SoundAudioLevelControls } from './data/types'
import { Dispatch, SetStateAction } from 'react'

const ContentHead = () => {
  return (
    <>
      <div className='flex flex-row my-1 gap-6'>
        <div className='w-[70px]'>
          <JOISVG />
          <IconSmall />
        </div>
        <div className='flex flex-col pr-4'>
          <h2 className='text-teal-blur font-semibold leading-tight text-[1.55rem] '>INTRODUCING JOI: A DIGITAL LOVE STORY</h2>
          <p className='text-[1.4rem] text-red-blur leading-5 font-medium'>
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
        videoURL='./videos/JOI-Introduction.mp4'
        soundAudioLevelControls={soundAudioLevelControls}
        setShouldMapDarkness={setShouldMapDarkness}
      />
      <div className='flex flex-row  justify-between'>
        <div className='flex flex-row mt-3 justify-end -mr-3'>
          <ButtonDefault label='4K VERSION' svgIcon={<YouTubeSVG />} />
        </div>
        <div className='flex flex-row mt-3 justify-end -mr-3'>
          <ButtonDefault />
        </div>
      </div>
    </PanelContent>
  )
}

export default JOISpecial
