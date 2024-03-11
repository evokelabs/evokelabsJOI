import { RED, TEAL } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import HR from '../ui/HR'
import HeadingHighlight from '../ui/HeadingHighlight'
import IconSmall from '../ui/IconSmall'
import PanelContent from '../ui/PanelContent'
import ParagraphHighlight from '../ui/ParagraphHighlight'
import RowHalf from '../ui/RowHalf'
import RowThird from '../ui/RowThird'

import ServicesSVG from '../ui/svg/mainmenu/ServicesSVG'

import ThreeD from '@/app/ui/png/services/3d.png'
import AI from '@/app/ui/png/services/ai.png'
import Audio from '@/app/ui/png/services/audio.png'
import DigitalDesign from '@/app/ui/png/services/DigitalDesign.png'
import eDM from '@/app/ui/png/services/eDM.png'
import Frontend from '@/app/ui/png/services/Frontend.png'
import Interactive from '@/app/ui/png/services/Interactive.png'
import Motion from '@/app/ui/png/services/Motion.png'
import SoftwareEngineer from '@/app/ui/png/services/SoftwareEngineer.png'
import ThreeJS from '@/app/ui/png/services/ThreeJS.png'
import Unreal from '@/app/ui/png/services/Unreal.png'
import VR from '@/app/ui/png/services/VR.png'
import FixABookingSVG from '../ui/svg/button/FixABookingSVG'

import quotes from './data/quotes.json'
import TypingAnimation from '../libs/TypingAnimation'

const ContentHead = () => {
  return (
    <>
      <div className='flex flex-row my-1 gap-6 items-center '>
        <div>
          <ServicesSVG />
          <IconSmall />
        </div>
        <div>
          <ul
            className='ml-0 lg:ml-4 text-red font-medium text-[1rem] md:text-[1.2rem]  lg:text-[1.375rem] font-default space-y-1'
            style={{ listStyleType: 'square' }}
          >
            <li className='leading-[1]'>Australian citizen with full work rights. </li>
            <li className='leading-[1]'>ABN / GST compliant for contract and freelance roles.</li>
            <li className='leading-[1]'>Open to onsite and/or remote gigs. Crypto accepted.</li>
          </ul>
        </div>
        <div className='ml-auto hidden 2xl:block'>
          <div className='flex flex:row 2xl:flex-col text-right justify-center space-y-1 ml-auto mr-6'>
            <ParagraphHighlight BGColor={RED} fontSize='1.4375em' paragraph='<strong>Current location:</strong> Sydney, Australia' />
            <ParagraphHighlight BGColor={RED} fontSize='1.4375em' paragraph='<strong>ABN:</strong> 53 470 501 232' />
          </div>
        </div>
      </div>

      <div className='flex 2xl:hidden flex-col text-left justify-center space-y-1 ml-auto mr-6 mt-2'>
        <ParagraphHighlight BGColor={RED} fontSize='1.2em' paragraph='<strong>Current location:</strong> Sydney, Australia' />
        <ParagraphHighlight BGColor={RED} fontSize='1.2em' paragraph='<strong>ABN:</strong> 53 470 501 232' />
      </div>

      <HR />
    </>
  )
}

