type Y_VALUES_TYPE = Record<string, Record<string, number>>

export const OFFSET_Y_VALUES: Y_VALUES_TYPE = {
  BASE: {
    0: 1.28, // Services
    1: 1.28, // Portfolio
    2: 1.4, // History
    3: 1.28, //Resume
    4: 1.3, //JOI Special
    5: 1.28, // Fix a booking
    6: 1.38, // Home Default
    7: 1.3, // Home Expanded
    8: 1.4 // Portfolio Item
  },
  SM: {
    0: 1.31, // Services
    1: 1.31, // Portfolio
    2: 1.36, // History
    3: 1.31, //Resume
    4: 1.36, //JOI Special
    5: 1.31, // Fix a booking
    6: 1.38, // Home Default
    7: 1.36, // Home Expanded
    8: 1.3 // Portfolio Item
  },
  MD: {
    0: 1.34, // Services
    1: 1.34, // Portfolio
    2: 1.38, // History
    3: 1.34, //Resume
    4: 1.33, //JOI Special
    5: 1.4, // Fix a booking
    6: 1.58, // Home Default
    7: 1.45, // Home Expanded
    8: 1.35 // Portfolio Item
  },
  LG: {
    0: 1.34, // Services
    1: 1.34, // Portfolio
    2: 1.38, // History
    3: 1.38, //Resume
    4: 1.33, //JOI Special
    5: 1.4, // Fix a booking
    6: 1.58, // Home Default
    7: 1.45, // Home Expanded
    8: 1.35 // Portfolio Item
  },
  XL: {
    0: 1.41, // Services
    1: 1.41, // Portfolio
    2: 1.49, // History
    3: 1.41, //Resume
    4: 1.425, //JOI Special
    5: 1.51, // Fix a booking
    6: 1.74, // Home Default
    7: 1.2, // Home Expanded
    8: 1.2 // Portfolio Item
  },
  '2XL': {
    0: 1.48, // Services
    1: 1.48, // Portfolio
    2: 1.5, // History
    3: 1.48, //Resume
    4: 1.5, //JOI Special
    5: 1.58, // Fix a booking
    6: 1.82, // Home Default
    7: 1.64, // Home Expanded
    8: 1.5 // Portfolio Item
  },
  '3XL': {
    0: 1.38, // Services
    1: 1.38, // Portfolio
    2: 1.375, // History
    3: 1.38, //Resume
    4: 1.38, //JOI Special
    5: 1.4, // Fix a booking
    6: 1.4, // Home Default
    7: 1.4, // Home Expanded
    8: 1.38 // Portfolio Item
  }
}

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

export const POSITION_REF_RESPONSIVE: Record<string, [number, number, number]> = {
  BASE: [0.685, 0, 1.7],
  SM: [0.68, 0, 1.7],
  MD: [-0.06, 0, 1.9],
  LG: [-0.3, 0, 1.9],
  XL: [-0.1, 0, 1.9],
  '2XL': [0, 0, 1.9],
  '3XL': [-0.065, 0, 1.9]
}

export const CAMERA_TARGET_RESPONSIVE: Record<string, number[]> = {
  BASE: [0.83, 1.35, 2.1],
  SM: [0.82, 1.39, 2.1], //or [0, 1.35, 2.2]
  MD: [0.225, 1.39, 2.1],
  LG: [0.07, 1.39, 2.1],
  XL: [0.15, 1.39, 2.1],
  '2XL': [0.28, 1.39, 2.1],
  '3XL': [-0.05, 1.39, 2.1]
}
