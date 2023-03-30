import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "grommet-exp-tokens";
import { vars } from "./theme.css";

export const button = recipe({
  base: {
    background: "none",
    borderRadius: "2em",
    boxSizing: "border-box",
    color: vars.text.color.strong,
    fontWeight: vars.text.weight.bold,
    // fontSize: vars.text.medium.desktop.size,
    // lineHeight: vars.text.medium.desktop.height,
    selectors: {
      [`&:hover`]: {
        cursor: `pointer`,
      },
    },
  },

  variants: {
    kind: {
      default: {
        borderStyle: 'none',
        ':hover': {
          backgroundColor: vars.content.background.contrast,
          color: undefined,
        },
      },
      secondary: {
        // borderWidth: vars.stroke.weight.small,
        // borderColor: vars.color.brand,
        borderStyle: `solid`,
      },
      primary: {
        // background: vars.color.brand,
        border: `none`,
        color: `#FFF`,
      },
    },
    size: {
      xsmall: {
        paddingLeft: vars.content.spacing.small,
        paddingRight: vars.content.spacing.small,
        paddingTop: vars.content.spacing.xsmall,
        paddingBottom: vars.content.spacing.xsmall,
        fontSize: vars.text.xsmall.desktop.size,
        lineHeight: vars.text.xsmall.desktop.height,
      },
      small: {
        paddingLeft: vars.content.spacing.medium,
        paddingRight: vars.content.spacing.medium,
        paddingTop: vars.content.spacing.xsmall,
        paddingBottom: vars.content.spacing.xsmall,
        fontSize: vars.text.small.desktop.size,
        lineHeight: vars.text.small.desktop.height,
      },
      medium: {
        paddingLeft: vars.content.spacing.medium,
        paddingRight: vars.content.spacing.medium,
        paddingTop: vars.content.spacing.xsmall,
        paddingBottom: vars.content.spacing.xsmall,
        fontSize: vars.text.medium.desktop.size,
        lineHeight: vars.text.medium.desktop.height,
      },
      large: {
        paddingLeft: vars.content.spacing.medium,
        paddingRight: vars.content.spacing.medium,
        paddingTop: vars.content.spacing.small,
        paddingBottom: vars.content.spacing.small,
        fontSize: vars.text.large.desktop.size,
        lineHeight: vars.text.large.desktop.height,
      },
    },
    iconOnly: {
      true: {
        padding: vars.content.spacing.xsmall,
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
        padding: vars.content.spacing.xsmall,
      },
    },
  ],

  defaultVariants: {
    kind: `default`,
    size: `medium`,
  },
});
