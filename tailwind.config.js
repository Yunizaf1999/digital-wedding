/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        rose: '#F0E6D2',
        emerald: '#2D5016',
        blush: '#E8B4B8',
        platinum: '#E5E4E2',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        float: 'float 3s ease-in-out infinite',
        pulse-glow: 'pulse-glow 2s ease-in-out infinite',
        slide-in: 'slide-in 0.8s ease-out',
        fade-in: 'fade-in 1s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
