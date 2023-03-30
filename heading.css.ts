import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

const responsiveStyle = ({ mobile, tablet }: { mobile: any; tablet: any }) => ({
  "@media": {
    "only screen and (max-width: 768px)": mobile,
    "only screen and (max-width: 1536px)": tablet,
  },
});

const sizeStyle = (size: 1 | 2 | 3) => [
  {
    fontSize: vars.heading[size].desktop.size,
    lineHeight: vars.heading[size].desktop.height,
    fontWeight: vars.heading[size].desktop.weight,
  },
  responsiveStyle({
    mobile: {
      fontSize: vars.heading[size].mobile.size,
      lineHeight: vars.heading[size].mobile.height,
      fontWeight: vars.heading[size].mobile.weight,
    },
    tablet: {
      fontSize: vars.heading[size].tablet.size,
      lineHeight: vars.heading[size].tablet.height,
      fontWeight: vars.heading[size].tablet.weight,
    },
  }),
];

export const heading = recipe({
  base: {
    color: vars.heading.color,
    margin: 0,
  },
  variants: {
    level: {
      1: sizeStyle(1),
      2: sizeStyle(2),
      3: sizeStyle(3),
    },
  },
});
