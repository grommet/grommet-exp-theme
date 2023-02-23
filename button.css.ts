import { recipe } from "@vanilla-extract/recipes";
import { tokens } from "grommet-exp-tokens";

export const button = recipe({
  base: {
    borderRadius: tokens[`radius.full`],
    color: tokens[`palette.green.400`],
    fontWeight: tokens[`font.weight.bold`],
    fontSize: tokens[`font.size.text.medium`],
    lineHeight: tokens[`font.height.text.medium`],
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
        background: `none`,
        borderWidth: tokens[`stroke.weight.small`],
        borderColor: tokens[`palette.green.400`],
        borderStyle: `solid`,
      },
      primary: {
        background: tokens[`palette.green.400`],
        border: `none`,
        color: `#FFF`,
      },
    },
    size: {
      small: {
        paddingLeft: tokens[`spacing.medium`],
        paddingRight: tokens[`spacing.medium`],
        paddingTop: tokens[`spacing.xsmall`],
        paddingBottom: tokens[`spacing.xsmall`],
        fontSize: tokens[`font.size.text.small`],
      },
      medium: {
        paddingLeft: tokens[`spacing.medium`],
        paddingRight: tokens[`spacing.medium`],
        paddingTop: tokens[`spacing.xsmall`],
        paddingBottom: tokens[`spacing.xsmall`],
      },
      large: {
        paddingLeft: tokens[`spacing.medium`],
        paddingRight: tokens[`spacing.medium`],
        paddingTop: tokens[`spacing.small`],
        paddingBottom: tokens[`spacing.small`],
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
        padding: tokens[`spacing.xsmall`],
      },
    },
  ],

  defaultVariants: {
    kind: `default`,
    size: `medium`,
  },
});
