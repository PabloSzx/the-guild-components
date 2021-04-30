const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-blue': '#1CC8EE',
      },
      screens: {
        'xs': '360px',
      },
      zIndex: {
        '1': 1
      },
      height: {
        '4.5': '1.125rem',
      },
      width: {
        '4.5': '1.125rem',
      },
      borderWidth: {
        '3': '3px',
      },
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const containerProps = {
        width: '100%',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
      }

      const newUtilities = {
        '.container-max': {
          ...containerProps,
          maxWidth: '1200px',
        },
        
        '.container-min': {
          ...containerProps,
          maxWidth: '1024px',
        },
      }

      addUtilities(newUtilities);
    })
  ]
}
