import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

// TODO: container queries for padding

export const pageContent = recipe({
  base: {
    alignSelf: "center",
  },
  variants: {
    background: {
      normal: vars.color.background.light,
      back: vars.color.background.back.light,
      front: vars.color.background.front.light,
      contrast: vars.color.background.contrast.light,
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
        maxWidth: vars.page.full.maxWidth,
      },
    },
  },
});
