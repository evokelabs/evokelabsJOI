// getFov is a helper function that returns the Field of View (FOV) based on the viewport width.
// It uses different FOV values for different viewport widths to ensure the best user experience on all devices.
export const getFov = (width: number): number => {
  switch (true) {
    case width <= 480:
      return 50 // Mobile devices
    case width <= 1024:
      return 40 // Desktop Min
    case width <= 2024:
      return 36 // Desktop Med
    case width <= 3024:
      return 28 // Desktop Max
    default:
      return 23 // Widescreen
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
