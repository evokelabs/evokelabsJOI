import { RED, TEAL } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import HR from '../ui/HR'
import HeadingHighlight from '../ui/HeadingHighlight'
import IconSmall from '../ui/IconSmall'
import PanelContent from '../ui/PanelContent'
import ParagraphHighlight from '../ui/ParagraphHighlight'
import RowHalf from '../ui/RowHalf'
import RowThird from '../ui/RowThird'

const ContentHead = () => {
  return (
    <>
      <div className='flex flex-row my-1 gap-6'>
        <div className='w-[70px]'>
          <IconSmall />
        </div>
        <div className='flex justify-between w-full mr-10'>
          <div className='flex flex-row pr-4'>
            <ul className='ml-4 p text-red font-medium text-[22px] font-default space-y-1' style={{ listStyleType: 'square' }}>
              <li className='leading-[1]'>Australian citizen with full work rights. </li>
              <li className='leading-[1]'>ABN / GST compliant for contract and freelance roles.</li>
              <li className='leading-[1]'>Open to onsite and/or remote gigs. Crypto accepted.</li>
            </ul>
          </div>
          <div className='flex flex-col text-right justify-center space-y-1'>
            <ParagraphHighlight BGColor={RED} fontSize='23px' paragraph='<strong>Current location:</strong> Sydney, Australia' />
            <ParagraphHighlight BGColor={RED} fontSize='23px' paragraph='<strong>ABN:</strong> 53 470 501 232' />
          </div>
        </div>
      </div>
      <HR />
    </>
  )
}

const Services = () => {
  return (
    <PanelContent headerTitle='Corpo Guide' contentHead={<ContentHead />}>
      <div className='mb-5 space-y-2'>
        <HeadingHighlight BGColor={TEAL} fullWidth={false} heading='YOUR CREATIVE TECHNOLOGIST PARTNER' />
        <ParagraphHighlight
          BGColor={TEAL}
          paragraph='Creative Technologists combine <strong>creative</strong>, <strong>development</strong>, and <strong>technology</strong> to address digital challenges and deliver online projects of exceptional quality.'
        />
      </div>
      <HR />
      <HeadingHighlight BGColor={RED} fullWidth={false} heading='Creative Services' />
      <div className='flex flex-wrap gap-3 my-4'>
        <RowHalf
          heading='Digital Design'
          paragraph='Digital asset creation for websites, landing pages, social media posts, digital banners, email templates, mobile/web apps, motion design, animation GIFs, SVG and social tiles.'
        />
        <RowHalf
          heading='Interactive UX/UI'
          paragraph='Converting ideas into interfaces and interactions that satisfy. Storyboarding, wireframes, site maps, UI design, iconography, responsiveness and prototyping. '
        />
        <RowHalf
          heading='Motion Design/Video Editing'
          paragraph='Bringing digital assets and video footage to life inside the timeline. Expert Adobe After Effects and Premiere talent. Transcode, upscale and compress videos for online use.'
        />
        <RowHalf
          heading='3D artist/generalist'
          paragraph='Adding a new dimension to asset creation. Modelling, shading, UV editing, texturing, rigging, animation, lighting, motion capture and optimised exports for various platforms.'
        />
      </div>
      <HeadingHighlight BGColor={RED} fullWidth={false} heading='Development Services' />
      <div className='flex flex-wrap gap-3 my-4'>
        <RowHalf
          heading='Front End Development'
          paragraph='Coding UI/UX designs into working builds using the latest JS libraries. Landing pages, HTML5 banners, single/multi page apps and  PWAs with APIs/GraphQL support. '
        />
        <RowHalf
          heading='Software Engineer'
          paragraph='Advanced development experience within software teams. Typescript, AWS, Redux, SSL, Next.js, git branches, continual CI/CD deployments, testing and code reviews.'
        />
        <RowHalf
          heading='EDM &amp; CRM Integration'
          paragraph='Responsive and accessible email HTML5/CSS custom builds with customer relationship management integration such as Mailchimp and Salesforces.'
        />
        <RowHalf
          heading='THREE JS/<br/>REACT THREE FIBRE'
          paragraph='WebGL and GPU powered canvas elements rendered from within the browser. GLB/GLTF, custom shaders, physics and post processing.'
        />
      </div>
      <HeadingHighlight BGColor={RED} fullWidth={false} heading='Technologist Services' />
      <div className='flex flex-wrap gap-3 my-4'>
        <RowHalf
          heading='VR/AR Technologies'
          paragraph='Creating immersive environments and interactive experiences by combining 3D assets, real world space and game logic. A new frontier in the digital realm. '
        />
        <RowHalf
          heading='AI Integration'
          paragraph='Integrating the latest in Artificial Intelligence  across our projects and yours. Supplementing copy, optimising code, generating images and motion with Stable Diffusion.'
        />
        <RowHalf
          heading='Unreal Engine'
          paragraph='Invested in Unreal Engine, an open source game engine that is capable of rendering realistic visuals in real time, including VR experiences and cinematics.'
        />
        <RowHalf
          heading='MUSIC PRODUCTION/<br />SOUND DESIGN'
          paragraph='Supplementing our projects with original music and sound design. Music theory combined with VSTs, instruments and synths.'
        />
      </div>
      <div>
        <HeadingHighlight BGColor={TEAL} fullWidth={false} heading='THE EVOKE LABS DIFFERENCE' />
      </div>
      <div className='flex gap-3 mt-4'>
        <RowThird
          heading='The versatility factor'
          paragraph='Why settle for one expertise when you can have it all? Visionary, developer, designer - my versatile skill set is your secret weapon. Unleash the boundless innovation that comes from a true Renaissance professional.'
        />
        <RowThird
          heading='The experience factor'
          paragraph='Feel the difference that two decades of experience makes. From the early days of Flash pioneering, to today’s cutting-edge advancements, I bring a wealth of knowledge and experience to your digital projects.'
        />
        <RowThird
          heading='The people factor'
          paragraph='Above all, Evoke Labs is dedicated to delivering a positive experience for end users, team members and stakeholders alike. Your happiness is our ultimate goal, driven by commitment, honest communications and proven results.'
        />
      </div>
      <div className='my-6 space-y-1'>
        <ParagraphHighlight
          BGColor={RED}
          fontSize='22px'
          paragraph='“You are amazing Adrian! Seriously – you always impress me by going above and beyond!”'
        />
        <ParagraphHighlight BGColor={RED} fontSize='22px' paragraph='-Akcelo Senior Project Manager' />
      </div>
      <HR />
      <div className='my-4 uppercase text-teal-blur font-semibold text-[28px]'>
        <p>Thanks for visiting Evoke Labs, Evolving digital media since 2003.</p>
        <p>Your digital transformation is just a click away.</p>
      </div>
      <div className='flex flex-row justify-between mb-4 pt-1'>
        <ButtonDefault label='Fix a booking' />
        <ButtonDefault />
      </div>
    </PanelContent>
  )
}

export default Services
