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

const sizeStyle = (size: "small" | "medium" | "large" | "xlarge") => [
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

// const text5xl = sizeStyle("5xl");
// const text4xl = sizeStyle("4xl");
// const text3xl = sizeStyle("3xl");
// const text2xl = sizeStyle("2xl");
const textXlarge = sizeStyle("xlarge");
const textLarge = sizeStyle("large");
const textMedium = sizeStyle("medium");
const textSmall = sizeStyle("small");
// const textXsmall = sizeStyle("xsmall");

// if it's going to be themed, it should be themed in the tokens
// push it up

export const text = recipe({
  base: {
    color: `${vars.color.text.normal}`,
    margin: 0, // for paragraph
  },
  variants: {
    color: {
      normal: { color: `${vars.color.text.normal}` },
      strong: { color: `${vars.color.text.strong}` },
      weak: { color: `${vars.color.text.weak}` },
    },
    size: {
      small: textSmall,
      medium: textMedium,
      large: textLarge,
      xlarge: textXlarge,
    },
    level: {
      1: textXlarge,
      2: textLarge,
      3: textMedium,
    },
  },
});
