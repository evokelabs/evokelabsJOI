import { RED } from '../libs/UIConstants'
import useSoundControl from '../libs/useSoundControl'
import ButtonDefault from '../ui/ButtonDefault'
import HeadingHighlight from '../ui/HeadingHighlight'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'
import RowFull from '../ui/RowFull'
import HardcopySVG from '../ui/svg/button/HardcopySVG'
import ResumeSVG from '../ui/svg/mainmenu/ResumeSVG'
import AJFPartnershipSVG from '../ui/svg/resume/AJFPartnershipSVG'
import AkceloSVG from '../ui/svg/resume/AkceloSVG'
import HummgroupSVG from '../ui/svg/resume/HummgroupSVG'
import LeonardoAISVG from '../ui/svg/resume/LeonardoAISVG'
import MCSaatchiSVG from '../ui/svg/resume/MCSaatchiSVG'
import RichardsRoseSVG from '../ui/svg/resume/RichardsRoseSVG'
import TectonicDigitalSVG from '../ui/svg/resume/TectonicDigitalSVG'
import UniversityOfSydneySVG from '../ui/svg/resume/UniversityOfSydneySVG'
import VMLSVG from '../ui/svg/resume/VMLSVG'
import WaxInteractiveSVG from '../ui/svg/resume/WaxInteractiveSVG'
import { SoundAudioLevelControls } from './data/types'

