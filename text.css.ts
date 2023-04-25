import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

const responsiveStyle = ({
  desktop,
  tablet,
}: {
  desktop: object;
  tablet: object;
}) => ({
  "@media": {
    "only screen and (min-width: 768px)": tablet,
    "only screen and (min-width: 1536px)": desktop,
  },
});

const sizeStyle = (
  size: "xsmall" | "small" | "medium" | "large" | "xlarge"
) => [
  {
    fontSize: vars.text[size].mobile.fontSize,
    // fontWeight: vars.text[size].mobile.fontWeight,
  },
  responsiveStyle({
    desktop: {
      fontSize: vars.text[size].desktop.fontSize,
      // fontWeight: vars.text[size].desktop.fontWeight,
    },
    tablet: {
      fontSize: vars.text[size].tablet.fontSize,
      // fontWeight: vars.text[size].tablet.fontWeight,
    },
  }),
];

const xsmall = sizeStyle("xsmall");
const small = sizeStyle("small");
const medium = sizeStyle("medium");
const large = sizeStyle("large");
const xlarge = sizeStyle("xlarge");

export const text = recipe({
  base: {
    color: vars.text.color.default,
    lineHeight: vars.text.lineHeight,
    margin: 0, // for paragraph
    maxWidth: "25em",
  },
  variants: {
    color: {
      strong: { color: vars.text.color.strong },
      weak: { color: vars.text.color.weak },
      xweak: { color: vars.text.color.xweak },
    },
    size: {
      xlarge: xlarge,
      large: large,
      medium: medium,
      small: small,
      xsmall: xsmall,
    },
    level: {
      1: xlarge,
      2: large,
      3: medium,
    },
    textAlign: {
      start: { textAlign: "left" },
      center: { textAlign: "center" },
      end: { textAlign: "right" },
    },
    weight: {
      light: {
        fontWeight: vars.font.light.fontWeight,
      },
      regular: {
        fontWeight: vars.font.regular.fontWeight,
      },
      medium: {
        fontWeight: vars.font.medium.fontWeight,
      },
      semibold: {
        fontWeight: vars.font.semibold.fontWeight,
      },
      bold: {
        fontWeight: vars.font.bold.fontWeight,
      },
    },
  },
});
