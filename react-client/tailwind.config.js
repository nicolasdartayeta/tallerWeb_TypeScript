/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        customGray: '#E7EBE5',
        customGreen: '#516244',
        customSimilar4: '#c3d5ca',
        customGreenSoft3: '#b0c6b5',
      },
      innerShadow: {
        '3xl': '35px 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./public/stylesheets/index.css -o ./public/stylesheets/outputTailwind.css --watch
