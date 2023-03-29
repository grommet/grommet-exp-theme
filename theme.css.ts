import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { tokens } from "grommet-exp-tokens";

const base = {
  color: {
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
    icon: {
      small: `${tokens["size.icon.small"]}`,
      medium: `${tokens["size.icon.medium"]}`,
      large: `${tokens["size.icon.large"]}`,
      xlarge: `${tokens["size.icon.xlarge"]}`,
    },
    content: {
      small: `${tokens["size.content.small"]}`,
      medium: `${tokens["size.content.medium"]}`,
      large: `${tokens["size.content.large"]}`,
      xlarge: `${tokens["size.content.xlarge"]}`,
    },
    page: {
      min: tokens["size.page.min"],
      max: {
        narrow: tokens["size.page.max.narrow"],
        wide: tokens["size.page.max.wide"],
      },
    },
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
    url: {
      light: `${tokens["font.url.light"]}`,
      regular: `${tokens["font.url.regular"]}`,
      medium: `${tokens["font.url.medium"]}`,
      semibold: `${tokens["font.url.semibold"]}`,
      bold: `${tokens["font.url.bold"]}`,
    },
    weight: {
      light: `${tokens["font.weight.light"]}`,
      regular: `${tokens["font.weight.regular"]}`,
      medium: `${tokens["font.weight.medium"]}`,
      semibold: `${tokens["font.weight.semibold"]}`,
      bold: `${tokens["font.weight.bold"]}`,
      black: `${tokens["font.weight.black"]}`,
    },
  },
  heading: {
    1: {
      mobile: {
        height: `${tokens["heading.1.mobile.height"]}`,
        size: `${tokens["heading.1.mobile.size"]}`,
        weight: `${tokens["heading.1.mobile.weight"]}`,
      },
      tablet: {
        height: `${tokens["heading.1.tablet.height"]}`,
        size: `${tokens["heading.1.tablet.size"]}`,
        weight: `${tokens["heading.1.tablet.weight"]}`,
      },
      desktop: {
        height: `${tokens["heading.1.desktop.height"]}`,
        size: `${tokens["heading.1.desktop.size"]}`,
        weight: `${tokens["heading.1.desktop.weight"]}`,
      },
    },
    2: {
      mobile: {
        height: `${tokens["heading.2.mobile.height"]}`,
        size: `${tokens["heading.2.mobile.size"]}`,
        weight: `${tokens["heading.2.mobile.weight"]}`,
      },
      tablet: {
        height: `${tokens["heading.2.tablet.height"]}`,
        size: `${tokens["heading.2.tablet.size"]}`,
        weight: `${tokens["heading.2.tablet.weight"]}`,
      },
      desktop: {
        height: `${tokens["heading.2.desktop.height"]}`,
        size: `${tokens["heading.2.desktop.size"]}`,
        weight: `${tokens["heading.2.desktop.weight"]}`,
      },
    },
    3: {
      mobile: {
        height: `${tokens["heading.3.mobile.height"]}`,
        size: `${tokens["heading.3.mobile.size"]}`,
        weight: `${tokens["heading.3.mobile.weight"]}`,
      },
      tablet: {
        height: `${tokens["heading.3.tablet.height"]}`,
        size: `${tokens["heading.3.tablet.size"]}`,
        weight: `${tokens["heading.3.tablet.weight"]}`,
      },
      desktop: {
        height: `${tokens["heading.3.desktop.height"]}`,
        size: `${tokens["heading.3.desktop.size"]}`,
        weight: `${tokens["heading.3.desktop.weight"]}`,
      },
    },
  },
  text: {
    xsmall: {
      mobile: {
        height: `${tokens["text.xsmall.mobile.height"]}`,
        size: `${tokens["text.xsmall.mobile.size"]}`,
        weight: `${tokens["text.xsmall.mobile.weight"]}`,
      },
      tablet: {
        height: `${tokens["text.xsmall.tablet.height"]}`,
        size: `${tokens["text.xsmall.tablet.size"]}`,
        weight: `${tokens["text.xsmall.tablet.weight"]}`,
      },
      desktop: {
        height: `${tokens["text.xsmall.desktop.height"]}`,
        size: `${tokens["text.xsmall.desktop.size"]}`,
        weight: `${tokens["text.xsmall.desktop.weight"]}`,
      },
    },
    small: {
      mobile: {
        height: `${tokens["text.small.mobile.height"]}`,
        size: `${tokens["text.small.mobile.size"]}`,
        weight: `${tokens["text.small.mobile.weight"]}`,
      },
      tablet: {
        height: `${tokens["text.small.tablet.height"]}`,
        size: `${tokens["text.small.tablet.size"]}`,
        weight: `${tokens["text.small.tablet.weight"]}`,
      },
      desktop: {
        height: `${tokens["text.small.desktop.height"]}`,
        size: `${tokens["text.small.desktop.size"]}`,
        weight: `${tokens["text.small.desktop.weight"]}`,
      },
    },
    medium: {
      mobile: {
        height: `${tokens["text.medium.mobile.height"]}`,
        size: `${tokens["text.medium.mobile.size"]}`,
        weight: `${tokens["text.medium.mobile.weight"]}`,
      },
      tablet: {
        height: `${tokens["text.medium.tablet.height"]}`,
        size: `${tokens["text.medium.tablet.size"]}`,
        weight: `${tokens["text.medium.tablet.weight"]}`,
      },
      desktop: {
        height: `${tokens["text.medium.desktop.height"]}`,
        size: `${tokens["text.medium.desktop.size"]}`,
        weight: `${tokens["text.medium.desktop.weight"]}`,
      },
    },
    large: {
      mobile: {
        height: `${tokens["text.large.mobile.height"]}`,
        size: `${tokens["text.large.mobile.size"]}`,
        weight: `${tokens["text.large.mobile.weight"]}`,
      },
      tablet: {
        height: `${tokens["text.large.tablet.height"]}`,
        size: `${tokens["text.large.tablet.size"]}`,
        weight: `${tokens["text.large.tablet.weight"]}`,
      },
      desktop: {
        height: `${tokens["text.large.desktop.height"]}`,
        size: `${tokens["text.large.desktop.size"]}`,
        weight: `${tokens["text.large.desktop.weight"]}`,
      },
    },
    xlarge: {
      mobile: {
        height: `${tokens["text.xlarge.mobile.height"]}`,
        size: `${tokens["text.xlarge.mobile.size"]}`,
        weight: `${tokens["text.xlarge.mobile.weight"]}`,
      },
      tablet: {
        height: `${tokens["text.xlarge.tablet.height"]}`,
        size: `${tokens["text.xlarge.tablet.size"]}`,
        weight: `${tokens["text.xlarge.tablet.weight"]}`,
      },
      desktop: {
        height: `${tokens["text.xlarge.desktop.height"]}`,
        size: `${tokens["text.xlarge.desktop.size"]}`,
        weight: `${tokens["text.xlarge.desktop.weight"]}`,
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
    },
    heading: `#222`,
    border: {
      ...base.color.border,
      normal: `${tokens[`color.border`]}`,
    },
    brand: `${tokens[`color.brand`]}`,
  },
});
