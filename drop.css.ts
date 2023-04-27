import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const drop = style({
  position: 'absolute',
  zIndex: vars.drop.zIndex,
  background: vars.drop.background,
  minWidth: '100%',
});
