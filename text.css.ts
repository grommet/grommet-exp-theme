import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

const xsmall = {
  fontSize: `${vars.text.xsmall.size}`,
  fontWeight: `${vars.font.weight.regular}`,
};
const small = {
  fontSize: `${vars.text.small.size}`,
  fontWeight: `${vars.font.weight.regular}`,
};
const medium = {
  fontSize: `${vars.text.medium.size}`,
  fontWeight: `${vars.font.weight.regular}`,
};
const large = {
  fontSize: `${vars.text.large.size}`,
  fontWeight: `${vars.font.weight.light}`,
};
const xlarge = {
  fontSize: `${vars.text.xlarge.size}`,
  fontWeight: `${vars.font.weight.light}`,
};

export const text = recipe({
  base: {
    color: vars.text.color.normal,
    lineHeight: vars.text.height,
    margin: 0, // for paragraph
  },
  variants: {
    color: {
      normal: { color: vars.text.color.normal },
      strong: { color: vars.text.color.strong },
      weak: { color: vars.text.color.weak },
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
  },
});
