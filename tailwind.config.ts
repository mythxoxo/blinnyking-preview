import type {Config} from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        tag: 'var(--color-tag)'
      },
      borderRadius: {
        xl: 'calc(var(--radius) - 4px)',
        '2xl': 'calc(var(--radius) - 2px)',
        '3xl': 'var(--radius)'
      },
      boxShadow: {
        soft: '0 20px 50px -24px rgba(120, 53, 15, 0.2)'
      }
    }
  },
  plugins: [animate]
};

export default config;
