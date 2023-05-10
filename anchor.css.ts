import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { responsiveStyle } from "./utils";

const sizeStyle = (size: 'xsmall' | 'small' | 'medium' | 'large') => [
  {
    fontSize: vars.anchor[size].mobile.fontSize,
  },
  responsiveStyle({
    desktop: {
      fontSize: vars.anchor[size].desktop.fontSize,
    },
    tablet: {
      fontSize: vars.anchor[size].tablet.fontSize,
    },
  }),
];

export const anchor = recipe({
  base: {
    color: vars.anchor.color,
    fontWeight: vars.anchor.fontWeight,
    fontSize: "inherit",
    textDecoration: vars.anchor.textDecoration,
  },
  variants: {
    size: {
      xsmall: sizeStyle('xsmall'),
      small: sizeStyle('small'),
      medium: sizeStyle('medium'),
      large: sizeStyle('large'),
    },
  },
});

