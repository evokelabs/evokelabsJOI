type Y_VALUES_TYPE = Record<string, Record<string, number>>

export const OFFSET_Y_VALUES: Y_VALUES_TYPE = {
  BASE: {
    0: 1.22,
    1: 1.22,
    2: 1.3,
    3: 1.22,
    4: 1.28,
    5: 1.22,
    6: 1.38, // Home Default
    7: 1.3, // Home Expanded
    8: 1.3 // Portfolio Item
  },
  SM: {
    0: 1.31,
    1: 1.31,
    2: 1.36,
    3: 1.31,
    4: 1.36,
    5: 1.31,
    6: 1.38, // Home Default
    7: 1.36, // Home Expanded
    8: 1.3 // Portfolio Item
  },
  MD: {
    0: 1.34,
    1: 1.34,
    2: 1.38,
    3: 1.34,
    4: 1.33,
    5: 1.4,
    6: 1.58, // Home Default
    7: 1.45, // Home Expanded
    8: 1.35 // Portfolio Item
  },
  LG: {
    0: 1.34,
    1: 1.34,
    2: 1.38,
    3: 1.38,
    4: 1.33,
    5: 1.4,
    6: 1.58, // Home Default
    7: 1.45, // Home Expanded
    8: 1.35 // Portfolio Item
  },
  XL: {
    0: 1.41,
    1: 1.41,
    2: 1.49,
    3: 1.41,
    4: 1.425,
    5: 1.51,
    6: 1.74, // Home Default
    7: 1.2, // Home Expanded
    8: 1.2 // Portfolio Item
  },
  '2XL': {
    0: 1.48,
    1: 1.48,
    2: 1.5,
    3: 1.48,
    4: 1.5,
    5: 1.58,
    6: 1.82, // Home Default
    7: 1.64, // Home Expanded
    8: 1.5 // Portfolio Item
  },
  '3XL': {
    0: 1.7,
    1: 1.7,
    2: 1.74,
    3: 1.7,
    4: 1.72,
    5: 1.8,
    6: 2, // Home Default
    7: 1.85, // Home Expanded
    8: 1.74 // Portfolio Item
  }
}

type AspectRatioRange = { min: number; max: number; offset: number }
type AspectRatioOffsetType = Record<string, AspectRatioRange[]>

export const ASPECT_RATIO_OFFSET: AspectRatioOffsetType = {
  BASE: [
    { min: 0, max: 0.25, offset: -0.3 },
    { min: 0.27, max: 0.7, offset: -0.2 },
    { min: 0.7, max: 1.1, offset: -0.1 },
    { min: 1.1, max: 1.3, offset: 0.01 },
    { min: 1.3, max: 1.5, offset: 0.05 },
    { min: 1.5, max: Infinity, offset: 0.1 }
  ],
  SM: [
    { min: 0, max: 0.25, offset: -0.3 },
    { min: 0.27, max: 0.7, offset: -0.2 },
    { min: 0.7, max: 1.1, offset: -0.1 },
    { min: 1.1, max: 1.3, offset: 0.01 },
    { min: 1.3, max: 1.5, offset: 0.05 },
    { min: 1.5, max: Infinity, offset: 0.1 }
  ],
  MD: [
    { min: 0, max: 0.25, offset: -0.3 },
    { min: 0.27, max: 0.7, offset: -0.2 },
    { min: 0.7, max: 1.1, offset: -0.1 },
    { min: 1.1, max: 1.3, offset: 0.01 },
    { min: 1.3, max: 1.5, offset: 0.05 },
    { min: 1.5, max: Infinity, offset: 0.1 }
  ],
  LG: [
    { min: 0, max: 0.25, offset: -0.3 },
    { min: 0.27, max: 0.7, offset: -0.2 },
    { min: 0.7, max: 1.1, offset: -0.1 },
    { min: 1.1, max: 1.3, offset: 0.01 },
    { min: 1.3, max: 1.5, offset: 0.05 },
    { min: 1.5, max: Infinity, offset: 0.1 }
  ],
  XL: [
    { min: 0, max: 0.25, offset: -0.3 },
    { min: 0.27, max: 0.7, offset: -0.2 },
    { min: 0.7, max: 1.1, offset: -0.1 },
    { min: 1.1, max: 1.3, offset: 0.01 },
    { min: 1.3, max: 1.5, offset: 0.05 },
    { min: 1.5, max: Infinity, offset: 0.1 }
  ],
  '2XL': [
    { min: 0, max: 0.25, offset: -0.3 },
    { min: 0.27, max: 0.7, offset: -0.2 },
    { min: 0.7, max: 1.1, offset: -0.1 },
    { min: 1.1, max: 1.3, offset: 0.01 },
    { min: 1.3, max: 1.5, offset: 0.05 },
    { min: 1.5, max: Infinity, offset: 0.1 }
  ],
  '3XL': [
    { min: 0, max: 0.25, offset: -0.3 },
    { min: 0.27, max: 0.7, offset: -0.2 },
    { min: 0.7, max: 1.1, offset: -0.1 },
    { min: 1.1, max: 1.3, offset: 0.01 },
    { min: 1.3, max: 1.5, offset: 0.05 },
    { min: 1.5, max: Infinity, offset: 0.1 }
  ]
}

export const CAMERA_X_OFFSET_RESPONSIVE: Record<string, number> = {
  BASE: 2.73,
  SM: 2.73,
  MD: 2.9,
  LG: 2.9,
  XL: 2.8,
  '2XL': 2.8,
  '3XL': 2.7
}

export const CAMERA_X_OFFSET_BASE_RESPONSIVE: Record<string, number> = {
  BASE: 0.83,
  SM: 0.825,
  MD: 0.25,
  LG: 0.075,
  XL: 0.15,
  '2XL': 0.2,
  '3XL': 0
}

export const CAMERA_Y_OFFSET_RESPONSIVE: Record<string, number> = {
  BASE: -1.25,
  SM: -1.15,
  MD: 0,
  LG: 0,
  XL: 0.2,
  '2XL': 0.3,
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
  BASE: 0.032,
  SM: 0.032,
  MD: 0.032,
  LG: 0.041,
  XL: 0.038,
  '2XL': 0.0345,
  '3XL': 0.031
}

export const POSITION_REF_RESPONSIVE: Record<string, number[]> = {
  BASE: [0.685, 0, 1.7],
  SM: [0.68, 0, 1.7],
  MD: [-0.06, 0, 1.9],
  LG: [-0.3, 0, 1.9],
  XL: [-0.1, 0, 1.9],
  '2XL': [0, 0, 1.9],
  '3XL': [-0.05, 0, 1.9]
}

export const CAMERA_TARGET_RESPONSIVE: Record<string, number[]> = {
  BASE: [0.183, 1.35, 2.1],
  SM: [0.82, 1.39, 2.1], //or [0, 1.35, 2.2]
  MD: [0.225, 1.39, 2.1],
  LG: [0.07, 1.39, 2.1],
  XL: [0.15, 1.39, 2.1],
  '2XL': [0.28, 1.39, 2.1],
  '3XL': [-0.05, 1.39, 2.1]
}
