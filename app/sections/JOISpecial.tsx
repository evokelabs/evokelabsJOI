import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelBackground'
import ContentHead from '../ui/PanelBackground/ContentHead'
import VideoFrame from '../ui/VideoFrame'

const JOISpecial = () => {
  return (
    <PanelBackground
      heading='JOI Special'
      contentHead={<ContentHead icon={<IconSmall />} heading='Introducing JOI: A Digital Love Story' />}
    >
      <VideoFrame videoURL='./videos/JOI-Introduction.mp4' />
    </PanelBackground>
  )
}

export default JOISpecial
