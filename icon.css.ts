import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const icon = recipe({
  base: {
    boxSizing: "content-box",
  },
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      small: { height: vars.icon.small },
      medium: { height: vars.icon.medium },
      large: { height: vars.icon.large },
      xlarge: { height: vars.icon.xlarge },
    },
    height: {
      small: {
        paddingTop: `calc((${vars.text.small.desktop.height} - ${vars.icon.small}) / 2)px`,
        paddingBottom: `calc((${vars.text.small.desktop.height} - ${vars.icon.small}) / 2)px`,
      },
      medium: {
        paddingTop: `calc((${vars.text.medium.desktop.height} - ${vars.icon.medium}) / 2)px`,
        paddingBottom: `calc((${vars.text.medium.desktop.height} - ${vars.icon.medium}) / 2)px`,
      },
      large: {
        paddingTop: `calc((${vars.text.large.desktop.height} - ${vars.icon.large}) / 2)px`,
        paddingBottom: `calc((${vars.text.large.desktop.height} - ${vars.icon.large}) / 2)px`,
      },
    },
  },
});
