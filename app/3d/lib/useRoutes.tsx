import { useState, useEffect, useRef, useMemo } from 'react'
import { useRouter } from 'next/router'

export const useRoutes = (
  currentRouteSelection: number | null,
  currentPortfolioSelection: number | string | null,
  setCurrentRouteSelection: React.Dispatch<React.SetStateAction<number | null>>,
  setCurrentPortfolioSelection: React.Dispatch<React.SetStateAction<string | null>>,
  ROUTE_CONFIG: { labels: string[]; route: string; callToAction?: boolean }[],
  setMenuHomeWaitTimer: React.Dispatch<React.SetStateAction<number>>,
  setIsPreLoaderFinished: React.Dispatch<React.SetStateAction<boolean>>,
  setMaskRemoved: React.Dispatch<React.SetStateAction<boolean>>
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
      
      setMaskRemoved(true)
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
        setMenuHomeWaitTimer(0)
        setIsPreLoaderFinished(true)
        setMaskRemoved(true)
      }
    } else {
      const routeExists = ROUTE_CONFIG.some(route => router.pathname.startsWith(route.route))

      if (!routeExists && router.pathname !== '/' && currentPortfolioSelection === null) {
        router.push('/')
      } else if (routeExists && router.pathname !== '/' && currentRouteSelection === null && currentPortfolioSelection === null) {
        setMenuHomeWaitTimer(0)
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
