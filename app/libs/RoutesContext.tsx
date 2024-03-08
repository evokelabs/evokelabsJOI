import { Dispatch, SetStateAction, createContext } from 'react'

export const RoutesContext = createContext({
  currentRouteSelection: null as null | number,
  setCurrentRouteSelection: (() => {}) as Dispatch<SetStateAction<number | null>>,
  currentPortfolioSelection: null as null | string,
  setCurrentPortfolioSelection: (() => {}) as Dispatch<SetStateAction<string | null>>
})
