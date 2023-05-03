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
    borderBottom: `${vars.tab.borderWidth} solid transparent`,
    color: vars.tab.color,
    paddingLeft: vars.button.medium.paddingLeft,
    paddingRight: vars.button.medium.paddingRight,
    paddingTop: vars.button.medium.paddingTop,
    paddingBottom: vars.button.medium.paddingBottom,
    fontFamily: "inherit",
    fontSize: vars.text.medium.desktop.fontSize,
    lineHeight: vars.text.lineHeight,
    ":hover": {
      cursor: `pointer`,
      borderColor: vars.tab.hover.borderColor,
    },
  },
  variants: {
    selected: {
      true: {
        color: vars.tab.selected.color,
        fontWeight: vars.tab.selected.fontWeight,
        borderColor: vars.tab.selected.borderColor,
      },
    },
  },
});
