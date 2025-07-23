/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oregano: ['Oregano', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cyborg: ['Cyborg', 'sans-serif'],
      },
      colors: {
        'bg-dark': '#1A1D24',
        'text-light': '#F0F0F0',
        'text-medium': '#A0A0A0',
        'accent-blue': '#4A90E2',
        'border-color': '#33373E',
        'creamy': '#e3dcd5',
      },
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        rotate: 'rotate 4s linear infinite',
        opacityChange: 'opacityChange 5s infinite linear',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite linear',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(74, 144, 226, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(74, 144, 226, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      },
    }
  },
  plugins: []
}