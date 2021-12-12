const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        zinc: colors.zinc,
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
 ],
}