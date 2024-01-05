// Helper function to get FOV based on viewport width
export const getFov = (width: number): number => {
  if (width <= 480) {
    return 50 // Mobile devices
  } else if (width <= 1024) {
    return 40 // Desktop Min
  } else if (width <= 2024) {
    return 36 // Desktop Med
  } else if (width <= 3024) {
    return 28 // Desktop Max
  } else {
    return 23 // Widescreen
  }
}
