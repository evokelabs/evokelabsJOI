import React from 'react'
import ButtonMainMenu from '../ui/ButtonMainMenu'
import { NextRouter } from 'next/router'

const ROUTE_CONFIG = [
  { labels: ['CORPO GUIDE', 'SERVICES'], route: '/services' },
  { labels: ['PAST GIGS', 'PORTFOLIO'], route: '/portfolio' },
  { labels: ['BACKSTORY', 'HISTORY'], route: '/history' },
  { labels: ['DOSSIER', 'RESUME'], route: '/resume' },
  { labels: ['JOI SPECIAL', 'INTRODUCING JOI'], route: '/joi' },
  { labels: ['FIX A BOOKING', 'AVAILABILITIES'], route: '/availabilities' }
]

const MainMenu = ({ router }: { router: NextRouter }) => {
  const [currentSelection, setCurrentSelection] = React.useState<null | number>(null)

  const resetAllButtons = (index: number) => {
    setCurrentSelection(index)
    router.push(ROUTE_CONFIG[index].route)
  }

  return (
    <div className='grid grid-cols-3 gap-x-8'>
      {ROUTE_CONFIG.map((config, index) => (
        <ButtonMainMenu
          key={index}
          mainMenuNumber={index}
          label={config.labels[0]}
          hoverLabel={config.labels[1]}
          isLocalActive={currentSelection === index}
          onClick={() => resetAllButtons(index)}
        />
      ))}
    </div>
  )
}

export default MainMenu
