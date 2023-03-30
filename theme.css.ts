import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { tokens } from "grommet-exp-tokens";

const base = {
  // typography
  font: {
    family: `${tokens["font.family"]}`,
    fallback: `${tokens["font.fallback"]}`,
    // url: {
    //   light: `${tokens["font.url.light"]}`,
    // },
  },
  text: {
    xsmall: {
      desktop: {
        size: `${tokens["text.xsmall.desktop.size"]}`,
        height: `${tokens["text.xsmall.desktop.height"]}`,
        weight: `${tokens["text.xsmall.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.xsmall.tablet.size"]}`,
        height: `${tokens["text.xsmall.tablet.height"]}`,
        weight: `${tokens["text.xsmall.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.xsmall.mobile.size"]}`,
        height: `${tokens["text.xsmall.mobile.height"]}`,
        weight: `${tokens["text.xsmall.mobile.weight"]}`,
      },
    },
    small: {
      desktop: {
        size: `${tokens["text.small.desktop.size"]}`,
        height: `${tokens["text.small.desktop.height"]}`,
        weight: `${tokens["text.small.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.small.tablet.size"]}`,
        height: `${tokens["text.small.tablet.height"]}`,
        weight: `${tokens["text.small.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.small.mobile.size"]}`,
        height: `${tokens["text.small.mobile.height"]}`,
        weight: `${tokens["text.small.mobile.weight"]}`,
      },
    },
    medium: {
      desktop: {
        size: `${tokens["text.medium.desktop.size"]}`,
        height: `${tokens["text.medium.desktop.height"]}`,
        weight: `${tokens["text.medium.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.medium.tablet.size"]}`,
        height: `${tokens["text.medium.tablet.height"]}`,
        weight: `${tokens["text.medium.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.medium.mobile.size"]}`,
        height: `${tokens["text.medium.mobile.height"]}`,
        weight: `${tokens["text.medium.mobile.weight"]}`,
      },
    },
    large: {
      desktop: {
        size: `${tokens["text.large.desktop.size"]}`,
        height: `${tokens["text.large.desktop.height"]}`,
        weight: `${tokens["text.large.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.large.tablet.size"]}`,
        height: `${tokens["text.large.tablet.height"]}`,
        weight: `${tokens["text.large.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.large.mobile.size"]}`,
        height: `${tokens["text.large.mobile.height"]}`,
        weight: `${tokens["text.large.mobile.weight"]}`,
      },
    },
    xlarge: {
      desktop: {
        size: `${tokens["text.xlarge.desktop.size"]}`,
        height: `${tokens["text.xlarge.desktop.height"]}`,
        weight: `${tokens["text.xlarge.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["text.xlarge.tablet.size"]}`,
        height: `${tokens["text.xlarge.tablet.height"]}`,
        weight: `${tokens["text.xlarge.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["text.xlarge.mobile.size"]}`,
        height: `${tokens["text.xlarge.mobile.height"]}`,
        weight: `${tokens["text.xlarge.mobile.weight"]}`,
      },
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
  heading: {
    1: {
      desktop: {
        size: `${tokens["heading.1.desktop.size"]}`,
        height: `${tokens["heading.1.desktop.height"]}`,
        weight: `${tokens["heading.1.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["heading.1.tablet.size"]}`,
        height: `${tokens["heading.1.tablet.height"]}`,
        weight: `${tokens["heading.1.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["heading.1.mobile.size"]}`,
        height: `${tokens["heading.1.mobile.height"]}`,
        weight: `${tokens["heading.1.mobile.weight"]}`,
      },
    },
    2: {
      desktop: {
        size: `${tokens["heading.2.desktop.size"]}`,
        height: `${tokens["heading.2.desktop.height"]}`,
        weight: `${tokens["heading.2.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["heading.2.tablet.size"]}`,
        height: `${tokens["heading.2.tablet.height"]}`,
        weight: `${tokens["heading.2.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["heading.2.mobile.size"]}`,
        height: `${tokens["heading.2.mobile.height"]}`,
        weight: `${tokens["heading.2.mobile.weight"]}`,
      },
    },
    3: {
      desktop: {
        size: `${tokens["heading.3.desktop.size"]}`,
        height: `${tokens["heading.3.desktop.height"]}`,
        weight: `${tokens["heading.3.desktop.weight"]}`,
      },
      tablet: {
        size: `${tokens["heading.3.tablet.size"]}`,
        height: `${tokens["heading.3.tablet.height"]}`,
        weight: `${tokens["heading.3.tablet.weight"]}`,
      },
      mobile: {
        size: `${tokens["heading.3.mobile.size"]}`,
        height: `${tokens["heading.3.mobile.height"]}`,
        weight: `${tokens["heading.3.mobile.weight"]}`,
      },
    },
    color: `${tokens["color.text"]}`,
  },
  // icon
  icon: {
    small: `${tokens["size.icon.small"]}`,
    medium: `${tokens["size.icon.medium"]}`,
    large: `${tokens["size.icon.large"]}`,
    xlarge: `${tokens["size.icon.xlarge"]}`,
  },
  // content
  content: {
    small: `${tokens["size.content.small"]}`,
    medium: `${tokens["size.content.medium"]}`,
    large: `${tokens["size.content.large"]}`,
    xlarge: `${tokens["size.content.xlarge"]}`,
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
  },
  // page
  page: {
    narrow: {
      max: `${tokens["size.page.max.narrow"]}`,
    },
    wide: {
      max: `${tokens["size.page.max.wide"]}`,
    },
  },
};

export const vars = createThemeContract(base);

export const theme = createTheme(vars, base);
