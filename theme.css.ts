import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { tokens } from "grommet-exp-tokens";

const base = {color: {
    background: {
      normal: `${tokens["color.background.base"]}`,
      back: `${tokens["color.background.back"]}`,
      front: `${tokens["color.background.front"]}`,
      contrast: `${tokens["color.background.contrast"]}`,
    },
    border: {
      normal: `${tokens["color.border"]}`,
      weak: `${tokens["color.border.weak"]}`,
      strong: `${tokens["color.border.strong"]}`,
    },
    brand: `${tokens["color.brand"]}`,
    heading: `${tokens["color.text"]}`,
    text: {
      normal: `${tokens["color.text"]}`,
      weak: `${tokens["color.text.weak"]}`,
      strong: `${tokens["color.text.strong"]}`,
    },
  },
  elevation: {
    small: `${tokens["elevation.small"]}`,
    medium: `${tokens["elevation.medium"]}`,
    large: `${tokens["elevation.large"]}`,
  },
  size: {
    content: {
      small: `${tokens["size.content.small"]}`,
      medium: `${tokens["size.content.medium"]}`,
      large: `${tokens["size.content.large"]}`,
    },
    page: {
      min: tokens["size.page.min"],
      max: {
        narrow: tokens["size.page.max.narrow"],
        wide: tokens["size.page.max.wide"],
      }
    }
  },
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
    family: `${tokens["font.family"]}`,
    fallback: `${tokens["font.fallback"]}`,
    // url: {
    //   light: `${tokens["font.url.light"]}`,
    // },
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
        large: `${tokens["font.height.text.large"]}`,
        xlarge: `${tokens["font.height.text.xlarge"]}`,
      },
    },
    size: {
      text: {
        small: `${tokens["font.size.text.small"]}`,
        medium: `${tokens["font.size.text.medium"]}`,
        large: `${tokens["font.size.text.large"]}`,
        xlarge: `${tokens["font.size.text.xlarge"]}`,
      },
    },
  },
};

export const vars = createThemeContract(base);

export const theme = createTheme(vars, {
  ...base,
  color: {
    ...base.color,
    text: {
      ...base.color.text,
      normal: `#333`,
    },
    heading: `#222`,
    border: {
      ...base.color.border,
      normal: `${tokens[`color.border`]}`,
    },
    brand: `${tokens[`color.brand`]}`,
  },
});
