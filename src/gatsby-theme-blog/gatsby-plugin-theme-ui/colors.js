import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

export default merge(defaultThemeColors, {
  text: "#22223b",
  primary: "#C64980",
  modes: {
    dark: {
      background: "#46494C",
      primary: "#CAB0BA",
    },
  },
})
