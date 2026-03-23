/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        bg: '#111111',
        surface: '#1a1a1a',
        border: '#2a2a2a',
        muted: '#666666',
        text: '#e5e5e5',
        accent: '#e5e5e5',
      },
    },
  },
  plugins: [],
};
