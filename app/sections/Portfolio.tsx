import { useCallback, useEffect, useRef, useState, MouseEvent } from 'react'
import ButtonDefault from '../ui/ButtonDefault'
import HR from '../ui/HR'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import PortfolioFrame from '../ui/PortfolioFrame'

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
          className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 uppercase'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <svg className='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
        >
          <div className='py-1 ' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            {options.map(option => (
              <button
                key={option}
                onClick={handleSelect(option)}
                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 uppercase'
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

const PortfolioTile = () => {
  return (
    <>
      <div className={'h-full relative flex items-end overflow-hidden'}>
        <div className='absolute top-0 w-full h-full'>
          <video className='w-full h-full object-cover' loop autoPlay muted poster='' src={'videos/portfolio/front/tiktok.mp4'} />
        </div>
        <div className='relative bottom-0'>
          <h2 className='uppercase text-teal-blur text-[29px] font-semibold leading-7 px-2 pt-0.5 block bg-opacity-85 bg-black'>
            TikTok Collection
          </h2>
          <h3 className='uppercase text-red-blur text-[19px] font-medium leading-tight  px-2 pt-0.5  inline-block bg-opacity-85 bg-black mt-0.5'>
            Front end lead
          </h3>
        </div>
      </div>
      <div className='w-fit pt-0.5 pointer-events-none'>
        <ul className=' flex gap-3 text-black uppercase font-semibold text-[16px] mt-4 -ml-2.5 '>
          <li className='bg-red shadow-red-blur px-2'>Motion</li>
          <li className='bg-red shadow-red-blur px-2'>Development</li>
        </ul>
      </div>
    </>
  )
}

const ContentHeadPortfolio = () => {
  const handleSelectShowOnly = (option: string) => {
    console.log(`Show only: ${option}`)
    // Implement the logic to filter the portfolio based on the selected option
  }

  const handleSelectSortBy = (option: string) => {
    console.log(`Sort by: ${option}`)
    // Implement the logic to sort the portfolio based on the selected option
  }

  return (
    <>
      <div className='flex flex-row my-1 gap-6'>
        <div className='w-[70px]'>
          <IconSmall />
        </div>

        <div className='flex-row flex items-center gap-5'>
          <p>SHOW ONLY:</p>
          <DropdownMenu
            options={['All', '3D', 'Development', 'Creative', 'Technologist', 'Motion']}
            defaultOption='All'
            onSelect={handleSelectShowOnly}
          />
        </div>
        <div className='flex-row flex items-center gap-5'>
          <p>SORT BY:</p>
          <DropdownMenu
            options={['Date (Descending)', 'Date (Ascending)', 'Recommended']}
            defaultOption='Date (Descending)'
            onSelect={handleSelectSortBy}
          />
        </div>
      </div>
      <HR />
    </>
  )
}

const Portfolio = () => {
  return (
    <PanelBackground headerTitle='Past Gigs' contentHead={<ContentHeadPortfolio />}>
      <div className='grid grid-cols-2 gap-5 mr-1'>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
        <PortfolioFrame>
          <PortfolioTile />
        </PortfolioFrame>
      </div>
      <div className='flex flex-row -mr-3.5 justify-end mb-3'>
        <ButtonDefault />
      </div>
    </PanelBackground>
  )
}

export default Portfolio
