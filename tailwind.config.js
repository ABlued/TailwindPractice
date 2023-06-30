/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: 'blue',
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  plugins: [],
};
