import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { responsiveStyle } from "./utils";

const sizeStyle = (size: "xsmall" | "small" | "medium" | "large") => [
  {
    paddingLeft: vars.button[size].paddingLeft,
    paddingRight: vars.button[size].paddingRight,
    paddingTop: vars.button[size].paddingTop,
    paddingBottom: vars.button[size].paddingBottom,
    fontSize: vars.button[size].mobile.fontSize,
    lineHeight: vars.text.lineHeight,
  },
  responsiveStyle({
    desktop: {
      fontSize: vars.button[size].desktop.fontSize,
      lineHeight: size === 'medium' ? vars.button.medium.desktop.lineHeight : vars.text.lineHeight,
    },
    tablet: {
      fontSize: vars.button[size].tablet.fontSize,
    },
  }),
];

const rounded = {
  borderRadius: "2em",
  color: vars.text.color.strong,
  fontWeight: vars.font.bold.fontWeight,
};

export const button = recipe({
  base: {
    background: "none",
    boxSizing: "border-box",
    borderRadius: 0,
    color: "inherit",
    fontFamily: "inherit",
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
        color: vars.button.primary.color,
        ":hover": {
          backgroundColor: vars.button.primary.hover.backgroundColor,
        },
      },
      nav: {
        borderRadius: vars.radius.full,
        borderStyle: "none",
        color: vars.text.color.strong,
        textAlign: "start",
        ":hover": {
          backgroundColor: vars.button.hover.background,
        },
      },
      plain: {
        borderStyle: "none",
        ":hover": {
          backgroundColor: vars.button.hover.background,
          color: "inherit",
        },
      },
    },
    size: {
      xsmall: sizeStyle("xsmall"),
      small: sizeStyle("small"),
      medium: sizeStyle("medium"),
      large: sizeStyle("large"),
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
    selected: {
      true: {
        background: vars.button.selected.background,
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
        kind: "nav",
        active: true,
      },
      style: {
        fontWeight: vars.font.medium.fontWeight,
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
        ":hover": {
          borderWidth: `${vars.button.secondary.hover.borderWidth}`,
          paddingLeft: `calc(${vars.button.medium.paddingLeft} - ${vars.button.secondary.hover.borderWidth})`,
          paddingRight: `calc(${vars.button.medium.paddingRight} - ${vars.button.secondary.hover.borderWidth})`,
          paddingTop: `calc(${vars.button.medium.paddingTop} - ${vars.button.secondary.hover.borderWidth})`,
          paddingBottom: `calc(${vars.button.medium.paddingBottom} - ${vars.button.secondary.hover.borderWidth})`,
        },
      },
    },
    {
      variants: {
        kind: "plain",
        size: "medium",
      },
      style: {
        padding: 0,
      },
    },
  ],

  defaultVariants: {
    kind: `default`,
    size: `medium`,
  },
});
