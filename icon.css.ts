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
        paddingTop: `calc((${vars.font.height.text.small} - ${vars.size.icon.small}) / 2)px`,
        paddingBottom: `calc((${vars.font.height.text.small} - ${vars.size.icon.small}) / 2)px`,
      },
      medium: {
        paddingTop: `calc((${vars.font.height.text.medium} - ${vars.size.icon.medium}) / 2)px`,
        paddingBottom: `calc((${vars.font.height.text.medium} - ${vars.size.icon.medium}) / 2)px`,
      },
      large: {
        paddingTop: `calc((${vars.font.height.text.large} - ${vars.size.icon.large}) / 2)px`,
        paddingBottom: `calc((${vars.font.height.text.large} - ${vars.size.icon.large}) / 2)px`,
      },
    },
  },
});
