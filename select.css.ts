import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const select = style({ display: "none" });

export const optionButton = style({
  appearance: "none",
  boxSizing: "border-box",
  background: "none",
  borderRadius: 0,
  border: "none",
  color: "inherit",
  fontFamily: "inherit",
  fontSize: "19px",
  lineHeight: "24px",
  fontWeight: vars.font.medium.fontWeight,
  textAlign: "start",
  paddingLeft: vars.spacing.small.desktop,
  paddingRight: vars.spacing.small.desktop,
  paddingTop: vars.spacing.xsmall.desktop,
  paddingBottom: vars.spacing.xsmall.desktop,
  ":hover": {
    backgroundColor: vars.color.background.active,
    cursor: "pointer",
  },
});

export const activeOptionButton = style({
  backgroundColor: vars.color.background.active,
});
