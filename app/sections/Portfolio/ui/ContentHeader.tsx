import IconSmall from '@/app/ui/IconSmall'
import React, { useContext } from 'react'
import DropdownMenus from './DropdownMenus'
import HR from '@/app/ui/HR'
import PortfolioItem from '../PortfolioItem'

import portfolio from '../../data/portfolio.json'
import PortfolioSVG from '@/app/ui/svg/mainmenu/PortfolioSVG'
import { PortfolioContext } from '@/app/libs/PortfolioContext'

type ContentHeadPortfolioProps = {
  setPortfolioData: React.Dispatch<React.SetStateAction<PortfolioItem[]>>
  portfolioData: PortfolioItem[]
}

const SHOW_ONLY_OPTIONS = ['All', 'Creative', 'Development', 'EDM/CRM', 'Motion', 'Strategy', 'Technology', 'ui/ux']
const SORT_BY_OPTIONS = ['Date (Newest)', 'Date (Oldest)', 'Title (A-Z)', 'Title (Z-A)', 'Recommended', 'Technology']

const technologyMapping: { [key: string]: string[] } = {
  All: [],
  Creative: ['Figma', 'Adobe CC', 'Photoshop', 'Animate', 'Illustrator', 'Steam Workshop', 'Art Direction'],
  Development: [
    'Foundation for Email',
    'HTML5',
    'CSS',
    'PHP',
    'Javascript',
    'Wordpress',
    'GSAP',
    'react',
    'next.js',
    'aws',
    'threejs',
    'React',
    'Nextjs',
    'Typescript'
  ],
  'EDM/CRM': ['Foundation for Email', 'mailchimp', 'hubspot', 'klaviyo', 'marketo', 'salesforce', 'adobe campaign'],
  'ui/ux': ['Figma', 'Art Direction', 'UX/UI'],
  Strategy: ['Social Media', 'Strategy', 'Doubleclick'],
  Motion: ['After Effects', '3d', 'Premiere'],
  Technology: ['audio', 'VR/AR', 'unreal engine', 'AI']
}

const ContentHeader: React.FC<ContentHeadPortfolioProps> = ({ setPortfolioData, portfolioData }) => {
  const { selectedShowOnlyOption, setSelectedShowOnlyOption, selectedSortByOption, setSelectedSortByOption } = useContext(PortfolioContext)

  const handleSelectShowOnly = (option: string) => {
    const technologies = technologyMapping[option]
    let filteredData: PortfolioItem[] = []
    setSelectedShowOnlyOption(option)

    if (option === 'All') {
      filteredData = portfolio
    } else {
      filteredData = portfolio.filter(item => item.technology.some(tech => technologies.includes(tech)))
    }

    setPortfolioData(filteredData)
  }

  const handleSelectSortBy = (option: string) => {
    let sortedData: PortfolioItem[] = []
    if (option === 'Date (Newest)') {
      sortedData = [...portfolioData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (option === 'Date (Oldest)') {
      sortedData = [...portfolioData].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (option === 'Title (A-Z)') {
      sortedData = [...portfolioData].sort((a, b) => a.heading.localeCompare(b.heading))
    } else if (option === 'Title (Z-A)') {
      sortedData = [...portfolioData].sort((a, b) => b.heading.localeCompare(a.heading))
    } else if (option === 'Technology') {
      sortedData = [...portfolioData].sort((a, b) => a.technology.join(', ').localeCompare(b.technology.join(', ')))
    } else if (option === 'Recommended') {
      sortedData = [...portfolioData].sort((a, b) => a.recommended - b.recommended)
    }
    setSelectedSortByOption(option)
    setPortfolioData(sortedData)
  }

  return (
    <>
      <div className='flex md:flex-row flex-col my-1 gap-2 md:gap-6'>
        <div className='md:flex center items-center hidden'>
          <PortfolioSVG />
          <IconSmall />
        </div>
        <div className='flex flex-row justify-between gap-4 md:gap-5 md:justify-between w-full pr-7 items-center'>
          <h2 className='font-rajdhani font-semibold text-red-blur text-[1.5rem] md:text-[2.25rem] leading-none uppercase inline mt-1 '>
            Portfolio
          </h2>
          <div className='flex flex-row space-x-10'>
            <div className='text-[21px] text-red-blur font-semibold flex items-center gap-5'>
              <p className='text-[18px] md:text-[22px] md:w-fit'>SHOW ONLY:</p>
              <DropdownMenus options={SHOW_ONLY_OPTIONS} defaultOption={selectedShowOnlyOption} onSelect={handleSelectShowOnly} />
            </div>
            <div className='text-[21px] text-red-blur font-semibold md:flex items-center gap-5 hidden'>
              <p className='text-[18px] md:text-[22px] md:w-fit'>SORT BY:</p>
              <DropdownMenus options={SORT_BY_OPTIONS} defaultOption={selectedSortByOption} onSelect={handleSelectSortBy} />
            </div>
          </div>
        </div>
      </div>
      <HR />
    </>
  )
}

export default ContentHeader
