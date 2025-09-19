import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#222222',
        },
        accent: {
          green: '#4CAF50', // Example green, adjust if needed
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
