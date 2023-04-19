import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const button = recipe({
  base: {
    background: "none",
    borderRadius: "2em",
    boxSizing: "border-box",
    color: vars.text.color.strong,
    fontFamily: vars.font.fontFamily,
    fontWeight: vars.font.bold.fontWeight,
    selectors: {
      [`&:hover`]: {
        cursor: `pointer`,
      },
    },
  },

  variants: {
    kind: {
      default: {
        borderStyle: "none",
        ":hover": {
          backgroundColor: vars.color.background.contrast,
          color: undefined,
        },
      },
      secondary: {
        // borderWidth: vars.stroke.small,
        // borderColor: vars.color.brand,
        borderStyle: `solid`,
      },
      primary: {
        background: vars.color.brand,
        border: `none`,
        color: `#FFF`,
      },
    },
    size: {
      xsmall: {
        paddingLeft: vars.spacing.small.desktop,
        paddingRight: vars.spacing.small.desktop,
        paddingTop: vars.spacing.xsmall.desktop,
        paddingBottom: vars.spacing.xsmall.desktop,
        fontSize: vars.text.xsmall.desktop.fontSize,
        lineHeight: vars.text.lineHeight,
      },
      small: {
        paddingLeft: vars.spacing.medium.desktop,
        paddingRight: vars.spacing.medium.desktop,
        paddingTop: vars.spacing.xsmall.desktop,
        paddingBottom: vars.spacing.xsmall.desktop,
        fontSize: vars.text.small.desktop.fontSize,
        lineHeight: vars.text.lineHeight,
      },
      medium: {
        paddingLeft: vars.spacing.medium.desktop,
        paddingRight: vars.spacing.medium.desktop,
        paddingTop: vars.spacing.xsmall.desktop,
        paddingBottom: vars.spacing.xsmall.desktop,
        fontSize: "19px",
        lineHeight: vars.text.lineHeight,
      },
      large: {
        paddingLeft: vars.spacing.medium.desktop,
        paddingRight: vars.spacing.medium.desktop,
        paddingTop: vars.spacing.small.desktop,
        paddingBottom: vars.spacing.small.desktop,
        fontSize: vars.text.large.desktop.fontSize,
        lineHeight: vars.text.lineHeight,
      },
    },
    iconOnly: {
      true: {
        padding: vars.spacing.xsmall.desktop,
        lineHeight: 0,
      },
    },
    active: {
      true: {
        background: vars.color.background.contrast,
      }
    }
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        iconOnly: true,
        size: `medium`,
      },
      style: {
        padding: vars.spacing.xsmall.desktop,
      },
    },
  ],

  defaultVariants: {
    kind: `default`,
    size: `medium`,
  },
});
