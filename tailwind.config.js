module.exports = {
  mode: 'jit',
  purge: ['./**/*.html', './**/*.css'],
  darkMode: true,
  theme: {
    fontFamily: {
      'sans': 'Inter, sans-serif',
    },
    extend: {
      colors: {
        broadway: {
          500: '#FF1C1C',
          600: '#FFDF3F',
          700: '#FF9901',
          800: '#29DBFF',
          900: '#01ADFF',
        },
        background: {
          600: '#41435F',
          700: '#101228',
          800: '#070814',
          900: '#0A0B1C',
        },
        gray: {
          50: '#F8FAFC',
          200: '#E1E8F0',
          300: '#CAD5E0',
          400: '#91A4B7',
          700: '#304254',
          800: '#1C2A3A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
