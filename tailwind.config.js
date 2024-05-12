/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#FF0000",
        'secondary': "#f5f6fa",
        'light': "#00fbff",
      },
    },
  },
  plugins: [],
}
