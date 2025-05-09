/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
        'radial-custom': 'radial-gradient(74.8% 74.8% at 34.6% 25.2%, #4D4C4C 0%, #3A3A3A 100%)',
      },boxShadow: {
        'custom-white': '0px 6px 12px 0px #FFFFFF40',
      },
      },
    },
    plugins: [],
  };
  