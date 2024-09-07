/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'neon': '0 0 5px #6482AD, 0 0 5px #6482AD, 0 0 5px #6482AD',
      },
    
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.neon-border': {
          position: 'relative',
          padding: '1rem',
          border: '2px solid #6482AD',
          borderRadius: '0.5rem',
          boxShadow: '0 0 5px #6482AD, 0 0 5px #6482AD, 0 0 5px #6482AD',
        },
      });
    },
    "prettier-plugin-tailwindcss"
  ],
}

