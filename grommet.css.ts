import { globalFontFace, style } from "@vanilla-extract/css";
import { theme, vars } from "./theme.css";

const metric = "Metric";

const weights = [
  "light",
  "regular",
  "medium",
  "semibold",
  "bold",
] as const;

weights.forEach((weight) => {
  globalFontFace(metric, {
    src: `url("${vars.font[weight].url}") format("woff2")`,
    fontWeight: vars.font[weight].fontWeight,
  });
});

const font = style({
  fontFamily: metric,
});

export const grommet = style([theme, font]);
