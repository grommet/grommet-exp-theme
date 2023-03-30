import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const heading = recipe({
  base: {
    color: vars.heading.color,
    margin: 0,
    lineHeight: 1,
  },
  variants: {
    level: {
      1: {
        fontSize: `${vars.heading[1].size}`,
        fontWeight: `${vars.font.weight.regular}`,
      },
      2: {
        fontSize: `${vars.heading[2].size}`,
        fontWeight: `${vars.font.weight.regular}`,
      },
      3: {
        fontSize: `${vars.heading[3].size}`,
        fontWeight: `${vars.font.weight.regular}`,
      },
    },
  },
});
