import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

const rounded = {
  borderRadius: "2em",
  color: vars.text.color.strong,
  fontFamily: vars.font.fontFamily,
  fontWeight: vars.font.bold.fontWeight,
};

export const button = recipe({
  base: {
    background: "none",
    boxSizing: "border-box",
    borderRadius: 0,
    color: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    selectors: {
      [`&:hover`]: {
        cursor: `pointer`,
      },
    },
  },

  variants: {
    kind: {
      default: {
        ...rounded,
        borderStyle: "none",
        ":hover": {
          backgroundColor: vars.button.hover.background,
          color: 'inherit',
        },
      },
      secondary: {
        ...rounded,
        borderWidth: vars.button.secondary.borderWidth.desktop.width,
        borderColor: vars.button.secondary.borderColor,
        borderStyle: `solid`,
      },
      primary: {
        ...rounded,
        background: vars.button.primary.background,
        border: `none`,
        color: `#FFF`,
      },
      nav: {
        borderStyle: "none",
        textAlign: "start",
        borderRadius: vars.radius.small,
        ":hover": {
          backgroundColor: vars.button.hover.background,
          color: 'inherit',
        },
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
        paddingLeft: vars.button.small.paddingLeft,
        paddingRight: vars.button.small.paddingRight,
        paddingTop: vars.button.small.paddingTop,
        paddingBottom: vars.button.small.paddingBottom,
        fontSize: vars.text.small.desktop.fontSize,
        lineHeight: vars.text.lineHeight,
      },
      medium: {
        paddingLeft: vars.button.medium.paddingLeft,
        paddingRight: vars.button.medium.paddingRight,
        paddingTop: vars.button.medium.paddingTop,
        paddingBottom: vars.button.medium.paddingBottom,
        fontSize: "19px",
        lineHeight: vars.text.lineHeight,
      },
      large: {
        paddingLeft: vars.button.large.paddingLeft,
        paddingRight: vars.button.large.paddingRight,
        paddingTop: vars.button.large.paddingTop,
        paddingBottom: vars.button.large.paddingBottom,
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
        background: vars.button.active.background,
      },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        iconOnly: true,
        size: "medium",
      },
      style: {
        padding: vars.button.medium.iconOnly.padding,
      },
    },
    {
      variants: {
        kind: "secondary",
        size: "medium",
      },
      style: {
        paddingLeft: `calc(${vars.button.medium.paddingLeft} - ${vars.button.secondary.borderWidth.desktop.width})`,
        paddingRight: `calc(${vars.button.medium.paddingRight} - ${vars.button.secondary.borderWidth.desktop.width})`,
        paddingTop: `calc(${vars.button.medium.paddingTop} - ${vars.button.secondary.borderWidth.desktop.width})`,
        paddingBottom: `calc(${vars.button.medium.paddingBottom} - ${vars.button.secondary.borderWidth.desktop.width})`,
      },
    },
  ],

  defaultVariants: {
    kind: `default`,
    size: `medium`,
  },
});
