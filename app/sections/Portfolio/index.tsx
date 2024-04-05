import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import ButtonDefault from '../../ui/ButtonDefault'
import PanelContent from '../../ui/PanelContent'

import portfolio from '../data/portfolio.json'
import PortfolioItem from './PortfolioItem'
import PortfolioTile from './PortfolioTile'
import ContentHeader from './ui/ContentHeader'
import { SoundAudioLevelControls } from '../data/types'
import { RoutesContext } from '@/app/libs/RoutesContext'

interface PortfolioPanelContentProps {
  children: React.ReactNode
  onClick: () => void
}

const PortfolioPanelContent: React.FC<PortfolioPanelContentProps> = ({ children, onClick }) => {
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endPos = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }
    const diffX = Math.abs(startPos.x - endPos.x)
    const diffY = Math.abs(startPos.y - endPos.y)

    // If the touch movement is less than 10 pixels, consider it a click.
    if (diffX < 10 && diffY < 10) {
      onClick()
    }
  }

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  )
}

const PortfolioHome = ({
  soundAudioLevelControls,
  setShouldMapDarkness
}: {
  soundAudioLevelControls: SoundAudioLevelControls
  setShouldMapDarkness: Dispatch<SetStateAction<boolean>>
}) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>(portfolio)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const { currentPortfolioSelection, setCurrentPortfolioSelection } = useContext(RoutesContext)

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
    setCurrentPortfolioSelection(item.slug)
  }

  useEffect(() => {
    if (currentPortfolioSelection === null) {
      setSelectedItem(null)
    }
  }, [currentPortfolioSelection])

  if (selectedItem) {
    return <PortfolioItem {...selectedItem} soundAudioLevelControls={soundAudioLevelControls} setShouldMapDarkness={setShouldMapDarkness} />
  }

  return (
    <PanelContent headerTitle='Past Gigs' contentHead={<ContentHeader setPortfolioData={setPortfolioData} portfolioData={portfolioData} />}>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-5 mr-1 mb-3 relative h-auto w-full'>
        {portfolioData.map(item => (
          <PortfolioPanelContent key={item.id} onClick={() => handleItemClick(item)}>
            <PortfolioTile
              heading={item.heading}
              subHeading={item.subHeading}
              technology={item.technology}
              desc={item.desc}
              thumb={item.thumb}
              mainVideo={item.mainVideo}
              video={item.video}
              link={item.link}
              isNew={item.isNew}
            />
          </PortfolioPanelContent>
        ))}
      </div>

      <div className='flex flex-row justify-end md:mt-3 mr-0 md:-mr-3 '>
        <div className='scale-[60%] md:scale-100 origin-top-left mt-1'>
          <ButtonDefault />
        </div>
      </div>
    </PanelContent>
  )
}

export default PortfolioHome
