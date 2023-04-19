import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { gapVariants, padVariants, marginVariants } from "./box.css";

export const grid = recipe({
  base: {
    display: "grid",
    boxSizing: "border-box",
  },
  variants: {
    columns: {
      small: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.small}, 100%), 1fr))`,
      },
      medium: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.medium}, 100%), 1fr))`,
      },
      large: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.large}, 100%), 1fr))`,
      },
      none: { gridAutoColumns: "auto" },
    },
    ...gapVariants,
    ...marginVariants,
    ...padVariants,
  },
});
