import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const text = recipe({
  base: {
    color: vars.color.text.normal,
    fontSize: vars.font.size.text.medium,
    height: vars.font.height.text.medium,
    margin: 0, // for paragraph
  },
  variants: {
    color: {
      normal: { color: `${vars.color.text.normal}` },
      strong: { color: `${vars.color.text.strong}` },
      weak: { color: `${vars.color.text.weak}` },
    },
    size: {
      small: {
        fontSize: vars.font.size.text.small,
        height: vars.font.height.text.small,
      },
      medium: {
        fontSize: vars.font.size.text.medium,
        height: vars.font.height.text.medium,
      },
      large: {
        fontSize: vars.font.size.text.large,
        height: vars.font.height.text.large,
      },
      xlarge: {
        fontSize: vars.font.size.text.xlarge,
        height: vars.font.height.text.xlarge,
      },
    },
  },
});
