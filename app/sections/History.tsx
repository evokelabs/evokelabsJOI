import ButtonDefault from '../ui/ButtonDefault'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelBackground'
import ContentHead from '../ui/PanelBackground/ContentHead'
import VideoFrame from '../ui/VideoFrame'

const History = () => {
  return (
    <PanelBackground heading='Backstory' contentHead={<ContentHead icon={<IconSmall />} heading='Evoke Labs History' />}>
      <VideoFrame videoURL='./videos/Evokelabs-History.mp4' />
    </PanelBackground>
  )
}

export default History
