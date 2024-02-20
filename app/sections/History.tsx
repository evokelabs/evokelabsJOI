import ButtonDefault from '../ui/ButtonDefault'
import IconSmall from '../ui/IconSmall'
import PanelContent from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'
import PanelHeader from '../ui/PanelContent/PanelHeader'
import VideoFrame from '../ui/VideoFrame'

const History = () => {
  return (
    <>
      <PanelContent headerTitle='Backstory' contentHead={<ContentHead icon={<IconSmall />} heading='Evokelabs History' />}>
        <VideoFrame videoURL='./videos/Evokelabs-History.mp4' />
      </PanelContent>
    </>
  )
}

export default History
