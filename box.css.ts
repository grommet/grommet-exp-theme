import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const box = recipe({
  base: {
    display: "flex",
  },
  variants: {
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      stretch: { alignItems: "stretch" },
      end: { alignItems: "flex-end" },
    },
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
    gap: {
      small: { gap: vars.spacing.small },
      medium: { gap: vars.spacing.medium },
      large: { gap: vars.spacing.large },
    },
    justify: {
      around: { justifyContent: "space-around" },
      between: { justifyContent: "space-between" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      evenly: { justifyContent: "space-evenly" },
      start: { justifyContent: "flex-start" },
    },
    margin: {
      small: { margin: vars.spacing.small },
      medium: { margin: vars.spacing.medium },
      large: { margin: vars.spacing.large },
    },
    pad: {
      small: { padding: vars.spacing.small },
      medium: { padding: vars.spacing.medium },
      large: { padding: vars.spacing.large },
    },
  },
  defaultVariants: {
    align: 'stretch',
    direction: 'column',
    justify: 'start',
  },
});
