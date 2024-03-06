import { Dispatch, SetStateAction } from 'react'
import { RED } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import IconSmall from '../ui/IconSmall'
import PanelContent from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'
import VideoFrame from '../ui/VideoFrame'
import HistorySVG from '../ui/svg/mainMenu/HistorySVG'

const History = ({ setMusicVolume }: { setMusicVolume: Dispatch<SetStateAction<number>> }) => {
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
              button={<ButtonDefault />}
            />
          </>
        }
      >
        <VideoFrame videoURL='./videos/Evokelabs-History.mp4' setMusicVolume={setMusicVolume} />
        <div className='flex flex-row mt-2 justify-end -mr-3'></div>
      </PanelContent>
    </>
  )
}

export default History
