/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ny: {
          bg: '#0C0B0E',
          card: '#141318',
          cardHover: '#1A1820',
          border: 'rgba(212, 175, 55, 0.15)',
          borderHover: 'rgba(212, 175, 55, 0.35)',
          gold: '#D4AF37',
          goldLight: '#E8C868',
          goldDark: '#A68218',
          amber: '#F59E0B',
          cream: '#FDFBF7',
          muted: '#9E9AA7',
          wine: '#782121',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.08)',
        'gold-md': '0 8px 30px rgba(212, 175, 55, 0.12)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
