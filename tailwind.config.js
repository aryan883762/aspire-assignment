module.exports = {
  purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "success": "var(--success-color)",
        "danger": "var(--danger-color)",
        "info": "var(--info-color)"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
