import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-main':'linear-gradient(207deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0.1) 100%);'
      },
      colors:{
        primary: {
          100: '#586E75', 
          200: '#859ca4',
          300: '#e8ffff',
        },
        accent: {
          100: '#CB4B16',
          200: '#ffe0a1', 
        },
        text: {
          100: '#073642',
          200: '#38606d',
        },
        bg: {
          100: '#FDF6E3',
          200: '#f3ecd9',
          300: '#cac3b1',
        }
      }
    },
  },
  plugins: [],
}
export default config
