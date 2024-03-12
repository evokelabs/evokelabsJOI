import { NextRouter } from 'next/router'
import { RED } from '../libs/UIConstants'
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

const Resume = () => {
  return (
    <PanelBackground
      headerTitle='Dossier'
      contentHead={
        <ContentHead
          icon={
            <>
              <ResumeSVG />
              <IconSmall />
            </>
          }
          heading='Resume'
          button={
            <div className='scale-[60%] lg:scale-[100%] w-[50%] sm:w-[100%] origin-right left-0 md:right-2 relative'>
              <ButtonDefault label='HARDCOPY' svgIcon={<HardcopySVG />} />
            </div>
          }
        />
      }
    >
      <HeadingHighlight heading={'BIO'} fullWidth={true} BGColor={RED} />
      <div className='mt-2 mb-3'>
        <p className='font-rajdhani text-red-blur text-[1.15rem] leading-5 lg:text-[1.375rem] font-medium lg:leading-[1.625rem]'>
          <span className='text-teal-blur font-semibold'>Creative Technologist</span> with over 20+ years of experience in digital strategy,
          design, UI/UX, web development, motion, and 3D. Proven track record collaborating with advertising agencies, creative studios,
          corporations, and start-ups to deliver hundreds of successful digital projects. Specialising in front-end technologies and
          fostering positive team relations.
        </p>
      </div>
      <HeadingHighlight heading={'Experience'} fullWidth={true} BGColor={RED} />
      <div className='space-y-2 my-4 w-full'>
        <RowFull
          heading='LEONARDO.AI'
          subHeading='LEAD FRONT-END DEVELOPER  | NOV 2022 - AUGUST 2023'
          paragraph='Coding UI/UX designs into working builds using the latest JS libraries. Landing pages, HTML5 banners, single page applications, multi page applications with API / GraphQL. Coding UI/UX designs into working builds using the latest JS libraries. Land'
          svgIcon={<LeonardoAISVG />}
        />
        <RowFull
          heading='WAX INTERACTIVE'
          subHeading='SENIOR FRONT-END DEVELOPER | SEPT 2022 - NOV 2022'
          paragraph='Coding UI/UX designs into working builds using the latest JS libraries. Landing pages, HTML5 banners, single page applications, multi page applications with API / GraphQL. Coding UI/UX designs into working builds using the latest JS libraries. Land'
          svgIcon={<WaxInteractiveSVG />}
        />

        <RowFull
          heading='AKCELO'
          subHeading='FRONT-END DEVELOPER | MAR 2019 - MAR 2021'
          paragraph='Specialising in eDM development and CRM integration for various clients'
          svgIcon={<AkceloSVG />}
        />

        <RowFull
          heading='HUMMGROUP'
          subHeading='DIGITAL DESIGNER / DEVELOPER | MAR 2019 - MAR 2021'
          paragraph='EDM developer and digital designer for Flexigroup’s marketing department.'
          svgIcon={<HummgroupSVG />}
        />

        <RowFull
          heading='UNIVERSITY OF SYDNEY'
          subHeading='DIGITAL DESIGNER / DEVELOPER | DEC 2018 - JAN 2019'
          paragraph='Responsible for the design and development of UNSW HTML5 banner suites'
          svgIcon={<UniversityOfSydneySVG />}
        />

        <RowFull
          heading='RICHARDS ROSE'
          subHeading='DIGITAL DESIGNER / DEVELOPER | JULY 2015 - NOV 2018'
          paragraph='Designed & developed dozens of digital campaigns - including motion builds,HTML5 banner builds, minisite builds, eDM builds, and Wordpress builds.Clients include Stan, Mitsubishi, Wild Turkey, Nivea and Skyy Vodka.'
          svgIcon={<RichardsRoseSVG />}
        />

        <RowFull
          heading='AJF PARTNERSHIP'
          subHeading='DIGITAL DESIGNER / DEVELOPER | FEB 2013 - JULY 2015'
          paragraph='Digital consultant for their inhouse team relating to interactive campaigns. Responsible for flash builds, eDM builds, HTML builds and motion builds. Clients include News Corp Australia, Mr Men, Rams Home Loans and Perpetual Limited.'
          svgIcon={<AJFPartnershipSVG />}
        />

        <RowFull
          heading='TECTONIC DIGITAL'
          subHeading='DIGITAL DESIGNER / DEVELOPER | JUL 2012 - NOV 2013'
          paragraph='Daily responsibilities include responsive HTML builds, flash builds, motion builds, WordPress template builds and CSS/HTML frontend development. Most notable works include the art direction and flash builds across official Google products and services.'
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
          paragraph='Responsible for minisites, designs, flash builds, actionscript development and edm development for clients such as such Telstra, Microsoft and Career One.'
          svgIcon={<VMLSVG />}
        />
      </div>
      <HeadingHighlight heading={'Skill set'} fullWidth={true} BGColor={RED} />
      <div className='flex flex-col lg:flex-row lg:gap-6 my-0 mt-3 lg:my-3 h-full relative'>
        <div className='w-full lg:flex-2'>
          <div className='text-[16px] lg:text-[20px] text-red-blur font-medium space-y-1.5 leading-5'>
            <p>
              <span className='text-teal-blur font-semibold'>Project Management:</span> Google Suite, Trello, GitHub
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Design/UX:</span> Figma, Adobe XD, Photoshop, Illustrator, InDesign, Powerpoint
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Front End:</span> HTML5, CSS, Javascript ES6/ES8, GSAP, npm, Typescript, API
              integration (REST/GraphQL), JQuery, SASS
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Frameworks/Libraries:</span> React.js, Tailwind CSS, Bootstrap, Material
              Design, Foundation For Email, Gulp, Lodash, Pug, Handlebars
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Motion:</span> After Effects, Premiere, 3dsmax, Zbrush
            </p>
            <p>
              <span className='text-teal-blur font-semibold'>Supplementary:</span> Google Web Designer, Animate, Audition, Cubase, Sizmek,
              Google Doubleclick/Ad Manager, Unreal Engine, Oculus SDK
            </p>
          </div>
        </div>
        <div className='lg:ml-auto flex flex-col justify-start lg:justify-end scale-[60%] lg:scale-100 origin-left w-[60%] lg:w-full h-[60%] lg:h-auto lg:items-end lg:flex-1'>
          <ButtonDefault />
        </div>
      </div>
    </PanelBackground>
  )
}
export default Resume
