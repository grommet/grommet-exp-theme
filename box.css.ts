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
    background: {
      base: { backgroundColor: vars.color.background.base },
      back: { backgroundColor: vars.color.background.back },
      front: { backgroundColor: vars.color.background.front },
      contrast: { backgroundColor: vars.color.background.contrast },
    },
    border: {
      true: { border: `${vars.stroke.weight.medium} solid ${vars.color.border}`},
      false: { border: "none" },
    },
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
    elevation: {
      small: { gap: vars.elevation.small },
      medium: { gap: vars.elevation.medium },
      large: { gap: vars.elevation.large },
    },
    flex: {
      true: { flex: "1 1 auto" },
      false: { flex: "0 0 auto" },
      grow: { flexGrow: "1 0 auto" },
      shrink: { flexShrink: "0 1 auto" },
    },
    gap: {
      small: { gap: vars.spacing.small },
      medium: { gap: vars.spacing.medium },
      large: { gap: vars.spacing.large },
    },
    height: {
      small: { padding: vars.size.content.small },
      medium: { padding: vars.size.content.medium },
      large: { padding: vars.size.content.large },
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
    round: {
      small: { borderRadius: vars.radius.small },
      medium: { borderRadius: vars.radius.medium },
      large: { borderRadius: vars.radius.large },
    },
    width: {
      small: { padding: vars.size.content.small },
      medium: { padding: vars.size.content.medium },
      large: { padding: vars.size.content.large },
    },
    wrap: {
      true: { flexWrap: "wrap" },
      false: { flexWrap: "nowrap" },
    },
  },
  defaultVariants: {
    align: 'stretch',
    direction: 'column',
    justify: 'start',
  },
});
