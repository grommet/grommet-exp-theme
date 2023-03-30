import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";
import { tokens } from "grommet-exp-tokens";
import { theme, vars } from "./theme.css";

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

const responsiveStyle = ({
  desktop,
  tablet,
}: {
  desktop: any;
  tablet: any;
}) => ({
  "@media": {
    "screen and (min-width: 768px)": tablet,
    "screen and (min-width: 1536px)": desktop,
  },
});

globalStyle(":root", {
  margin: 0,
  // percentage of 16 (browser base size). using
  // percentage enables dynamic font scaling
  fontSize: "87.5%", // 14px
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  ...responsiveStyle({
    desktop: {
      fontSize: "112.5%", // 18px
    },
    tablet: {
      fontSize: "100%", // 16px
    },
  }),
});

const font = style({
  fontFamily: metric,
  ...globalStyle,
});

export const grommet = style([theme, font]);
