// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line allows Tailwind to purge unused styles
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1 '
        },
        secondary: {
          DEFAULT: '#eef2ff '
        },
        background: {
          DEFAULT: '#eef2ff ',
        }
      },
    },
  },
  plugins: [],
};
