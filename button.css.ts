import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const button = recipe({
  base: {
    background: "none",
    borderRadius: "2em",
    boxSizing: "border-box",
    color: vars.text.color.strong,
    fontFamily: vars.font.family,
    fontWeight: vars.text.weight.bold,
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
          backgroundColor: vars.background.contrast,
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
        paddingLeft: vars.spacing.small,
        paddingRight: vars.spacing.small,
        paddingTop: vars.spacing.xsmall,
        paddingBottom: vars.spacing.xsmall,
        fontSize: vars.text.xsmall.size,
        lineHeight: vars.text.small.height,
      },
      small: {
        paddingLeft: vars.spacing.medium,
        paddingRight: vars.spacing.medium,
        paddingTop: vars.spacing.xsmall,
        paddingBottom: vars.spacing.xsmall,
        fontSize: vars.text.small.size,
        lineHeight: vars.text.small.height,
      },
      medium: {
        paddingLeft: vars.spacing.medium,
        paddingRight: vars.spacing.medium,
        paddingTop: vars.spacing.xsmall,
        paddingBottom: vars.spacing.xsmall,
        fontSize: "19px",
        lineHeight: vars.text.medium.height,
      },
      large: {
        paddingLeft: vars.spacing.medium,
        paddingRight: vars.spacing.medium,
        paddingTop: vars.spacing.small,
        paddingBottom: vars.spacing.small,
        fontSize: vars.text.large.size,
        lineHeight: vars.text.large.height,
      },
    },
    iconOnly: {
      true: {
        padding: vars.spacing.xsmall,
        lineHeight: 0,
      },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        iconOnly: true,
        size: `medium`,
      },
      style: {
        padding: vars.spacing.xsmall,
      },
    },
  ],

  defaultVariants: {
    kind: `default`,
    size: `medium`,
  },
});
