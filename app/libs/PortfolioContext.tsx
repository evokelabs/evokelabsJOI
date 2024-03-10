import { createContext } from 'react'

export const PortfolioContext = createContext({
  selectedShowOnlyOption: 'All',
  setSelectedShowOnlyOption: (value: string) => {},
  selectedSortByOption: 'Date (Newest)',
  setSelectedSortByOption: (value: string) => {}
})
