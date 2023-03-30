import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const text = recipe({
  base: {
    color: vars.text.color.normal,
    fontSize: vars.text.medium.desktop.size,
    height: vars.text.medium.desktop.height,
    fontWeight: vars.text.medium.desktop.weight,
    margin: 0, // for paragraph
  },
  variants: {
    color: {
      normal: { color: vars.text.color.normal },
      strong: { color: vars.text.color.strong },
      weak: { color: vars.text.color.weak },
    },
    size: {
      xsmall: {
        fontSize: vars.text.xsmall.desktop.size,
        height: vars.text.xsmall.desktop.height,
        fontWeight: vars.text.xsmall.desktop.weight,
      },
      small: {
        fontSize: vars.text.small.desktop.size,
        height: vars.text.small.desktop.height,
        fontWeight: vars.text.small.desktop.weight,
      },
      medium: {
        fontSize: vars.text.medium.desktop.size,
        height: vars.text.medium.desktop.height,
        fontWeight: vars.text.medium.desktop.weight,
      },
      large: {
        fontSize: vars.text.large.desktop.size,
        height: vars.text.large.desktop.height,
        fontWeight: vars.text.large.desktop.weight,
      },
      xlarge: {
        fontSize: vars.text.xlarge.desktop.size,
        height: vars.text.xlarge.desktop.height,
        fontWeight: vars.text.xlarge.desktop.weight,
      },
    },
  },
});
