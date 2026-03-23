/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        bg: '#ffffff',
        text: '#1a1a1a',
        muted: '#888888',
        border: '#e0e0e0',
      },
    },
  },
  plugins: [],
};
