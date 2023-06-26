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
    },
    animation: {
      topSkew: 'topSkew 1s infinite',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
