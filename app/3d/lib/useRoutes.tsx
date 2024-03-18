import { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter } from 'next/router'

export const useRoutes = (
  currentRouteSelection: number | null,
  currentPortfolioSelection: number | string | null, // Updated type
  setCurrentRouteSelection: React.Dispatch<React.SetStateAction<number | null>>,
  setCurrentPortfolioSelection: React.Dispatch<React.SetStateAction<string | null>>,
  ROUTE_CONFIG: { labels: string[]; route: string; callToAction?: boolean }[]
) => {
  const router = useRouter()

  const [JOILineSpeak, setJOILineSpeak] = useState<null | number>(null)
  const [isChainPlaying, setIsChainPlaying] = useState(false)

  const prevPathname = useRef(router.pathname)

  useEffect(() => {
    if (
      !(prevPathname.current?.startsWith('/portfolio') && router.pathname.startsWith('/portfolio')) &&
      prevPathname.current !== router.pathname
    ) {
      setJOILineSpeak(currentRouteSelection)
    }
    prevPathname.current = router.pathname
  }, [router.pathname])

  useEffect(() => {
    if (currentPortfolioSelection !== null && currentPortfolioSelection !== '') {
      router.push(`/portfolio/${currentPortfolioSelection}`)
      setCurrentRouteSelection(1)
    }
  }, [currentPortfolioSelection])

  useEffect(() => {
    if (router.pathname === '/') {
      setCurrentRouteSelection(null)
    } else {
      const currentRouteIndex = ROUTE_CONFIG.findIndex(route => router.pathname.startsWith(route.route))

      if (currentRouteIndex !== -1) {
        setCurrentRouteSelection(currentRouteIndex)
      }

      if (currentRouteIndex === 1 && router.pathname === '/portfolio' && currentPortfolioSelection !== null) {
        setCurrentPortfolioSelection(null)
      }
    }
  }, [router.pathname, ROUTE_CONFIG])

  useEffect(() => {
    if (currentRouteSelection !== null) {
      const selectedRoute = ROUTE_CONFIG[currentRouteSelection]

      if (selectedRoute && router.pathname !== selectedRoute.route) {
        router.push(selectedRoute.route)
      } else if (router.pathname !== '/') {
      }
    } else {
      const routeExists = ROUTE_CONFIG.some(route => router.pathname.startsWith(route.route))

      if (!routeExists && router.pathname !== '/' && currentPortfolioSelection === null) {
        router.push('/')
      } else if (routeExists && router.pathname !== '/' && currentRouteSelection === null && currentPortfolioSelection === null) {
        router.push('/')
      }
    }
  }, [currentRouteSelection, currentPortfolioSelection])
  return {
    JOILineSpeak,
    setJOILineSpeak,
    ROUTE_CONFIG,
    isChainPlaying,
    setIsChainPlaying
  }
}
