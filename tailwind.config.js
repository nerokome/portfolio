/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    animation: {
      'fade-in': 'fadeIn 1s ease-in-out',
      'slide-up': 'slideUp 0.5s ease-out',
      'typewriter': 'typing 3s steps(30, end) forwards',
      'blink-cursor': 'blink 0.75s step-end infinite',
      'border-pulse': 'border-pulse 2s ease-in-out infinite',
      'bg-gradient-move': 'bgGradientMove 6s linear infinite',
    },
    keyframes: {
      'border-pulse': {
      '0%, 100%': { borderColor: 'transparent' },
      '50%': { borderColor: 'black' },
      },
      fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
      },
      slideUp: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      typing: {
      '0%': { width: '0%' },
      '100%': { width: '100%' },
      },
      blink: {
      '0%, 100%': { borderColor: 'transparent' },
      '50%': { borderColor: 'black' },
      },
      bgGradientMove: {
      '0%': { 'background-position': '0% 50%' },
      '100%': { 'background-position': '100% 50%' },
      },
    },
    },
  },
  plugins: [],
};