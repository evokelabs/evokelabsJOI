import IconSmall from '@/app/ui/IconSmall'
import React from 'react'
import DropdownMenus from './DropdownMenus'
import HR from '@/app/ui/HR'
import PortfolioItem from '../PortfolioItem'

import portfolio from '../../data/portfolio.json'

type ContentHeadPortfolioProps = {
  setPortfolioData: React.Dispatch<React.SetStateAction<PortfolioItem[]>>
  portfolioData: PortfolioItem[]
}

const ContentHeader: React.FC<ContentHeadPortfolioProps> = ({ setPortfolioData, portfolioData }) => {
  const SHOW_ONLY_OPTIONS = ['All', 'Creative', 'Development', 'EDM', 'ui/ux', 'Strategy', 'Motion', 'Technology']
  const SORT_BY_OPTIONS = ['Date (Newest)', 'Date (Oldest)', 'Title (A-Z)', 'Title (Z-A)', 'Recommended', 'Technology']

  const technologyMapping: { [key: string]: string[] } = {
    All: [],
    Creative: ['Figma', 'Adobe CC', 'Photoshop', 'Animate', 'Illustrator', 'Steam Workshop', 'Art Direction'],
    Development: ['Foundation for Email', 'HTML5', 'CSS', 'PHP', 'Javascript', 'Wordpress', 'GSAP'],
    EDM: ['Foundation for Email'],
    'ui/ux': ['Figma', 'Art Direction', 'UX/UI'],
    Strategy: ['Social Media', 'Strategy', 'Doubleclick'],
    Motion: ['After Effects', '3d', 'Premiere'],
    Technology: ['audio', 'VR', 'vr/ar']
  }

  const handleSelectShowOnly = (option: string) => {
    const technologies = technologyMapping[option]
    let filteredData: PortfolioItem[] = []

    if (option === 'All') {
      filteredData = portfolio
    } else {
      filteredData = portfolio.filter(item => item.technology.some(tech => technologies.includes(tech)))
    }

    setPortfolioData(filteredData)
  }

  const handleSelectSortBy = (option: string) => {
    console.log(`Sort by: ${option}`)
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
    setPortfolioData(sortedData)
  }

  return (
    <>
      <div className='flex flex-row my-1 gap-6'>
        <div className='w-[70px]'>
          <IconSmall />
        </div>

        <div className='flex justify-between w-full mr-3'>
          <div className='flex flex-row pr-4 items-center w-full justify-between'>
            <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none uppercase '>Portfolio</h2>
            <div className='flex gap-10 text-red-blur font-semibold  items-center'>
              <div className='flex-row flex items-center gap-5 text-[21px]'>
                <p>SHOW ONLY:</p>
                <DropdownMenus options={SHOW_ONLY_OPTIONS} defaultOption='All' onSelect={handleSelectShowOnly} />
              </div>
              <div className='flex-row flex items-center gap-5 text-[21px]'>
                <p>SORT BY:</p>
                <DropdownMenus options={SORT_BY_OPTIONS} defaultOption='Date (Newest)' onSelect={handleSelectSortBy} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HR />
    </>
  )
}

export default ContentHeader