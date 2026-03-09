/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Cybersecurity-themed colors
        'cyber-green': '#00ff41',
        'cyber-pink': '#ff0055',
        'cyber-blue': '#00d4ff',
        'cyber-dark': '#0a0e1a',
        'cyber-darker': '#050810'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        mono: ['"VT323"', 'monospace'],
        tech: ['"Share Tech Mono"', 'monospace'],
        sans: ['system-ui', 'sans-serif']
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0,0,0,1)',
        'pixel-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'pixel-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'pixel-none': '0px 0px 0px 0px rgba(0,0,0,0)',
        'cyber': '0 0 10px rgba(0, 255, 65, 0.3), 4px 4px 0px 0px rgba(0,0,0,1)',
        'cyber-pink': '0 0 10px rgba(255, 0, 85, 0.3), 4px 4px 0px 0px rgba(0,0,0,1)',
        'cyber-blue': '0 0 10px rgba(0, 212, 255, 0.3), 4px 4px 0px 0px rgba(0,0,0,1)'
      },
      keyframes: {
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        'blink': {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' }
        },
        'cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'cursor': 'cursor 1s step-end infinite'
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a2e 1px, transparent 1px), linear-gradient(to bottom, #1a1a2e 1px, transparent 1px)"
      }
    }
  },
  plugins: []
}
