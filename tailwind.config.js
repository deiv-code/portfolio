/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['"Source Sans 3"', 'Lato']
    },
    animation: {
      fade: 'fadeIn .5s ease-in-out',
      
    },
    extend: {},
  },
  plugins: [],
}

