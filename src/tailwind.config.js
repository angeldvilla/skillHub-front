{import('tailwindcss').Config} 
export default {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'dark_purple': '#4700D8',
          'light_purple': '#AF88FF',
        },
        stroke: {
          'dark_purple': '#4700D8',
          'light_purple': '#AF88FF',
        },
      },
    },
    variants: {
      extend: {
        stroke: ['dark'],
      },
    },
    plugins: [],
  };