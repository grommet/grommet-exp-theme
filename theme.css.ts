import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { tokens } from "grommet-exp-tokens";

const commonVars = {
  spacing: {
    "3xsmall": `${tokens["spacing.3xsmall"]}`,
    "2xsmall": `${tokens["spacing.2xsmall"]}`,
    xsmall: `${tokens["spacing.xsmall"]}`,
    small: `${tokens["spacing.small"]}`,
    medium: `${tokens["spacing.medium"]}`,
    large: `${tokens["spacing.large"]}`,
    xlarge: `${tokens["spacing.xlarge"]}`,
  },
  radius: {
    xsmall: `${tokens["radius.xsmall"]}`,
    small: `${tokens["radius.small"]}`,
    medium: `${tokens["radius.medium"]}`,
    large: `${tokens["radius.large"]}`,
    xlarge: `${tokens["radius.xlarge"]}`,
    full: `${tokens["radius.full"]}`,
  },
  stroke: {
    weight: {
      xsmall: `${tokens["stroke.weight.xsmall"]}`,
      small: `${tokens["stroke.weight.small"]}`,
      medium: `${tokens["stroke.weight.medium"]}`,
      large: `${tokens["stroke.weight.large"]}`,
      xlarge: `${tokens["stroke.weight.xlarge"]}`,
    },
  },
  font: {
    weight: {
      light: `${tokens["font.weight.light"]}`,
      regular: `${tokens["font.weight.regular"]}`,
      medium: `${tokens["font.weight.medium"]}`,
      semibold: `${tokens["font.weight.semibold"]}`,
      bold: `${tokens["font.weight.bold"]}`,
      black: `${tokens["font.weight.black"]}`,
    },
    height: {
      text: {
        small: `${tokens["font.height.text.small"]}`,
        medium: `${tokens["font.height.text.medium"]}`,
      },
    },
    size: {
      text: {
        small: `${tokens["font.size.text.small"]}`,
        medium: `${tokens["font.size.text.medium"]}`,
      },
    },
  },
};

export const vars = createThemeContract({
  color: {
    text: ``,
    heading: ``,
    brand: ``,
  },
  ...commonVars,
});

export const lightThemeClass = createTheme(vars, {
  color: {
    text: `#333`,
    heading: `#222`,
    brand: `${tokens[`color.brand`]}`,
  },
  ...commonVars,
});