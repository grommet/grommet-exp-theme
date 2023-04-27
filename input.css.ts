import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const input = style({
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  appearance: 'none',
  background: 'transparent',
  color: vars.input.value.color,
  fontWeight: vars.input.value.fontWeight,
  width: '100%',
  padding: `${vars.input.padding}`,
  borderStyle: 'solid',
  borderWidth: `${vars.input.borderSize.width}`,
  borderColor: `${vars.input.borderColor.default}`,
  borderRadius: `${vars.input.borderRadius}`,
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },
});
