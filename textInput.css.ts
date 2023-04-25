import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const textInput = style({
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  WebkitAppearance: 'none',
  background: 'transparent',
  color: vars.input.value.color,
  fontWeight: vars.input.value.fontWeight,
  width: '100%',
  padding: `${vars.input.padding}`,
  borderWidth: `${vars.input.borderSize.width}`,
  borderColor: `${vars.input.borderColor.default}`,
});
