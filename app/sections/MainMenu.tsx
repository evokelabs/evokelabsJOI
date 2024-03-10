import { useContext } from 'react'
import ButtonMainMenu from '../ui/ButtonMainMenu'
import { NextRouter } from 'next/router'
import { RoutesContext } from '../libs/RoutesContext'

const MainMenu = ({ router, routeConfig }: { router: NextRouter; routeConfig: any }) => {
  const { currentRouteSelection, setCurrentRouteSelection } = useContext(RoutesContext)

  const resetAllButtons = (index: number) => {
    setCurrentRouteSelection(index)
  }

  return (
    <>
      <div className='grid grid-cols-3 gap-x-8'>
        {routeConfig.map((config: { labels: string[]; callToAction: boolean | undefined }, index: number) => (
          <ButtonMainMenu
            key={index}
            mainMenuNumber={index}
            label={config.labels[0]}
            hoverLabel={config.labels[1]}
            isLocalActive={router.pathname.startsWith(routeConfig[index].route)}
            onClick={() => resetAllButtons(index)}
            callToAction={config.callToAction}
          />
        ))}
      </div>
    </>
  )
}

export default MainMenu
