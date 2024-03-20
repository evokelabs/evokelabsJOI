import { useState, useEffect } from 'react'

export const usePreloader = () => {
  const MENU_HOME_WAIT_TIMER_COOKIE = 18000
  const MENU_HOME_WAIT_TIMER_NOCOOKIE = 21000

  const visitedCookie =
    typeof document !== 'undefined' ? document.cookie.split('; ').find(row => row.startsWith('evokelabs-visited=')) : null
  const initialTimer = visitedCookie ? MENU_HOME_WAIT_TIMER_COOKIE : MENU_HOME_WAIT_TIMER_NOCOOKIE

  const [menuHomeWaitTimer, setMenuHomeWaitTimer] = useState(initialTimer)
  const [isCarReady, setIsCarReady] = useState(false)
  const [shouldMapDarkness, setShouldMapDarkness] = useState(false)
  const [shouldAmbientLightPlay, setAmbientLightPlay] = useState(false)
  const [shouldPointLightPlay, setPointLightPlay] = useState(false)
  const [isPreLoaderFinished, setIsPreLoaderFinished] = useState(false)
  const [isHomeReady, setisHomeReady] = useState(false)

  return {
    shouldMapDarkness,
    setShouldMapDarkness,
    setAmbientLightPlay,
    setPointLightPlay,
    shouldAmbientLightPlay,
    shouldPointLightPlay,
    setIsPreLoaderFinished,
    isPreLoaderFinished,
    isCarReady,
    setMenuHomeWaitTimer
  }
}
