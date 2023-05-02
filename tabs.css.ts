import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const tabsHeader = style({
  alignSelf: "start",
  borderBottom: `${vars.border.xsmall.desktop.width} solid ${vars.color.border.weak}`,
});

export const tabsButton = recipe({
  base: {
    appearance: "none",
    boxSizing: "border-box",
    background: "none",
    border: "none",
    borderBottom: `${vars.border.medium.desktop.width} solid transparent`,
    color: vars.color.text.default,
    paddingLeft: vars.button.medium.paddingLeft,
    paddingRight: vars.button.medium.paddingRight,
    paddingTop: vars.button.medium.paddingTop,
    paddingBottom: vars.button.medium.paddingBottom,
    fontFamily: "inherit",
    fontSize: vars.text.medium.desktop.fontSize,
    lineHeight: vars.text.lineHeight,
    ":hover": {
      cursor: `pointer`,
      borderColor: vars.color.border.weak,
    },
  },
  variants: {
    selected: {
      true: {
        color: vars.text.color.strong,
        fontWeight: vars.font.bold.fontWeight,
        borderColor: vars.color.background.selected,
      },
    },
  },
});
