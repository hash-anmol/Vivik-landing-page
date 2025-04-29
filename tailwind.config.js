/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lemon: '#FFF44F', // On-brand lemon yellow
        black: '#171717',
        white: '#FFFFFF',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        archivo: ['var(--font-archivo-black)', 'Archivo Black', 'sans-serif'], // Google Fonts headline
      },
    },
  },
  plugins: [],
}
