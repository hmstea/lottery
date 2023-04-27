/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        'ms': 'inset 2px 2px 4px 1px rgb(0 0 0 / 0.30)'
      }
    },
  },
  plugins: [],
}

