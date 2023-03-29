import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "grommet-exp-tokens";
import { vars } from "./theme.css";

export const button = recipe({
  base: {
    background: "none",
    borderRadius: vars.radius.full,
    boxSizing: "border-box",
    color: vars.color.text.normal,
    fontFamily: vars.font.family,
    fontWeight: vars.font.weight.bold,
    fontSize: vars.text.medium.desktop.size,
    lineHeight: vars.text.medium.desktop.size,
    selectors: {
      [`&:hover`]: {
        cursor: `pointer`,
      },
    },
  },

  variants: {
    kind: {
      default: {
        borderRadius: "2em",
        borderStyle: "none",
        color: vars.color.text.strong,
        fontWeight: vars.font.weight.bold,
        ":hover": {
          backgroundColor: vars.color.background.contrast,
          color: undefined,
        },
      },
      secondary: {
        borderWidth: vars.stroke.weight.small,
        borderColor: vars.color.brand,
        borderStyle: `solid`,
      },
      primary: {
        background: vars.color.brand,
        border: `none`,
        color: `#FFF`,
      },
    },
    size: {
      small: {
        paddingLeft: vars.spacing.medium,
        paddingRight: vars.spacing.medium,
        paddingTop: vars.spacing.xsmall,
        paddingBottom: vars.spacing.xsmall,
        fontSize: tokens[`font.size.text.small`],
        lineHeight: tokens[`font.height.text.small`],
      },
      medium: {
        paddingLeft: vars.spacing.medium,
        paddingRight: vars.spacing.medium,
        paddingTop: vars.spacing.xsmall,
        paddingBottom: vars.spacing.xsmall,
      },
      large: {
        paddingLeft: vars.spacing.medium,
        paddingRight: vars.spacing.medium,
        paddingTop: vars.spacing.small,
        paddingBottom: vars.spacing.small,
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
