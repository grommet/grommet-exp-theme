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
      small: { height: vars.icon.small.height },
      medium: { height: vars.icon.medium.height },
      large: { height: vars.icon.large.height },
      xlarge: { height: vars.icon.xlarge.height },
    },
    height: {
      small: {
        paddingTop: `calc((${
          parseInt(vars.text.small.desktop.fontSize, 10) *
          rem *
          parseInt(vars.text.lineHeight, 10)
        } - ${vars.icon.small}) / 2)px`,
        paddingBottom: `calc((${
          parseInt(vars.text.small.desktop.fontSize, 10) *
          rem *
          parseInt(vars.text.lineHeight, 10)
        } - ${vars.icon.small}) / 2)px`,
      },
      medium: {
        paddingTop: `calc((${
          parseInt(vars.text.medium.desktop.fontSize, 10) *
          rem *
          parseInt(vars.text.lineHeight, 10)
        } - ${vars.icon.medium}) / 2)px`,
        paddingBottom: `calc((${
          parseInt(vars.text.medium.desktop.fontSize, 10) *
          rem *
          parseInt(vars.text.lineHeight, 10)
        } - ${vars.icon.medium}) / 2)px`,
      },
      large: {
        paddingTop: `calc((${
          parseInt(vars.text.large.desktop.fontSize, 10) *
          rem *
          parseInt(vars.text.lineHeight, 10)
        } - ${vars.icon.large}) / 2)px`,
        paddingBottom: `calc((${
          parseInt(vars.text.large.desktop.fontSize, 10) *
          rem *
          parseInt(vars.text.lineHeight, 10)
        } - ${vars.icon.large}) / 2)px`,
      },
    },
  },
});
