import { fontFace, style } from '@vanilla-extract/css';
import { tokens } from "grommet-exp-tokens";
import { theme } from "./theme.css";

const regularFace = fontFace({
  src: `url("${tokens["font.url.regular"]}") format("woff2")`,
  fontWeight: `${tokens["font.weight.regular"]}`
});

export const grommet = style([theme, {
  fontFamily: `${regularFace}, ${tokens["font.fallback"]}, sans-serif`,
}]);
