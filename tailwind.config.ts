import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#EBECF0',
        black: '#030305',
        darkRed: '#AD5C61',
        neutral: {
          100: '#D0D1D6',
          200: '#A8ABB3',
          300: '#878A94',
          400: '#555861',
          500: '#363840',
          600: '#2B2E36',
          700: '#1F2128',
          800: '#13151C',
          900: '#0B0D13',
        },
        greenish: {
          100: '#DDF6EB',
          200: '#BAEED7',
          300: '#75D9AD',
          400: '#47C48E',
          500: '#29A46F',
          600: '#22875B',
          700: '#1B6B49',
          800: '#145136',
          900: '#0E3725',
          1000: '#082015',
        },
        primary: {
          DEFAULT: '#0AF2AD',
          dark: '#087353',
          light: '#A9FCE4'
        },
        orange: {
          DEFAULT: '#CFBD70',
          dark: '#877B44',
          light: '#D9CC96'
        },
        blue: {
          DEFAULT: '#9EBAF0',
          dark: '#334566',
          light: '#C5D7FA'
        },
        opacityLight: {
          5: 'rgba(208, 209, 214, 0.05)',
          10: 'rgba(208, 209, 214, 0.1)',
          20: 'rgba(208, 209, 214, 0.2)',
          30: 'rgba(208, 209, 214, 0.3)',
          60: 'rgba(208, 209, 214, 0.6)',
          70: 'rgba(208, 209, 214, 0.7)',
          80: 'rgba(208, 209, 214, 0.8)',
          90: 'rgba(208, 209, 214, 0.9)',
        },
        opacityDark: {
          40: 'rgba(11, 13, 19, 0.4)',
          50: 'rgba(11, 13, 19, 0.5)',
          60: 'rgba(11, 13, 19, 0.6)',
          70: 'rgba(11, 13, 19, 0.7)',
          80: 'rgba(11, 13, 19, 0.8)',
          90: 'rgba(11, 13, 19, 0.9)',
        }
      },
    },
  },
  plugins: [],
};
export default config;
