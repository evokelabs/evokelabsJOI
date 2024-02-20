import HR from '../ui/HR'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelBackground'
import ContentHead from '../ui/PanelBackground/ContentHead'
import VideoFrame from '../ui/VideoFrame'

const JOISpecial = () => {
  return (
    <PanelBackground heading='Backstory' contentHead={<ContentHead icon={<IconSmall />} heading='Evoke Labs History' />}>
      <VideoFrame videoURL='./videos/JOI-Introduction.mp4' />
    </PanelBackground>
  )
}

export default JOISpecial
