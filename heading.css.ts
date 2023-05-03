import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { responsiveStyle } from "./utils";

const sizeStyle = (size: 1 | 2 | 3) => [
  {
    fontSize: vars.heading[size].mobile.fontSize,
    fontWeight: vars.heading[size].mobile.fontWeight,
  },
  responsiveStyle({
    desktop: {
      fontSize: vars.heading[size].desktop.fontSize,
      fontWeight: vars.heading[size].desktop.fontWeight,
    },
    tablet: {
      fontSize: vars.heading[size].tablet.fontSize,
      fontWeight: vars.heading[size].tablet.fontWeight,
    },
  }),
];

export const heading = recipe({
  base: {
    color: vars.heading.color,
    margin: 0,
    lineHeight: 1,
  },
  variants: {
    level: {
      1: sizeStyle(1),
      2: sizeStyle(2),
      3: sizeStyle(3),
    },
  },
});
