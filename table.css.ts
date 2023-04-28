import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const table = style({
  borderSpacing: 0,
  borderCollapse: "collapse",
  width: "inherit",
});

export const th = style({
  color: vars.text.color.strong,
  fontWeight: vars.font.medium.fontWeight,
  margin: 0,
  paddingTop: vars.spacing.xsmall.desktop,
  paddingBottom: vars.spacing.xsmall.desktop,
  paddingLeft: vars.spacing.small.desktop,
  paddingRight: vars.spacing.small.desktop,
  textAlign: "start",
});

export const td = style({
  borderBottom: `${vars.border.xsmall.desktop.width} solid ${vars.color.border.weak}`,
  margin: 0,
  paddingTop: vars.spacing.xsmall.desktop,
  paddingBottom: vars.spacing.xsmall.desktop,
  paddingLeft: vars.spacing.small.desktop,
  paddingRight: vars.spacing.small.desktop,
  textAlign: "start",
});
