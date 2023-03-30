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

const sizeStyle = (size: "xsmall" | "small" | "medium" | "large" | "xlarge") => [
  {
    fontSize: vars.text[size].mobile.size,
    lineHeight: vars.text[size].mobile.height,
    fontWeight: vars.text[size].mobile.weight,
  },
  responsiveStyle({
    desktop: {
      fontSize: vars.text[size].desktop.size,
      lineHeight: vars.text[size].desktop.height,
      fontWeight: vars.text[size].desktop.weight,
    },
    tablet: {
      fontSize: vars.text[size].tablet.size,
      lineHeight: vars.text[size].tablet.height,
      fontWeight: vars.text[size].tablet.weight,
    },
  }),
];

export const text = recipe({
  base: {
    color: vars.text.color.normal,
    margin: 0, // for paragraph
  },
  variants: {
    color: {
      normal: { color: vars.text.color.normal },
      strong: { color: vars.text.color.strong },
      weak: { color: vars.text.color.weak },
    },
    size: {
      xsmall: sizeStyle("xsmall"),
      small: sizeStyle("small"),
      medium: sizeStyle("medium"),
      large: sizeStyle("large"),
      xlarge: sizeStyle("xlarge"),
    },
    level: {
      1: sizeStyle("xlarge"),
      2: sizeStyle("large"),
      3: sizeStyle("medium"),
    },
  },
});
