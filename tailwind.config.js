/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans'],
        sans: ['Open Sans'],
        serif: ['Open Sans'],
        heading: ['Montserrat']
      },
      colors: {
        'horti-green': {
          '50': '#f4faed',
          '100': '#e9f5db',
          '200': '#dff0c9',
          '300': '#d4ebb6',
          '400': '#cae6a3',
          '500': '#bfe090',
          '600': '#b5db7c',
          '700': '#aad566',
          '800': '#a0d04e',
          '900': '#96ca2d',
        }
      }
    },
  },
  plugins: [],
}