const Resume = ({ soundAudioLevelControls }: { soundAudioLevelControls: SoundAudioLevelControls }) => {
  const { setUserMutedAll, wasMuted } = useSoundControl(soundAudioLevelControls)

  const handleLinkClick = () => {
    setUserMutedAll(true)
  }

  return (
    <PanelBackground
      headerTitle='Dossier'
      contentHead={
        <ContentHead
          icon={
            <div className='hidden sm:block'>
              <ResumeSVG />
              <IconSmall />
            </div>
          }
          heading='Resume'
          button={
            <div
              className='sm:block scale-[60%] h-[38px] md:scale-[100%] sm:w-[100%] origin-top-right right-0 sm:right-10 md:right-2 relative -mt-3 sm:mt-3 md:-mt-1 lg:mt-0'
              onClick={handleLinkClick}
            >
              <ButtonDefault label='HARDCOPY' svgIcon={<HardcopySVG />} />
            </div>
          }
        />
      }
    >
      <HeadingHighlight heading={'BIO'} fullWidth={true} BGColor={RED} />
      <div className='mt-2 mb-3'>
        <p className='font-rajdhani text-red-blur text-[1.15rem] leading-5 md:text-[1.44rem] font-semibold md:leading-[1.6rem]'>
          <span className='text-teal-blur font-bold'>Creative Technologist</span> with over 20+ years of experience in digital strategy,
          design, UI/UX, web development, motion, and 3D. Proven track record collaborating with advertising agencies, creative studios,
          corporations, and start-ups to deliver hundreds of successful digital projects. Specialising in frontend tech and fostering
          positive team relations.
        </p>
      </div>
      <HeadingHighlight heading={'Experience'} fullWidth={true} BGColor={RED} />
      <div className='space-y-2 my-4 w-full'>
        <RowFull
          heading='LEONARDO.AI'
          subHeading='LEAD FRONT-END DEVELOPER  | NOV 2022 - AUGUST 2023'
          paragraph="Responsible for the frontend build of Leonardo.AI, an Australian AI generative startup. Original architect of the platform's scalable frontend. Built most of Leonardo.AI's reusable UI components and sections using Chakra UI. Collaborated with the UX team, stakeholders and other frontend engineers weekly for product review. Designed/developed new sections of the platform missed by the UX team. Created, maintained and increased the functionality of most AI tools. Submitted and coordinated new tasks, features and bugs to the team via Jira."
          svgIcon={<LeonardoAISVG />}
        />
        <RowFull
          heading='WAX INTERACTIVE'
          subHeading='SENIOR FRONT-END DEVELOPER | SEPT 2022 - NOV 2022'
          paragraph='Complete overhaul of the thelimbic.com frontend using HTML, CSS and Javascript via WordPress. Provided website updates and frontend/backend maintenance for existing Wax Interactive clients. Assisted in inhouse creative services and UX/UI designs for frontend builds.'
          svgIcon={<WaxInteractiveSVG />}
        />

        <RowFull
          heading='AKCELO'
          subHeading='FRONT-END DEVELOPER | MAR 2019 - MAR 2021'
          paragraph='Specialising in custom eDM HTML/CSS builds and CRM integration for various Akcelo clients.'
          svgIcon={<AkceloSVG />}
        />

        <RowFull
          heading='HUMMGROUP'
          subHeading='DIGITAL DESIGNER / DEVELOPER | MAR 2019 - MAR 2021'
          paragraph="Inhouse eDM developer and digital designer for hummgroup's marketing department."
          svgIcon={<HummgroupSVG />}
        />

        <RowFull
          heading='UNIVERSITY OF SYDNEY'
          subHeading='DIGITAL DESIGNER / DEVELOPER | DEC 2018 - JAN 2019'
          paragraph='Responsible for the design and development of a major UNSW HTML5 banner campaign.'
          svgIcon={<UniversityOfSydneySVG />}
        />

        <RowFull
          heading='RICHARDS ROSE'
          subHeading='DIGITAL DESIGNER / DEVELOPER | JULY 2015 - NOV 2018'
          paragraph='Designed & developed dozens of digital campaigns - including motion builds, HTML5 banner builds, minisite builds, eDM builds, and Wordpress builds. Clients include Stan, Mitsubishi, Wild Turkey, Nivea and Skyy Vodka. Also responsible for the design and development of the Richards Rose website.'
          svgIcon={<RichardsRoseSVG />}
        />

        <RowFull
          heading='AJF PARTNERSHIP'
          subHeading='DIGITAL DESIGNER / DEVELOPER | FEB 2013 - JULY 2015'
          paragraph='Responsible for flash builds, eDM builds, HTML builds and motion builds. Clients include News Corp Australia, Mr Men, Rams Home Loans and Perpetual Limited.'
          svgIcon={<AJFPartnershipSVG />}
        />

        <RowFull
          heading='TECTONIC DIGITAL'
          subHeading='DIGITAL DESIGNER / DEVELOPER | JUL 2012 - NOV 2013'
          paragraph='Responsibilities include responsive HTML builds, flash builds, motion builds, WordPress template builds and CSS/HTML frontend development. Most notable works include the art direction and flash builds across official Google products and services.'
          svgIcon={<TectonicDigitalSVG />}
        />

        <RowFull
          heading='M&C SAATCHI'
          subHeading='SENIOR DIGITAL DESIGNER / DEVELOPER | 2011 - 2012'
          paragraph='Responsible for flash builds, motion builds, edm builds, digital design and HTML development. Clients include Qantas, Optus, Google, Westfield and Woolworths.'
          svgIcon={<MCSaatchiSVG />}
        />

        <RowFull
          heading='VMLY&R'
          subHeading='DIGITAL DESIGNER / DEVELOPER | 2006 - 2008'
          paragraph='Responsible for minisites, digital designs, flash builds, actionscript development and edm development for clients such as such Telstra, Microsoft and Career One.'
          svgIcon={<VMLSVG />}
        />
      </div>
      <HeadingHighlight heading={'Skill set'} fullWidth={true} BGColor={RED} />
      <div className='flex flex-col md:flex-row md:gap-6 my-0 mt-3 md:my-3 h-full relative'>
        <div className='w-full md:flex-2'>
          <div className='text-[16px] md:text-[20px] text-red-blur font-medium space-y-1.5 leading-5'>
            <p>
              <span className='text-teal-blur font-semibold'>Project/Team Management:</span> Google Suite, Trello, GitHub, Jira, Slack.
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Design/UX:</span> Figma, Adobe XD, Photoshop, Illustrator, InDesign,
              Powerpoint.
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Front End:</span> HTML5, CSS, Javascript ES6/ES8, GSAP, npm, Typescript, API
              integration (REST/GraphQL/Apollo), ThreeJS, JQuery, SASS.
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Frameworks/Libraries:</span> NextJS, React.js, Astro, WordPress, React Three
              Fibre, Tailwind CSS, Bootstrap, Material Design, Chakra UI, Foundation For Email, Gulp, Lodash, Pug, Handlebars.
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Back End:</span> Node.js, Express, MongoDB, Firebase, Apollo, GraphQL, AWS,
              Cloudfront, PHP.
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Motion:</span> After Effects, Premiere, Blender, 3dsmax, Zbrush, Unreal Engine,
              Unity.
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Supplementary:</span> Google Web Designer, Animate, Audition, Cubase,
              Handbrake, Adobe Media Encoder, Sizmek, Google Doubleclick/Ad Manager, OBS, Oculus SDK.
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>AI:</span> ChatGPT, GitHub Copilot, Leonardo.AI, Stable Diffusion, ElevenLabs.
            </p>
          </div>
        </div>
        <div className='md:ml-auto flex flex-col justify-start md:justify-end scale-[60%] md:scale-100 origin-left w-[60%] md:w-full h-[60%] md:h-auto md:items-end md:flex-1'>
          <ButtonDefault />
        </div>
      </div>
    </PanelBackground>
  )
}
export default Resume
