const colors = require("tailwindcss/colors")

module.exports = {
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        amber: colors.amber,
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
 ],
}