import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const icon = recipe({
  base: {
    height: vars.size.icon.medium,
    boxSizing: "content-box",
  },
  variants: {
    size: {
      small: { height: vars.size.icon.small },
      medium: { height: vars.size.icon.medium },
      large: { height: vars.size.icon.large },
      xlarge: { height: vars.size.icon.xlarge },
    },
    height: {
      small: {
        paddingTop: `calc((${vars.text.small.desktop.height} - ${vars.size.icon.small}) / 2)px`,
        paddingBottom: `calc((${vars.text.small.desktop.height} - ${vars.size.icon.small}) / 2)px`,
      },
      medium: {
        paddingTop: `calc((${vars.text.medium.desktop.height} - ${vars.size.icon.medium}) / 2)px`,
        paddingBottom: `calc((${vars.text.medium.desktop.height} - ${vars.size.icon.medium}) / 2)px`,
      },
      large: {
        paddingTop: `calc((${vars.text.large.desktop.height} - ${vars.size.icon.large}) / 2)px`,
        paddingBottom: `calc((${vars.text.large.desktop.height} - ${vars.size.icon.large}) / 2)px`,
      },
    },
  },
});
