/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oregano: ['Oregano', 'sans-serif'], 
      },
      extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        opacityChange: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        rotate: 'rotate 4s linear infinite',
        opacityChange: 'opacityChange 5s infinite linear',
      }}
    }
  },
  plugins: []
}
