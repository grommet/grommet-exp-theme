import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { tokens } from "grommet-exp-tokens";

const base = {
  // breakpoints
  breakpoints: {
    tablet: `${tokens["breakpoints.tablet"]}`,
    desktop: `${tokens["breakpoints.desktop"]}`,
  },
  color: {
    brand: `${tokens["color.brand"]}`,
  },
  // typography
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
    color: `${tokens["color.text.strong"]}`,
    height: `${tokens["heading.height"]}`,
    1: {
      mobile: {
        size: `${tokens["heading.1.mobile.size"]}`,
        weight: `${tokens["heading.1.mobile.weight"]}`,
      },
      tablet: {
        size: `${tokens["heading.1.tablet.size"]}`,
        weight: `${tokens["heading.1.tablet.weight"]}`,
      },
      desktop: {
        size: `${tokens["heading.1.desktop.size"]}`,
        weight: `${tokens["heading.1.desktop.weight"]}`,
      },
    },
    2: {
      mobile: {
        size: `${tokens["heading.2.mobile.size"]}`,
        weight: `${tokens["heading.2.mobile.weight"]}`,
      },
      tablet: {
        size: `${tokens["heading.2.tablet.size"]}`,
        weight: `${tokens["heading.2.tablet.weight"]}`,
      },
      desktop: {
        size: `${tokens["heading.2.desktop.size"]}`,
        weight: `${tokens["heading.2.desktop.weight"]}`,
      },
    },
    3: {
      mobile: {
        size: `${tokens["heading.3.mobile.size"]}`,
        weight: `${tokens["heading.3.mobile.weight"]}`,
      },
      tablet: {
        size: `${tokens["heading.3.tablet.size"]}`,
        weight: `${tokens["heading.3.tablet.weight"]}`,
      },
      desktop: {
        size: `${tokens["heading.3.desktop.size"]}`,
        weight: `${tokens["heading.3.desktop.weight"]}`,
      },
    },
  },
  text: {
    height: `${tokens["text.height"]}`,
    xsmall: {
      desktop: {
        size: `${tokens["text.xsmall.desktop.size"]}`,
        weight: `${tokens["text.xsmall.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.xsmall.tablet.size"]}`,
        weight: `${tokens["text.xsmall.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.xsmall.mobile.size"]}`,
        weight: `${tokens["text.xsmall.mobile.weight"]}`,
      },
      height: `${tokens["text.xsmall.height"]}`,
      size: `${tokens["text.xsmall.size"]}`,
      weight: `${tokens["text.xsmall.weight"]}`,
    },
    small: {
      desktop: {
        size: `${tokens["text.small.desktop.size"]}`,
        weight: `${tokens["text.small.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.small.tablet.size"]}`,
        weight: `${tokens["text.small.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.small.mobile.size"]}`,
        weight: `${tokens["text.small.mobile.weight"]}`,
      },
      height: `${tokens["text.small.height"]}`,
      size: `${tokens["text.small.size"]}`,
      weight: `${tokens["text.small.weight"]}`,
    },
    medium: {
      desktop: {
        size: `${tokens["text.medium.desktop.size"]}`,
        weight: `${tokens["text.medium.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.medium.tablet.size"]}`,
        weight: `${tokens["text.medium.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.medium.tablet.size"]}`,
        weight: `${tokens["text.medium.tablet.weight"]}`,
      },
      height: `${tokens["text.medium.height"]}`,
      size: `${tokens["text.medium.size"]}`,
      weight: `${tokens["text.medium.weight"]}`,
    },
    large: {
      desktop: {
        size: `${tokens["text.large.desktop.size"]}`,
        weight: `${tokens["text.large.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.large.tablet.size"]}`,
        weight: `${tokens["text.large.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.large.mobile.size"]}`,
        weight: `${tokens["text.large.mobile.weight"]}`,
      },
      height: `${tokens["text.large.height"]}`,
      size: `${tokens["text.large.size"]}`,
      weight: `${tokens["text.large.weight"]}`,
    },
    xlarge: {
      desktop: {
        size: `${tokens["text.xlarge.desktop.size"]}`,
        weight: `${tokens["text.xlarge.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.xlarge.tablet.size"]}`,
        weight: `${tokens["text.xlarge.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.xlarge.mobile.size"]}`,
        weight: `${tokens["text.xlarge.mobile.weight"]}`,
      },
      height: `${tokens["text.xlarge.height"]}`,
      size: `${tokens["text.xlarge.size"]}`,
      weight: `${tokens["text.xlarge.weight"]}`,
    },
    color: {
      normal: `${tokens["color.text"]}`,
      weak: `${tokens["color.text.weak"]}`,
      strong: `${tokens["color.text.strong"]}`,
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

  elevation: {
    small: `${tokens["elevation.small"]}`,
    medium: `${tokens["elevation.medium"]}`,
    large: `${tokens["elevation.large"]}`,
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
    width: `${tokens["stroke.weight.xsmall"]}`,
  },

  // icon
  icon: {
    small: `${tokens["icon.small"]}`,
    medium: `${tokens["icon.medium"]}`,
    large: `${tokens["icon.large"]}`,
    xlarge: `${tokens["icon.xlarge"]}`,
  },

  // content
  content: {
    small: `${tokens["content.small"]}`,
    medium: `${tokens["content.medium"]}`,
    large: `${tokens["content.large"]}`,
    xlarge: `${tokens["content.xlarge"]}`,
  },

  // page
  page: {
    narrow: {
      max: `${tokens["page.narrow.max"]}`,
    },
    wide: {
      max: `${tokens["page.wide.max"]}`,
    },
  },
};

export const vars = createThemeContract(base);

export const theme = createTheme(vars, base);
