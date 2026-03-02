/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#1f1d1a',
        paper: '#fcfbf7',
        sepia: '#6f675b',
        line: '#e4ddcf'
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"IBM Plex Sans"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif']
      },
      boxShadow: {
        sketch: '0 3px 0 #1f1d1a, 0 14px 30px rgba(31, 29, 26, 0.12)'
      }
    }
  },
  plugins: []
};
