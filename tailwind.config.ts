import type { Config } from 'tailwindcss'

import { BLACK, ORANGE, BLUE_DARK, RED, RED_DARK, RED_DULL, TEAL, WHITE } from './app/libs/UIConstants'
import { TileFill, TileFill30 } from './app/ui/libs/TitleFillsPNGData'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-pattern': `url(${TileFill})`
      },
      width: {
        '120px': '120px'
      },
      height: {
        '120px': '120px'
      },
      fontFamily: {
        default: ['Rajdhani', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif']
      },
      lineHeight: {
        default: '1'
      },
      colors: {
        teal: TEAL,
        red: RED,
        black: BLACK,
        orange: ORANGE,
        white: WHITE,
        'red-dark': RED_DARK,
        'red-dull': RED_DULL,
        'blue-dark': BLUE_DARK
      },
      boxShadow: {
        'red-blur': '4px 0 0 0 rgba(222, 84, 86, 0.2),8px 0 0 0 rgba(222, 84, 86, 0.1)',
        'teal-blur': '4px 0 0 0 rgba(83, 246, 255, 0.2),8px 0 0 0 rgba(83, 246, 255, 0.1)',
        'orange-blur': '4px 0 0 0 rgba(255, 150, 26, 0.2),8px 0 0 0 rgba(255, 150, 26, 0.1)'
      }
    }
  },
  plugins: [
    function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const newUtilities = {
        '.font-orbitron': {
          fontFamily: '"Orbitron", sans-serif'
        },
        '.font-rajdhani': {
          fontFamily: '"Rajdhani", sans-serif'
        },
        '.text-red-blur': {
          color: theme('colors.red'),
          textShadow: '4px 0px 0px rgba(222, 84, 86, 0.2), 8px 0px 0px rgba(222, 84, 86, 0.1)'
        },
        '.text-teal-blur': {
          color: theme('colors.teal'),
          textShadow: '4px 0px 0px rgba(83, 246, 255, 0.2), 8px 0px 0px rgba(83, 246, 255, 0.1)'
        },
        '.text-white-blur': {
          color: theme('colors.white'),
          textShadow: '4px 0px 0px rgba(255, 255,255, 0.2), 8px 0px 0px rgba(255, 255, 255, 0.1)'
        },
        '.text-black-blur': {
          color: theme('colors.black'),
          textShadow: '4px 0px 0px rgba(0, 0, 0, 0.0), 8px 0px 0px rgba(0, 0, 0, 0.0)'
        },
        '.text-orange-blur': {
          color: theme('colors.orange'),
          textShadow: '4px 0px 0px rgba(255, 150, 26, 0.2), 8px 0px 0px rgba(255, 150, 26, 0.1)'
        },
        '.bg-grid-blue': {
          backgroundImage: `url(${TileFill30}), linear-gradient(rgba(21, 26, 43, 1), rgba(21, 26, 43, 1))`,
          backgroundRepeat: 'repeat',
          backgroundColor: theme('colors.blue-dark')
        },
        '.bg-grid-red': {
          backgroundImage: `url(${TileFill}), linear-gradient(rgba(222,84, 86, 0.1), rgba(222,84, 86, 0.1)), linear-gradient(rgba(80, 33, 36, 0.85), rgba(80, 33, 36, 0.85))`,
          backgroundRepeat: 'repeat'
        },
        '.bg-grid-teal': {
          backgroundImage: `url(${TileFill}), linear-gradient(rgba(84,197,222, 0.1), rgba(84,197,222, 0.1)), linear-gradient(rgba(33,63, 80, 0.85), rgba(33,63, 80, 0.85))`,
          backgroundRepeat: 'repeat'
        },
        '.bg-grid-darkRed': {
          backgroundImage: `url(${TileFill}), linear-gradient(rgba(222,84, 86, 0.1), rgba(222,84, 86, 0.1)), linear-gradient(rgba(14, 14, 23, 0.85), rgba(14, 14, 23, 0.85))`,
          backgroundRepeat: 'repeat'
        },
        '.bg-grid-brightRed': {
          backgroundImage: `url(${TileFill}), linear-gradient(rgba(222,84, 86, 0.2), rgba(222,84, 86, 0.1)), linear-gradient(rgba(174, 58, 54, 1), rgba(174, 58, 54, 1))`,
          backgroundRepeat: 'repeat'
        },
        '.bg-red': {
          backgroundImage: `linear-gradient(rgba(247,80, 73, 1), rgba(247,80, 73, 1))`,
          backgroundRepeat: 'repeat'
        },
        '.border-1-red': {
          borderColor: 'rgba(222, 84, 86, 0.6)',
          borderWidth: '1px'
        },
        '.border-2-red': {
          borderColor: 'rgba(222, 84, 86, 0.6)',
          borderWidth: '2px'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
export default config
