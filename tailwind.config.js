/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  content: [
    './projects/**/!(*.stories|*.spec).{ts,html}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};
