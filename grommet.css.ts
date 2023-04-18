import { globalFontFace, style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const metric = "Metric";

Object.keys(vars).forEach(weight => {
  globalFontFace(metric, {
    src: `url("${vars.font[weight].url}") format("woff2")`,
    fontWeight: `${vars.font[weight]['font-weight']}`,
  });
});

const font = style({
  fontFamily: metric,
});

export const grommet = style([font]);
