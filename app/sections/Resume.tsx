import { RED } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import HeadingHighlight from '../ui/HeadingHighlight'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelBackground'
import ContentHead from '../ui/PanelBackground/ContentHead'

const Resume = () => {
  return (
    <PanelBackground
      heading='Dossier'
      contentHead={<ContentHead icon={<IconSmall />} heading='Resume' button={<ButtonDefault label='hardcopy' />} />}
    >
      <HeadingHighlight heading={'BIO'} fullWidth={true} BGColor={RED} />
      <div className='mb-3'>
        <p className='font-rajdhani text-red-blur text-[1.375rem] font-medium leading-[26px]'>
          <span className='text-teal-blur font-semibold'>Creative Technologist</span> with over Creative Technologist with over 20+ years of
          experience in digital strategy, design, UI/UX, web development, motion, and 3D. Proven track record collaborating with advertising
          agencies, creative studios, corporations, and start-ups to deliver hundreds of successful digital projects. Specialising in
          front-end technologies and fostering positive team relations.
        </p>
      </div>
      <HeadingHighlight heading={'Experience'} fullWidth={true} BGColor={RED} />
    </PanelBackground>
  )
}

export default Resume
