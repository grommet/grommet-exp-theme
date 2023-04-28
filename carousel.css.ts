import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const carouselButton = recipe({
  base: {
    appearance: "none",
    boxSizing: "border-box",
    background: "none",
    backgroundColor: vars.color.background.contrast,
    borderRadius: "2em",
    border: "none",
    padding: `${vars.spacing.xsmall.desktop}`,
    ":hover": {
      cursor: `pointer`,
      backgroundColor: vars.color.background.active,
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.color.background.selected,
      }
    }
  }
});
