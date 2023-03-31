import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

const rem = 16;

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
        paddingTop: `calc((${
          parseInt(vars.text.small.desktop.size, 10) *
          rem *
          parseInt(vars.text.height, 10)
        } - ${vars.icon.small}) / 2)px`,
        paddingBottom: `calc((${
          parseInt(vars.text.small.desktop.size, 10) *
          rem *
          parseInt(vars.text.height, 10)
        } - ${vars.icon.small}) / 2)px`,
      },
      medium: {
        paddingTop: `calc((${
          parseInt(vars.text.medium.desktop.size, 10) *
          rem *
          parseInt(vars.text.height, 10)
        } - ${vars.icon.medium}) / 2)px`,
        paddingBottom: `calc((${
          parseInt(vars.text.medium.desktop.size, 10) *
          rem *
          parseInt(vars.text.height, 10)
        } - ${vars.icon.medium}) / 2)px`,
      },
      large: {
        paddingTop: `calc((${
          parseInt(vars.text.large.desktop.size, 10) *
          rem *
          parseInt(vars.text.height, 10)
        } - ${vars.icon.large}) / 2)px`,
        paddingBottom: `calc((${
          parseInt(vars.text.large.desktop.size, 10) *
          rem *
          parseInt(vars.text.height, 10)
        } - ${vars.icon.large}) / 2)px`,
      },
    },
  },
});
