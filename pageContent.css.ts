import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { background } from "./background.css";

// TODO: container queries for padding

export const pageContent = recipe({
  base: {
    alignSelf: "center",
  },
  variants: {
    background,
    kind: {
      wide: {
        minWidth: `${vars.size.page.min}`,
        maxWidth: `${vars.size.page.max.wide}`,
      },
      narrow: {
        minWidth: `${vars.size.page.min}`,
        maxWidth: `${vars.size.page.max.narrow}`,
      },
      full: {
        minWidth: `${vars.size.page.min}`,
        maxWidth: "100%",
      },
    },
  },
});
