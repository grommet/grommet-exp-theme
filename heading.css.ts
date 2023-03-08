import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const heading = recipe({
  base: {
    color: vars.color.heading,
    margin: 0,
  },
  variants: {
    level: {
      1: { fontSize: "3em" },
      2: { fontSize: "2em" },
      3: { fontSize: "1.6em" },
      4: { fontSize: "1.3em" },
    },
  },
});
