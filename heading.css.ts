import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

const responsiveStyle = ({
  desktop,
  tablet,
}: {
  desktop: any;
  tablet: any;
}) => ({
  "@media": {
    "only screen and (min-width: 768px)": tablet,
    "only screen and (min-width: 1536px)": desktop,
  },
});

const sizeStyle = (size: 1 | 2 | 3) => [
  {
    fontSize: vars.heading[size].mobile.size,
    fontWeight: vars.heading[size].mobile.weight,
  },
  responsiveStyle({
    desktop: {
      fontSize: vars.heading[size].desktop.size,
      fontWeight: vars.heading[size].desktop.weight,
    },
    tablet: {
      fontSize: vars.heading[size].tablet.size,
      fontWeight: vars.heading[size].tablet.weight,
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
