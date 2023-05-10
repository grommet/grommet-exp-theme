import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { responsiveStyle } from "./utils";

const sizeStyle = (
  size:
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
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
const xxlarge = sizeStyle("xxlarge");

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
      "6xl": sizeStyle("6xl"),
      "5xl": sizeStyle("5xl"),
      "4xl": sizeStyle("4xl"),
      "3xl": sizeStyle("3xl"),
      xxlarge: xxlarge,
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
