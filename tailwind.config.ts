import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      width: {
        '120px': '120px'
      },
      height: {
        '120px': '120px'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif']
      },
      colors: {
        teal: '#53F6FF',
        red: {
          DEFAULT: '#F75049'
        }
      }
    }
  },
  plugins: [
    function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const newUtilities = {
        '.font-orbitron': {
          fontFamily: 'Orbitron, sans-serif'
        },
        '.font-rajdhani': {
          fontFamily: 'Rajdhani, sans-serif'
        },
        '.text-shadow-CRTteal': {
          textShadow: '4px 0px 0px rgba(83, 246, 255, 0.2), 8px 0px 0px rgba(83, 246, 255, 0.1)'
        },
        '.text-shadow-CRTred': {
          textShadow: '4px 0px 0px rgba(222, 84, 86, 0.2), 8px 0px 0px rgba(222, 84, 86, 0.1)'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
export default config
