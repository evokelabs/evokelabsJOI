import { RED } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import HeadingHighlight from '../ui/HeadingHighlight'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import ContentHead from '../ui/PanelContent/ContentHead'
import RowFull from '../ui/RowFull'

const Resume = () => {
  return (
    <PanelBackground
      headerTitle='Dossier'
      contentHead={<ContentHead icon={<IconSmall />} heading='Resume' button={<ButtonDefault label='hardcopy' />} />}
    >
      <HeadingHighlight heading={'BIO'} fullWidth={true} BGColor={RED} />
      <div className='mb-3'>
        <p className='font-rajdhani text-red-blur text-[1.375rem] font-medium leading-[26px]'>
          <span className='text-teal-blur font-semibold'>Creative Technologist</span> with over 20+ years of experience in digital strategy,
          design, UI/UX, web development, motion, and 3D. Proven track record collaborating with advertising agencies, creative studios,
          corporations, and start-ups to deliver hundreds of successful digital projects. Specialising in front-end technologies and
          fostering positive team relations.
        </p>
      </div>
      <HeadingHighlight heading={'Experience'} fullWidth={true} BGColor={RED} />
      <RowFull
        heading='LEONARDO.AI'
        subHeading='LEAD FRONT-END DEVELOPER  | NOV 2022 - AUGUST 2023'
        paragraph='Coding UI/UX designs into working builds using the latest JS libraries. Landing pages, HTML5 banners, single page applications, multi page applications with API / GraphQL. Coding UI/UX designs into working builds using the latest JS libraries. Land'
      />
      <RowFull
        heading='WAX INTERACTIVE'
        subHeading='SENIOR FRONT-END DEVELOPER | SEPT 2022 - NOV 2022'
        paragraph='Coding UI/UX designs into working builds using the latest JS libraries. Landing pages, HTML5 banners, single page applications, multi page applications with API / GraphQL. Coding UI/UX designs into working builds using the latest JS libraries. Land'
      />
      <RowFull
        heading='AKCELO'
        subHeading='FRONT-END DEVELOPER | MAR 2019 - MAR 2021'
        paragraph='Specialising in eDM development and CRM integration for various clients'
      />
      <RowFull
        heading='HUMMGROUP'
        subHeading='DIGITAL DESIGNER / DEVELOPER | MAR 2019 - MAR 2021'
        paragraph='EDM developer and digital designer for Flexigroup’s marketing department.'
      />
      <RowFull
        heading='UNIVERSITY OF SYDNEY'
        subHeading='DIGITAL DESIGNER / DEVELOPER | DEC 2018 - JAN 2019'
        paragraph='Responsible for the design and development of UNSW HTML5 banner suites'
      />
      <RowFull
        heading='RICHARDS ROSE'
        subHeading='DIGITAL DESIGNER / DEVELOPER | JULY 2015 - NOV 2018'
        paragraph='Designed & developed dozens of digital campaigns - including motion builds,HTML5 banner builds, minisite builds, eDM builds, and Wordpress builds.Clients include Stan, Mitsubishi, Wild Turkey, Nivea and Skyy Vodka.'
      />
      <RowFull
        heading='AJF PARTNERSHIP'
        subHeading='DIGITAL DESIGNER / DEVELOPER | FEB 2013 - JULY 2015'
        paragraph='Digital consultant for their inhouse team relating to interactive campaigns. Responsible for flash builds, eDM builds, HTML builds and motion builds. Clients include News Corp Australia, Mr Men, Rams Home Loans and Perpetual Limited.'
      />
      <RowFull
        heading='TECTONIC DIGITAL'
        subHeading='DIGITAL DESIGNER / DEVELOPER | JUL 2012 - NOV 2013'
        paragraph='Daily responsibilities include responsive HTML builds, flash builds, motion builds, WordPress template builds and CSS/HTML frontend development. Most notable works include the art direction and flash builds across official Google products and services.'
      />
      <RowFull
        heading='M&C SAATCHI'
        subHeading='SENIOR DIGITAL DESIGNER / DEVELOPER | 2011 - 2012'
        paragraph='Responsible for flash builds, motion builds, edm builds, digital design and HTML development. Clients include Qantas, Optus, Google, Westfield and Woolworths.'
      />
      <RowFull
        heading='VMLY&R'
        subHeading='DIGITAL DESIGNER / DEVELOPER | 2006 - 2008'
        paragraph='Responsible for minisites, designs, flash builds, actionscript development and edm development for clients such as such Telstra, Microsoft and Career One.'
      />
      <HeadingHighlight heading={'Skill set'} fullWidth={true} BGColor={RED} />
      <div className='text-[18px] text-red-blur font-medium pb-1'>
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
          <span className='text-teal-blur font-semibold'>Frameworks/Libraries:</span> React.js, Tailwind CSS, Bootstrap, Material Design,
          Foundation For Email, Gulp, Lodash, Pug, Handlebars
        </p>
        <p>
          <span className='text-teal-blur font-semibold'>Motion:</span> After Effects, Premiere, 3dsmax, Zbrush
        </p>
        <p>
          <span className='text-teal-blur font-semibold'>Supplementary:</span> Google Web Designer, Animate, Audition, Cubase, Sizmek,
          Google Doubleclick/Ad Manager, Unreal Engine, Oculus SDK
        </p>
      </div>
    </PanelBackground>
  )
}
export default Resume
