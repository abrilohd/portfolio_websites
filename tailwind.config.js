/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // ── NAVY RAMP (extracted from image background) ──
        navy: {
          950: '#07112A',   // deepest dark bg (dark mode page)
          900: '#0D1B3E',   // hero bg, footer bg
          800: '#0F2147',   // section-alt bg dark
          700: '#163060',   // card bg dark, nav bg dark
          600: '#1A3E7A',   // card border dark, hover surface
          500: '#1E4D9B',   // primary button default
          400: '#2560C2',   // primary button hover
          300: '#4A7FD4',   // links, icons, outlines
          200: '#7AABEA',   // muted icon, disabled text dark
          100: '#A8C3EC',   // very muted text dark
          50:  '#D4E1F5',   // light mode muted text
        },
        // ── PYTHON YELLOW RAMP (extracted from Python logo) ──
        py: {
          900: '#3D2A00',   // darkest yellow (text on yellow bg)
          800: '#6B4900',   // heading on yellow surface
          700: '#9A6C00',   // body on yellow surface
          600: '#C48F00',   // yellow border
          500: '#F5C518',   // PRIMARY ACCENT — Python yellow
          400: '#FFD03A',   // accent hover
          300: '#FFE17A',   // accent light
          200: '#FFF1B3',   // accent tint
          100: '#FFF8D6',   // light mode accent bg
          50:  '#FFFDF0',   // lightest yellow surface
        },
        // ── AI BLUE RAMP (extracted from AI head illustration) ──
        ai: {
          900: '#030F1F',
          800: '#071E3D',
          700: '#0E2F5C',
          600: '#163F7A',
          500: '#1C5099',   // AI accent (circuit lines, brain nodes)
          400: '#2B6CC4',
          300: '#5291D8',
          200: '#85B7EB',
          100: '#C2DAFA',
          50:  '#EAF1FB',   // light mode card bg, input bg
        },
        // ── NEUTRAL / SURFACE RAMP ──
        surface: {
          dark:    '#111827',  // dark mode card bg (not pure black)
          darker:  '#0B1222',  // dark mode elevated card
          light:   '#F0F4FF',  // light mode page bg (cool white, image-derived)
          lighter: '#FFFFFF',  // light mode card surface
          border:  '#1E3A6E',  // dark mode card border
          borderl: '#C8D8F0',  // light mode card border
        },
        // ── SEMANTIC COLORS (harmonized with palette) ──
        success: '#1D9E75',   // teal — from AI circuit node color
        warning: '#F5C518',   // reuse Python yellow for warnings
        danger:  '#D85A30',   // warm coral — not red (keeps warmth)
        info:    '#4A7FD4',   // navy-300
      },
      // ── SPACING SCALE ──
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },
      // ── BORDER RADIUS ──
      borderRadius: {
        'card': '12px',
        'btn':  '8px',
        'tag':  '6px',
        'pill': '999px',
      },
      // ── TYPOGRAPHY SCALE ──
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
