import { createContext } from 'react'

export const RoutesContext = createContext({
  currentRouteSelection: null as null | number,
  setCurrentRouteSelection: (value: number | null) => {}
})
