import { Dispatch, SetStateAction } from 'react'
import { RED } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import IconSmall from '../ui/IconSmall'
import PanelContent from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'
import VideoFrame from '../ui/VideoFrame'
import HistorySVG from '../ui/svg/mainmenu/HistorySVG'
import { SoundAudioLevelControls } from './data/types'
import { NextRouter } from 'next/router'

const History = ({
  soundAudioLevelControls,
  setShouldMapDarkness
}: {
  soundAudioLevelControls: SoundAudioLevelControls
  setShouldMapDarkness: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <>
      <PanelContent
        headerTitle='Backstory'
        contentHead={
          <>
            <ContentHead
              icon={
                <>
                  <HistorySVG />
                  <IconSmall />
                </>
              }
              heading='Evoke Labs History'
              button={
                <div className='scale-[60%] w-[100%] 2xl:scale-[100%] 2xl:w-fit origin-right place-self-end mr-auto right-3 md:right-0 relative'>
                  <ButtonDefault />
                </div>
              }
            />
          </>
        }
      >
        <VideoFrame
          videoURL='./videos/Evokelabs-History.mp4'
          soundAudioLevelControls={soundAudioLevelControls}
          setShouldMapDarkness={setShouldMapDarkness}
        />
        <div className='flex flex-row mt-2 justify-end -mr-3'></div>
      </PanelContent>
    </>
  )
}

export default History
