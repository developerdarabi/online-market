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
          DEFAULT: '#FFA947'
        },
        secondary: {
          DEFAULT: '#fafafa'
        },
        hover: '#FFA947',
        icons: '#FFA947',
        text_color: '#333333',
        background: {
          DEFAULT: '#D7DBDC',
        }
      },
    },
  },
  plugins: [],
};