const Services = () => {
  return (
    <PanelContent headerTitle='Corpo Guide' contentHead={<ContentHead />}>
      <div className='mb-5 space-y-0 lg:space-y-2'>
        <HeadingHighlight BGColor={TEAL} fullWidth={false} heading='YOUR CREATIVE TECHNOLOGIST PARTNER' />
        <ParagraphHighlight
          BGColor={TEAL}
          paragraph='Creative Technologists combine <strong>creative</strong>, <strong>development</strong>, and <strong>technology</strong> to address digital challenges and deliver online projects of exceptional quality.'
        />
      </div>
      <HR />
      <HeadingHighlight BGColor={RED} fullWidth={false} heading='Creative Services' />
      <div className='flex flex-wrap gap-3 my-2'>
        <RowHalf
          heading='Digital Design'
          paragraph='Digital asset creation for websites, landing pages, social media posts, digital banners, email templates, mobile/web apps, motion design, animation GIFs, SVG and social tiles.'
          PNG={DigitalDesign}
        />
        <RowHalf
          heading='Interactive UX/UI'
          paragraph='Converting ideas into interfaces and interactions that satisfy. Storyboarding, wireframes, site maps, UI design, iconography, responsiveness and prototyping.'
          PNG={Interactive}
        />
        <RowHalf
          heading='Motion Design/Video Editing'
          paragraph='Bringing digital assets and video footage to life inside the timeline. Expert Adobe After Effects and Premiere talent. Transcode, upscale and compress videos for online use.'
          PNG={Motion}
        />
        <RowHalf
          heading='3D artist/generalist'
          paragraph='Adding a new dimension to asset creation. Modelling, shading, UV editing, texturing, rigging, animation, lighting, motion capture and optimised exports for various platforms.'
          PNG={ThreeD}
        />
      </div>
      <HeadingHighlight BGColor={RED} fullWidth={false} heading='Development Services' />
      <div className='flex flex-wrap gap-3 my-2'>
        <RowHalf
          heading='Front End Development'
          paragraph='Coding UI/UX designs into working builds using the latest JS libraries. Landing pages, HTML5 banners, single/multi page apps and  PWAs with APIs/GraphQL support.'
          PNG={Frontend}
        />
        <RowHalf
          heading='Software Engineer'
          paragraph='Advanced development experience within software teams. Typescript, AWS, Redux, SSL, Next.js, git branches, continual CI/CD deployments, testing and code reviews.'
          PNG={SoftwareEngineer}
        />
        <RowHalf
          heading='EDM &amp; CRM Integration'
          paragraph='Responsive and accessible email HTML5/CSS custom builds with customer relationship management integration such as Mailchimp and Salesforces.'
          PNG={eDM}
        />
        <RowHalf
          heading='THREE JS/<br/>REACT THREE FIBRE'
          paragraph='WebGL and GPU powered canvas elements rendered from within the browser. GLB/GLTF, custom shaders, physics and post processing.'
          PNG={ThreeJS}
        />
      </div>
      <HeadingHighlight BGColor={RED} fullWidth={false} heading='Technologist Services' />
      <div className='flex flex-wrap gap-3 my-2 mb-'>
        <RowHalf
          heading='VR/AR Technologies'
          paragraph='Creating immersive environments and interactive experiences by combining 3D assets, real world space and game logic. A new frontier in the digital realm.'
          PNG={VR}
        />
        <RowHalf
          heading='AI Integration'
          paragraph='Integrating the latest in Artificial Intelligence  across our projects and yours. Supplementing copy, optimising code, generating images and motion with Stable Diffusion.'
          PNG={AI}
        />
        <RowHalf
          heading='Unreal Engine'
          paragraph='Invested in Unreal Engine, an open source game engine that is capable of rendering realistic visuals in real time, including VR experiences and cinematics.'
          PNG={Unreal}
        />
        <RowHalf
          heading='MUSIC PRODUCTION/<br />SOUND DESIGN'
          paragraph='Supplementing our projects with original music and sound design. Music theory combined with VSTs, instruments and synths.'
          PNG={Audio}
        />
      </div>
      <div>
        <HeadingHighlight BGColor={TEAL} fullWidth={false} heading='THE EVOKE LABS DIFFERENCE' />
      </div>
      <div className='flex flex-col 2xl:flex-row gap-3 mt-2'>
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
          paragraph='Above all, Evoke Labs is dedicated to delivering a positive experience for end users, team members and stakeholders alike. Your happiness is our ultimate goal, driven by commitment, open communications and proven results.'
        />
      </div>
      <div className='my-3 2xl:my-6 space-y-1 pr-2 h-[5em] 2xl:h-[4em]'>
        <TypingAnimation quotes={quotes} />
      </div>
      <HR />
      <div className='my-3 2xl:my-4 uppercase text-teal-blur font-semibold text-[18px] lg:text-[20px] 2xl:text-[28px]'>
        <p>Thanks for visiting Evoke Labs, Evolving digital media since 2003.</p>
        <p>Your digital transformation is just a click away.</p>
      </div>

      <div className='flex flex-col 2xl:flex-row justify-between gap-2 pb-1 2xl:mt-0'>
        <div className='flex justify-start h-[2.6em] 2xl:h-full'>
          <div className='scale-[60%] 2xl:scale-100 origin-top-left'>
            <ButtonDefault label='FIX A BOOKING' svgIcon={<FixABookingSVG />} />
          </div>
        </div>
        <div className='flex flex-row mr-0 2xl:-mr-3 h-[2.6em] 2xl:h-full'>
          <div className='scale-[60%] 2xl:scale-100 origin-top-left'>
            <ButtonDefault />
          </div>
        </div>
      </div>
    </PanelContent>
  )
}

export default Services
