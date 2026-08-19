/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#102A43',
        ocean: '#0B7285',
        sand: '#FFF8E7',
        coral: '#F26B5B',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 42, 67, 0.12)',
      },
    },
  },
  plugins: [],
};
