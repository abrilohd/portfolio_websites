/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // ── 3 CORE BRAND IDENTIFIERS (IMAGE-VERIFIED) ──
        brand: {
          navy: '#0D3164',      // Core Canvas & Foundation
          gold: '#FAC23B',      // Primary Action & Highlights (Python Snake)
          blue: '#1967B2',      // Secondary Technical Accent (AI Circuitry)
          silver: '#F6F5F1',    // Light Mode Canvas (Robot Face)
        },

        // ── SYSTEMATIC NAVY PALETTE ──
        navy: {
          950: '#081E3F',       // deepest shadow
          900: '#0D3164',       // Core Brand Navy (Exact Canvas Background)
          800: '#11366E',       // section background dark
          700: '#143D7A',       // elevated card surface dark
          600: '#1C4A86',       // card border / circuit lines
          500: '#1967B2',       // AI tech blue
          400: '#2D6BB5',       // interactive blue hover
          300: '#4A92D9',       // illuminated circuit node / links dark
          200: '#82AEDB',       // muted technical text dark
          100: '#C6DBF2',       // secondary text dark
          50:  '#F6F5F1',       // Neural Silver (Light mode canvas)
        },

        // ── PYTHON GOLD ACCENT ──
        py: {
          900: '#0D3164',       // text on yellow button (WCAG AAA 7.83:1)
          800: '#422800',
          700: '#754B00',
          600: '#E8B12E',       // gold active / pressed
          500: '#FAC23B',       // PRIMARY BRAND ACCENT (Exact Python Yellow)
          400: '#FFCF5C',       // gold hover
          300: '#FFE08F',
          200: '#FFF0C2',
          100: '#FFF9E6',
          50:  '#FFFCF5',
        },

        // ── AI TECH BLUE RAMP ──
        ai: {
          900: '#0A2548',
          800: '#0D3164',
          700: '#12417E',
          600: '#16529A',
          500: '#1967B2',       // PRIMARY AI ACCENT
          400: '#2879CB',
          300: '#4A92D9',
          200: '#7CB2E8',
          100: '#B6D6F6',
          50:  '#EAF3FC',
        },

        // ── SURFACE SYSTEM ──
        surface: {
          dark:    '#143D7A',   // elevated card surface dark
          darker:  '#0D3164',   // root page background dark
          light:   '#F6F5F1',   // Neural Silver canvas light
          lighter: '#FFFFFF',   // crisp card surface light
          border:  '#1C4A86',   // dark mode circuit border
          borderl: '#D5E0ED',   // light mode silver border
        },

        // ── SEMANTIC STATUS ──
        success: '#1D9E75',
        warning: '#FAC23B',
        danger:  '#D85A30',
        info:    '#1967B2',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },
      borderRadius: {
        'card': '12px',
        'btn':  '8px',
        'tag':  '6px',
        'pill': '999px',
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1':      ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h2':      ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3':      ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.75' }],
        'body':    ['1rem',      { lineHeight: '1.7' }],
        'sm':      ['0.875rem', { lineHeight: '1.6' }],
        'xs':      ['0.75rem',  { lineHeight: '1.5' }],
        'mono':    ['0.8125rem', { lineHeight: '1.6', fontFamily: 'JetBrains Mono' }],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow':  'spin 12s linear infinite',
        'slide-down': 'slideDown 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '0.8', transform: 'scale(1.08)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
