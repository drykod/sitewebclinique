/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#e0faff',
          100: '#b8f3ff',
          200: '#80eaff',
          300: '#3ddcff',
          400: '#1fddff', // Logo primary
          500: '#00bfff',
          600: '#0090cc',
          700: '#0070a0',
          800: '#00587d',
          900: '#004a69',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#8dd53f', // Logo secondary
          500: '#65a30d',
          600: '#4d7c0f',
          700: '#3f6212',
          800: '#365314',
          900: '#1a2e05',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
