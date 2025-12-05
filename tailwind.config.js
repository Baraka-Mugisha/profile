/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    extend: {
      colors: {
        base: 'var(--base)',
        'base-tint': 'var(--base-tint)',
        'base-shade': 'var(--base-shade)',
        accent: 'var(--accent)',
        secondary: 'var(--secondary)',
        'stroke-controls': 'var(--stroke-controls)',
        'stroke-elements': 'var(--stroke-elements)',
        't-bright': 'var(--t-bright)',
        't-medium': 'var(--t-medium)',
        't-muted': 'var(--t-muted)',
        't-accent': 'var(--t-accent)',
        't-secondary': 'var(--t-secondary)',
        't-disabled': 'var(--t-disabled)',
        't-placeholder': 'var(--t-placeholder)',
        'base-opp': 'var(--base-opp)',
        't-opp-bright': 'var(--t-opp-bright)',
        't-opp-medium': 'var(--t-opp-medium)',
        't-opp-muted': 'var(--t-opp-muted)',
      },
      borderRadius: {
        s: 'var(--_radius-s)',
        m: 'var(--_radius-m)',
        l: 'var(--_radius-l)',
        xl: 'var(--_radius-xl)',
      },
      fontFamily: {
        sans: ['var(--_font-default)'],
        accent: ['var(--_font-accent)'],
      },
      fontSize: {
        base: 'var(--_size)',
      },
      transitionDuration: {
        fast: 'var(--_animspeed-fast)',
        medium: 'var(--_animspeed-medium)',
        slow: 'var(--_animspeed-slow)',
      },
      transitionTimingFunction: {
        custom: 'var(--_animbezier)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%)',
        'gradient-text': 'linear-gradient(15deg, var(--t-accent) 0%, var(--t-secondary) 80%)',
      },
      backdropBlur: {
        custom: '10px',
      },
    },
  },
  plugins: [],
};
