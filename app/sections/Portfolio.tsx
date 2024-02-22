import { useEffect, useRef, useState } from 'react'
import { RED } from '../libs/UIConstants'
import ButtonDefault from '../ui/ButtonDefault'
import HR from '../ui/HR'
import IconSmall from '../ui/IconSmall'
import PanelBackground from '../ui/PanelContent'
import PortfolioFrame from '../ui/PortfolioFrame'

const PullDownMenuShowOnly = () => {
  const [isOpenShowOnly, setIsOpenShowOnly] = useState(false)
  const [selectedOption, setSelectedOption] = useState('All')
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleSelect = (option: any) => (event: React.MouseEvent) => {
    event.stopPropagation()
    console.log(option)
    setSelectedOption(option)
    setIsOpenShowOnly(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current instanceof Node && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpenShowOnly(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative inline-block text-left z-10' tabIndex={0}>
      <div>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
          onClick={() => setIsOpenShowOnly(!isOpenShowOnly)}
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

      {isOpenShowOnly && (
        <div
          ref={dropdownRef}
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
        >
          <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            <button
              onClick={handleSelect('All')}
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              All
            </button>
            <button
              onClick={handleSelect('3D')}
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              3D
            </button>
            <button
              onClick={handleSelect('Development')}
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Development
            </button>
            <button
              onClick={handleSelect('Creative')}
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Creative
            </button>
            <button
              onClick={handleSelect('Technologist')}
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Technologist
            </button>
            <button
              onClick={handleSelect('Motion')}
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Motion
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// const PullDownMenuSortBy = () => {
//   const [isOpenSortBy, setIsOpenSortBy] = useState(false)

//   return (
//     <div className='relative inline-block text-left z-10'>
//       <div>
//         <button
//           type='button'
//           className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
//           id='options-menu'
//           aria-haspopup='true'
//           aria-expanded='true'
//           onClick={() => setIsOpenSortBy(!isOpenSortBy)}
//         >
//           All
//           <svg className='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
//             <path
//               fillRule='evenodd'
//               d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
//               clipRule='evenodd'
//             />
//           </svg>
//         </button>
//       </div>

//       {isOpenSortBy && (
//         <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
//           <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
//             <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem'>
//               Date (old to new)
//             </a>
//             <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem'>
//               Date (new to old)
//             </a>
//             <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' role='menuitem'>
//               Favourites
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

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
  return (
    <>
      <div className='flex flex-row my-1 gap-6'>
        <div className='w-[70px]'>
          <IconSmall />
        </div>

        <div className='flex justify-between w-full mr-10'>
          <div className='flex flex-row pr-4 items-center w-full justify-between'>
            <h2 className='font-rajdhani font-semibold text-red-blur text-[2.25rem] leading-none uppercase '>Portfolio</h2>
            <div className='flex gap-10 text-red-blur font-semibold text-[21px] items-center'>
              <div className='flex-row flex items-center gap-5'>
                <p>SHOW ONLY:</p> <PullDownMenuShowOnly />
              </div>
              <div className='flex-row flex items-center gap-5'>
                <p>SHOW ONLY:</p> <PullDownMenuShowOnly />
                {/* <p>SORT BY:</p> <PullDownMenuSortBy /> */}
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
