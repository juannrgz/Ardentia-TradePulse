/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-void': '#09090b',
        'surface': '#18181b',
        'electric-teal': '#2dd4bf',
        'plasma-purple': '#a855f7',
      },
      fontFamily: {
        sans: ['Inter Tight', 'Geist Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

