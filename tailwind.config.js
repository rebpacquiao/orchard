/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin');

const config = {
  darkMode: ['class'],
  content: [
    './src/styles/**/*.css',
    './src/styles/*.css',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
        '3xl': '32px',
        '5xl': '48px',
      },
      lineHeight: {
        '11': '44px',
      },
      spacing: {
        hairline: '1px',
        mini: '2px',
        small: '4px',
        base: '8px',
        moderate: '12px',
        normal: '16px',
        comfy: '24px',
        spacious: '32px',
        large: '40px',
        giant: '48px',
        colossal: '64px',
        enormous: '84px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          '100': '#75B1FF',
          '200': '#2886FF',
          '300': '#0055C1',
        },
        primary2: {
          '100': '#E9F3FF',
          '200': '#2689F5',
          '300': '#1060B7',
        },
        success: {
          '100': '#96EE95',
          '200': '#26CB05',
          '300': '#00AA17',
        },
        success2: {
          '100': '#CEFFEA',
          '200': '#26C381',
          '300': '#1A885A',
        },
        warning: {
          '100': '#FFE9CE',
          '200': '#FEB45E',
          '300': '#F2901F',
        },
        danger: {
          '100': '#FFDAD7',
          '200': '#F02E22',
          '300': '#C0241B',
        },
        neutral: {
          '0': '#FFFFFF',
          '100': '#F1F2F4',
          '200': '#DCDEE3',
          '300': '#B3B8C2',
          '400': '#878FA0',
          '500': '#788093',
          '600': '#666F84',
          '700': '#4A556E',
          '800': '#35405C',
          '900': '#232F4D',
          '1000': '#182343',
        },
        offWhite: '#F6F9FC',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1024px',
          },
        },
      })
    },
    require('tailwindcss-animate'),
    flowbite,
  ],
}
export default config
