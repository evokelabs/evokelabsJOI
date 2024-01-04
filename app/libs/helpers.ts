// Helper function to get FOV based on viewport width
export const getFov = (width: number): number => {
  if (width <= 480) {
    return 50 // Mobile devices
  } else if (width <= 1024) {
    return 50 // Desktop
  } else if (width <= 3024) {
    return 28 // Desktop
  } else {
    return 23 // Widescreen
  }
}
