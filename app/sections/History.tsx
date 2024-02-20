import ButtonDefault from '../ui/ButtonDefault'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelBackground'
import ContentHead from '../ui/PanelBackground/ContentHead'
import VideoFrame from '../ui/VideoFrame'

const History = () => {
  return (
    <PanelBackground heading='Backstory' contentHead={<ContentHead icon={<IconSmall />} heading='History' />}>
      <VideoFrame videoURL='./videos/JOI-Introduction.mp4' />
    </PanelBackground>
  )
}

export default History
