/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1a2e46',
        'dark-blue-light': '#243a58',
      },
    },
  },
  plugins: [],
}
