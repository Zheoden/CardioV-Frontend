/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: { bold: 'rgb(24, 26, 27)', normal: 'rgb(27, 30, 31)' },
        light: { normal: '#F8F9FA' },
        input: { dark: '#626363', light: '#a8a8a8' },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
