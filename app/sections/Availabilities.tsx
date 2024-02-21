import { RED } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import HeadingHighlight from '../ui/HeadingHighlight'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'

const Availabilities = () => {
  return (
    <PanelBackground headerTitle='Fix a booking' contentHead={<ContentHead icon={<IconSmall />} heading='Availabilities' />}>
      <div className='space-y-10 my-4'>
        <HeadingHighlight BGColor={RED} fullWidth={false} heading='currently available' />
        <ButtonDefault label='Send an email' />
      </div>
    </PanelBackground>
  )
}

export default Availabilities
