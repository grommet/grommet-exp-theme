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
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "start",
  paddingLeft: vars.spacing.medium.desktop,
  paddingRight: vars.spacing.medium.desktop,
  paddingTop: vars.spacing.xsmall.desktop,
  paddingBottom: vars.spacing.xsmall.desktop,
  ":hover": {
    backgroundColor: vars.color.background.active,
  },
});

export const activeOptionButton = style({
  backgroundColor: vars.color.background.active,
});
