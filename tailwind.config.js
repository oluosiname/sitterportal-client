/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      body: ['var(--font-quicksand)'],
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#fcdb02',
        primaryOpacity: {
          100: 'rgba(252, 219, 2, 0.1)',
        },
        primaryDark: '#dec102',

        secondary: '#214d63',
        secondaryDark: '#3a4957',
        disabled: '#d3d3d3',
        gray: {
          100: '#fafafa',
          200: '#eeeeee',
          300: '#666666',
          400: '#dfdfdf',
        },
        black: {
          100: '#212529',
        },
        red: {
          100: '#e3580f',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)'],
        robotoSlab: ['var(--font-robotoSlab)'],
        quicksand: ['var(--font-quicksand)'],
      },
    },
  },
  plugins: [],
};
