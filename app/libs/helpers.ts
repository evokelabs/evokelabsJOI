// getFov is a helper function that returns the Field of View (FOV) based on the viewport width.
// It uses different FOV values for different viewport widths to ensure the best user experience on all devices.
export const getFov = (width: number): number => {
  switch (true) {
    case width <= 640:
      return 85 // Mobile devices
    case width <= 768:
      return 68 // Desktop Min
    case width <= 1024:
      return 35 // Desktop Min
    case width <= 1280:
      return 30 // Desktop Med
    case width <= 1536:
      return 29 // Desktop 2xl
    case width <= 1536:
      return 28 // Desktop 3xl
    default:
      return 26 // Widescreen Max
  }
}

export function shuffleArray(array: any[]) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
