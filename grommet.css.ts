import { globalFontFace, style } from "@vanilla-extract/css";
import { structuredTokens } from "hpe-design-tokens";
import { theme } from "./theme.css";

// Since globalFontFace is global, we cannot use theme variables for it
// and must use tokens directly.
const family = structuredTokens.font.fontFamily.split(' ')[0];

const weights = [
  "light",
  "regular",
  "medium",
  "semibold",
  "bold",
] as const;

weights.forEach((weight) => {
  globalFontFace(family, {
    src: `url("${structuredTokens.font[weight].url}") format("woff2")`,
    fontWeight: structuredTokens.font[weight].fontWeight,
  });
});

const font = style({
  fontFamily: structuredTokens.font.fontFamily,
});

export const grommet = style([theme, font]);
