import { RED, TEAL } from '../libs/UIConstants'
import HR from '../ui/HR'
import HeadingHighlight from '../ui/HeadingHighlight'
import IconSmall from '../ui/IconSmall'
import PanelContent from '../ui/PanelContent'
import ParagraphHighlight from '../ui/ParagraphHighlight'

const ContentHead = () => {
  return (
    <>
      <div className='flex flex-row my-1 gap-6'>
        <div className='w-[70px]'>
          <IconSmall />
        </div>
        <div className='flex flex-col '>
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

const Services = () => {
  return (
    <PanelContent headerTitle='Corpo Guide' contentHead={<ContentHead />}>
      <HeadingHighlight BGColor='TEAL' fullWidth={false} heading='YOUR CREATIVE TECHNOLOGIST PARTNER' />
      <ParagraphHighlight
        BGColor={TEAL}
        paragraph='Creative Technologists combine creative, development, and technology to address digital challenges and deliver online projects of exceptional quality.'
      />
    </PanelContent>
  )
}

export default Services
