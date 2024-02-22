import { useCallback, useEffect, useRef, useState } from 'react'
import ButtonDefault from '../ui/ButtonDefault'
import HR from '../ui/HR'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import PortfolioFrame from '../ui/PortfolioFrame'
import { BLACK, RED } from '../libs/UIConstants'

interface DropdownMenuProps {
  options: string[]
  defaultOption: string
  onSelect: (option: string) => void
}

const PullDownIcon = () => {
  return (
    <div className='relative -mt-0.5'>
      <svg width='26' height='26' viewBox='0 0 26 26' fill='none'>
        <path d='M0 0H26V26H0V0Z' fill={BLACK} fillOpacity='0.85' />
        <path d='M0 0H26V26H0V0Z' fill={RED} fillOpacity='0.1' />
        <path d='M0 0H26V26H0V0Z' fill='url(#redTile)' fillOpacity='0.1' />
        <path fill-rule='evenodd' clip-rule='evenodd' d='M0 0H26V26H0V0ZM1 1V25H25V1H1Z' fill={RED} fill-opacity='0.6' />
        <path d='M8 10L18 10L13 16L8 10Z' fill={RED} />
      </svg>
    </div>
  )
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
          className='flex items-center pl-3 pb-1 pt-1.5 pr-2 uppercase text-teal-blur text-[21px] bg-grid-red shadow-red-blur justify-between gap-5 border-2-red font-rajdhani font-semibold'
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

        <div className='flex justify-between w-full mr-3'>
          <div className='flex flex-row pr-4 items-center w-full justify-between'>
            <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none uppercase '>Portfolio</h2>
            <div className='flex gap-10 text-red-blur font-semibold  items-center'>
              <div className='flex-row flex items-center gap-5 text-[21px]'>
                <p>SHOW ONLY:</p>
                <DropdownMenu
                  options={['All', '3D', 'Development', 'Creative', 'Technology', 'Motion']}
                  defaultOption='All'
                  onSelect={handleSelectShowOnly}
                />
              </div>
              <div className='flex-row flex items-center gap-5 text-[21px]'>
                <p>SORT BY:</p>
                <DropdownMenu
                  options={['Date (Newest)', 'Date (Oldest)', 'Recommended', 'Technology']}
                  defaultOption='Date (Newest)'
                  onSelect={handleSelectSortBy}
                />
              </div>
            </div>
          </div>
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
