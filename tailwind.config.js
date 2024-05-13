/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'tech-magenta': '#E03BE3',
        'kinky-purple': '#55286F',
        'death-gray': '#1F2020',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },

    fontFamily: {
      'main': ['Sora', 'sans-serif'],
    },
  },
  plugins: [],
}