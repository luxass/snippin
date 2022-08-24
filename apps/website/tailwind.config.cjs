/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 2s linear infinite'
      }
    }
  },
  plugins: []
};
