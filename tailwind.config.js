/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'verde-claro' : '#5B823B',
        'verde-escuro' : '#264012',
        'verde-texto' : '#0B201B',
        'verde-numeros' : '#274338'
      },

      fontFamily:{
        'sans' : ["Lexend", 'sans-serif']
      },

      backgroundImage: {
        'hero-image' : "url('/src/assets/img-1.png')"
      }

    },
  },
  plugins: [],
}