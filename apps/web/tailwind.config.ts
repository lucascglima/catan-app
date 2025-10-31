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
        // Catan color palette
        wood: '#8B4513',
        brick: '#CD5C5C',
        sheep: '#90EE90',
        wheat: '#FFD700',
        ore: '#708090',
        desert: '#F4A460',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};

export default config;
