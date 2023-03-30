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
      normal: vars.content.background.normal,
      back: vars.content.background.back,
      front: vars.content.background.front,
      contrast: vars.content.background.contrast,
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
