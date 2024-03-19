export const CAMERA_X_OFFSET_RESPONSIVE: Record<string, number> = {
  BASE: 2.68,
  SM: 2.73,
  MD: 2.9,
  LG: 2.9,
  XL: 2.8,
  '2XL': 2.8,
  '3XL': 2.7
}

export const CAMERA_X_OFFSET_BASE_RESPONSIVE: Record<string, number> = {
  BASE: 0.835,
  SM: 0.825,
  MD: 0.25,
  LG: 0.075,
  XL: 0.15,
  '2XL': 0.3,
  '3XL': 0
}

export const CAMERA_Y_OFFSET_RESPONSIVE: Record<string, number> = {
  BASE: -1.25,
  SM: -1.15,
  MD: 0,
  LG: 0,
  XL: 0.2,
  '2XL': 0.2,
  '3XL': 0.3
}

export const X_POSITION_VIEWPORT_RESPONSIVE: Record<string, number> = {
  BASE: 1,
  SM: 1,
  MD: 7,
  LG: 2,
  XL: 1,
  '2XL': 1,
  '3XL': 1
}

export const HTML_SCALE_RESPONSIVE: Record<string, number> = {
  BASE: 0.054,
  SM: 0.051,
  MD: 0.038,
  LG: 0.033,
  XL: 0.035,
  '2XL': 0.031,
  '3XL': 0.031
}

export const POSITION_REF_RESPONSIVE: Record<string, [number, number, number]> = {
  BASE: [0.59, 1.22, 1.9],
  SM: [0.56, 1.3, 1.9],
  MD: [-0.04, 1.4, 1.9],
  LG: [-0.15, 1.4, 1.9],
  XL: [-0.1, 1.4, 1.9],
  '2XL': [-0.0, 1.4, 1.9],
  '3XL': [-0.065, 1.4, 1.9]
}

export const CAMERA_TARGET_RESPONSIVE: Record<string, number[]> = {
  BASE: [0.83, 1.34, 2.1],
  SM: [0.82, 1.39, 2.1], //or [0, 1.35, 2.2]
  MD: [0.225, 1.39, 2.1],
  LG: [0.1, 1.39, 2.1],
  XL: [0.15, 1.39, 2.1],
  '2XL': [0.2, 1.39, 2.1],
  '3XL': [-0.05, 1.39, 2.1]
}
