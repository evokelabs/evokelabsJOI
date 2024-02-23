import { useCallback, useEffect, useRef, useState } from 'react'
import ButtonDefault from '../../ui/ButtonDefault'
import HR from '../../ui/HR'
import IconSmall from '../../ui/IconSmall'
import PanelContent from '../../ui/PanelContent'

import portfolio from '../data/portfolio.json'
import PortfolioItem from './PortfolioItem'
import PortfolioTile from './PortfolioTile'
import PullDownIcon from './ui/PullDownIcon'
import PortfolioPanelContent from './ui/PortfolioPanelContent'

interface DropdownMenuProps {
  options: string[]
  defaultOption: string
  onSelect: (option: string) => void
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, defaultOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleSelect = useCallback(
    (option: string) => () => {
      setSelectedOption(option)
      setIsOpen(false)
      onSelect(option)
    },
    [onSelect]
  )

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && event.target !== buttonRef.current) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative inline-block text-left z-10' tabIndex={0}>
      <div>
        <button
          ref={buttonRef}
          type='button'
          className='flex items-center pl-3 pt-0.5 pr-1 uppercase text-teal-blur text-[21px] bg-grid-red shadow-red-blur justify-between gap-5 border-2-red font-rajdhani font-semibold'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <PullDownIcon />
        </button>
      </div>

      {isOpen && (
        <div ref={dropdownRef} className='absolute left-0 mt-2 bg-grid-red border-2-red'>
          <div role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            {options.map(option => (
              <button
                key={option}
                onClick={handleSelect(option)}
                className='block text-left text-[21px] pl-3 pr-8 py-2 font-rajdhani uppercase text-teal-blur hover:bg-grid-blue hover:text-red-blur w-full'
                role='menuitem'
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const ContentHeadPortfolio = () => {
  const portfolioData: PortfolioItem[] = portfolio
  const SHOW_ONLY_OPTIONS = ['All', 'Creative', 'Development', 'Motion', 'Technology', 'Motion', '3d', 'edm']
  const SORT_BY_OPTIONS = ['Date (Newest)', 'Date (Oldest)', 'Title (A-Z)', 'Title (Z-A)', 'Recommended', 'Technology']

  const handleSelectShowOnly = (option: string) => {
    console.log(`Show only: ${option}`)
    // Implement the logic to filter the portfolio based on the selected option
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
    }
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
                <DropdownMenu options={SHOW_ONLY_OPTIONS} defaultOption='All' onSelect={handleSelectShowOnly} />
              </div>
              <div className='flex-row flex items-center gap-5 text-[21px]'>
                <p>SORT BY:</p>
                <DropdownMenu options={SORT_BY_OPTIONS} defaultOption='Date (Newest)' onSelect={handleSelectSortBy} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HR />
    </>
  )
}

const PortfolioHome = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>(portfolio)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
    console.log('Item clicked:', item)
  }

  if (selectedItem) {
    return <PortfolioItem {...selectedItem} />
  }

  return (
    <PanelContent headerTitle='Past Gigs' contentHead={<ContentHeadPortfolio />}>
      <div className='grid grid-cols-2 gap-5 mr-1'>
        {portfolioData.map((item, index) => (
          <PortfolioPanelContent key={index} onClick={() => handleItemClick(item)}>
            <PortfolioTile
              heading={item.heading}
              subHeading={item.subHeading}
              technology={item.technology}
              desc={item.desc}
              thumb={item.thumb}
              mainVideo={item.mainVideo}
              video={item.video}
              link={item.link}
            />
          </PortfolioPanelContent>
        ))}
      </div>
      <div className='flex flex-row -mr-3.5 justify-end mb-3'>
        <ButtonDefault />
      </div>
    </PanelContent>
  )
}

const Portfolio = () => {
  return <PortfolioHome />
}

export default Portfolio
