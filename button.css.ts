import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "grommet-exp-tokens";
import { vars } from "./theme.css";

export const button = recipe({
  base: {
    background: "none",
    borderRadius: vars.radius.full,
    color: vars.color.text.normal,
    fontWeight: vars.font.weight.bold,
    fontSize: vars.font.size.text.medium,
    lineHeight: vars.font.height.text.medium,
    selectors: {
      [`&:hover`]: {
        cursor: `pointer`,
      },
    },
  },

  variants: {
    kind: {
      default: {},
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
      true: {},
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
