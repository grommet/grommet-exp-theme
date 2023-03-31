import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { box } from "./box.css";

// TODO: container queries for padding

export const pageContent = recipe({
  base: {
    alignSelf: "center",
  },
  variants: {
    background: {
      normal: vars.background.normal,
      back: vars.background.back,
      front: vars.background.front,
      contrast: vars.background.contrast,
    },
    kind: {
      wide: {
        minWidth: vars.page.narrow.max,
        maxWidth: vars.page.wide.max,
      },
      narrow: {
        maxWidth: vars.page.narrow.max,
      },
      full: {
        minWidth: vars.page.wide.max,
        maxWidth: "100%",
      },
    },
  },
});
