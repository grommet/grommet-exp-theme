import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

// TODO: container queries for padding

export const pageContent = recipe({
  base: {
    alignSelf: "center",
  },
  variants: {
    background: {
      default: vars.color.background.default,
      back: vars.color.background.back,
      front: vars.color.background.front,
      contrast: vars.color.background.contrast,
    },
    kind: {
      wide: {
        minWidth: vars.page.narrow.maxWidth,
        maxWidth: vars.page.wide.maxWidth,
      },
      narrow: {
        maxWidth: vars.page.narrow.maxWidth,
      },
      full: {
        minWidth: vars.page.wide.maxWidth,
        maxWidth: '100%',
      },
    },
  },
});
