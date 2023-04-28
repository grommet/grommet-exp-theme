import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const input = style({
  boxSizing: "border-box",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  appearance: "none",
  background: "transparent",
  color: vars.input.value.color,
  fontWeight: vars.input.value.fontWeight,
  width: "100%",
  paddingTop: vars.input.paddingTop,
  paddingBottom: vars.input.paddingBottom,
  paddingLeft: vars.input.paddingLeft,
  paddingRight: vars.input.paddingRight,
  borderStyle: "solid",
  borderWidth: `${vars.input.borderSize.width}`,
  borderColor: `${vars.input.borderColor.default}`,
  borderRadius: `${vars.input.borderRadius}`,
  "::before": {
    boxSizing: "border-box",
  },
  "::after": {
    boxSizing: "border-box",
  },
  ":hover": {
    cursor: "pointer",
  },
});
