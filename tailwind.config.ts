import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          neon:  '#00FF41',
          dim:   '#00AA2A',
          dark:  '#003300',
          xdark: '#002200',
          black: '#001500',
        },
        bg: {
          DEFAULT: '#080808',
          2: '#0a0a0a',
          3: '#0d0d0d',
        },
      },
      fontFamily: {
        mono:    ['"Share Tech Mono"', 'monospace'],
        orbitron: ['"Orbitron"', 'monospace'],
      },
      animation: {
        glitch:  'glitch 6s infinite',
        blink:   'blink 0.53s step-end infinite',
        fadeUp:  'fadeUp 0.5s ease forwards',
        pulse2:  'pulse2 2s infinite',
        'fade-up-1': 'fadeUp 0.5s ease 0.5s forwards',
        'fade-up-2': 'fadeUp 0.5s ease 1.8s forwards',
        'fade-up-3': 'fadeUp 0.5s ease 3.1s forwards',
      },
      keyframes: {
        glitch: {
          '0%,88%,100%': { transform: 'none', filter: 'none' },
          '90%':  { transform: 'skew(-2deg)', filter: 'drop-shadow(-2px 0 red) drop-shadow(2px 0 cyan)' },
          '93%':  { transform: 'skew(1deg) translateX(3px)', filter: 'none' },
          '96%':  { transform: 'none', filter: 'drop-shadow(2px 0 red) drop-shadow(-2px 0 blue)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
}

export default config
