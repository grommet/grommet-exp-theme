import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const text = recipe({
  base: {
    color: vars.color.text,
    margin: 0, // for paragraph
  },
  variants: {
    size: {
      small: { fontSize: "0.8em" },
      medium: { fontSize: 18 },
      large: { fontSize: "1.2em" },
    },
  },
});
