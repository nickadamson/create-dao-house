const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-source-serif)', ...fontFamily.serif],
        tech: ['var(--font-martian-mono)', ...fontFamily.mono],
        nouns: ['var(--font-local)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
