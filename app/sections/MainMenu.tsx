import { useState } from 'react'
import ButtonMainMenu from '../ui/ButtonMainMenu'
import { NextRouter } from 'next/router'
import JOISVG from '../ui/svg/mainmenu/JOISVG'

const ROUTE_CONFIG = [
  { labels: ['CORPO GUIDE', 'SERVICES'], svgIcon: <JOISVG />, route: '/services' },
  { labels: ['PAST GIGS', 'PORTFOLIO'], svgIcon: <JOISVG />, route: '/portfolio' },
  { labels: ['BACKSTORY', 'HISTORY'], svgIcon: <JOISVG />, route: '/history' },
  { labels: ['DOSSIER', 'RESUME'], svgIcon: <JOISVG />, route: '/resume' },
  { labels: ['JOI SPECIAL', 'INTRODUCING JOI'], svgIcon: <JOISVG />, route: '/joi' },
  { labels: ['FIX A BOOKING', 'AVAILABILITIES'], svgIcon: <JOISVG />, route: '/availabilities', callToAction: true }
]

const MainMenu = ({ router }: { router: NextRouter }) => {
  const [currentSelection, setCurrentSelection] = useState<null | number>(null)

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
          isLocalActive={router.pathname === ROUTE_CONFIG[index].route}
          onClick={() => resetAllButtons(index)}
          svgIcon={config.svgIcon}
          callToAction={config.callToAction}
        />
      ))}
    </div>
  )
}

export default MainMenu
