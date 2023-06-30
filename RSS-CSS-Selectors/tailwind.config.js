module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    keyframes: {
      topSkew: {
        '0%': {
          transform: 'skew(3deg,0deg) scaleX(1)',
          transformOrigin: 'bottom',
        },
        '10%': {
          transform: 'skew(1deg,0deg) scaleY(.95)',
          transformOrigin: 'bottom',
        },
        '50%': {
          transform: 'skew(-3deg,0deg) scaleX(1)',
          transformOrigin: 'bottom',
        },
        '60%': {
          transform: 'skew(-1deg,0deg) scaleY(.95)',
          transformOrigin: 'bottom',
        },
        '100%': {
          transform: 'skew(3deg,0deg) scaleX(1)',
          transformOrigin: 'bottom',
        },
      },
      pulse: {
        '0%, 100%': {
          opacity: '1',
        },
        '50%': {
          opacity: '0.3',
        },
      },
      moveContainer: {
        '0%': {
          transform: 'translateX(-1%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateX(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
        },
        '100%': {
          transform: 'translateX(1%)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
      none: {
        '0%': {
          opacity: '1',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
    animation: {
      topSkew: 'topSkew 1s infinite',
      pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      moveContainer: 'moveContainer 0.1s infinite',
      none: 'none 1s',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
