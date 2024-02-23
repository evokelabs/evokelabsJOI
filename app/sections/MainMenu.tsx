import { useState } from 'react'
import ButtonMainMenu from '../ui/ButtonMainMenu'
import { NextRouter } from 'next/router'
import JOISVG from '../ui/svg/mainmenu/JOISVG'
import AvailabilitiesSVG from '../ui/svg/mainmenu/AvailabilitiesSVG'
import ResumeSVG from '../ui/svg/mainmenu/ResumeSVG'
import HistorySVG from '../ui/svg/mainmenu/HistorySVG'
import PortfolioSVG from '../ui/svg/mainmenu/PortfolioSVG'
import ServicesSVG from '../ui/svg/mainmenu/ServicesSVG'

const ROUTE_CONFIG = [
  { labels: ['CORPO GUIDE', 'SERVICES'], svgIcon: <ServicesSVG />, route: '/services' },
  { labels: ['PAST GIGS', 'PORTFOLIO'], svgIcon: <PortfolioSVG />, route: '/portfolio' },
  { labels: ['BACKSTORY', 'HISTORY'], svgIcon: <HistorySVG />, route: '/history' },
  { labels: ['DOSSIER', 'RESUME'], svgIcon: <ResumeSVG />, route: '/resume' },
  { labels: ['JOI SPECIAL', 'INTRODUCING JOI'], svgIcon: <JOISVG />, route: '/joi' },
  { labels: ['FIX A BOOKING', 'AVAILABILITIES'], svgIcon: <AvailabilitiesSVG />, route: '/availabilities', callToAction: true }
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
