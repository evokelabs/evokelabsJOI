import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import ButtonDefault from '../../ui/ButtonDefault'
import PanelContent from '../../ui/PanelContent'

import portfolio from '../data/portfolio.json'
import PortfolioItem from './PortfolioItem'
import PortfolioTile from './PortfolioTile'
import PortfolioPanelContent from './ui/PortfolioPanelContent'
import ContentHeader from './ui/ContentHeader'
import { SoundAudioLevelControls } from '../data/types'
import { RoutesContext } from '@/app/libs/RoutesContext'

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

      <div className='flex flex-row md:mt-3 mr-0 md:-mr-3 h-[2.6em] md:h-full mt-4'>
        <div className='scale-[60%] md:scale-100 origin-top-left'>
          <ButtonDefault />
        </div>
      </div>
    </PanelContent>
  )
}

export default PortfolioHome
