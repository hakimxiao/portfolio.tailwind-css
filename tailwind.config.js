/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: { // theme : untuk menimpa atau memodifikasi yang sudah ada di tailwind
    container: {
      center: true,
      padding: '16px',
    },
    extend: { // extend : untuk menambahkan fitur yang ada di tailwind
      colors: {
        // custom warna
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: "#0f172a"

      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

