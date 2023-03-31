import { globalFontFace, style } from "@vanilla-extract/css";
import { tokens } from "grommet-exp-tokens";
import { theme } from "./theme.css";

const metric = "Metric";

globalFontFace(metric, {
  src: `url("${tokens["font.url.light"]}") format("woff2")`,
  fontWeight: `${tokens["font.weight.light"]}`,
});
globalFontFace(metric, {
  src: `url("${tokens["font.url.regular"]}") format("woff2")`,
  fontWeight: `${tokens["font.weight.regular"]}`,
});
globalFontFace(metric, {
  src: `url("${tokens["font.url.medium"]}") format("woff2")`,
  fontWeight: `${tokens["font.weight.medium"]}`,
});
globalFontFace(metric, {
  src: `url("${tokens["font.url.bold"]}") format("woff2")`,
  fontWeight: `${tokens["font.weight.bold"]}`,
});

const font = style({
  fontFamily: metric,
});

export const grommet = style([theme, font]);
