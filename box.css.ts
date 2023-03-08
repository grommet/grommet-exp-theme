import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { background } from "./background.css";

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
    background,
    border: {
      true: {
        border: `${vars.stroke.weight.medium} solid ${vars.color.border}`,
      },
      false: { border: "none" },
    },
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
    elevation: {
      small: { boxShadow: vars.elevation.small },
      medium: { boxShadow: vars.elevation.medium },
      large: { boxShadow: vars.elevation.large },
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
      none: { gap: 0 },
    },
    height: {
      small: { height: vars.size.content.small },
      medium: { height: vars.size.content.medium },
      large: { height: vars.size.content.large },
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
      none: { margin: 0 },
    },
    pad: {
      small: { padding: vars.spacing.small },
      medium: { padding: vars.spacing.medium },
      large: { padding: vars.spacing.large },
      none: { padding: 0 },
    },
    padHorizontal: {
      small: {
        paddingInlineStart: vars.spacing.small,
        paddingInlineEnd: vars.spacing.small,
      },
      medium: {
        paddingInlineStart: vars.spacing.medium,
        paddingInlineEnd: vars.spacing.medium,
      },
      large: {
        paddingInlineStart: vars.spacing.large,
        paddingInlineEnd: vars.spacing.large,
      },
      none: { paddingInlineStart: 0, paddingInlineEnd: 0 },
    },
    padVertical: {
      small: {
        paddingTop: vars.spacing.small,
        paddingBottom: vars.spacing.small,
      },
      medium: {
        paddingTop: vars.spacing.medium,
        paddingBottom: vars.spacing.medium,
      },
      large: {
        paddingTop: vars.spacing.large,
        paddingBottom: vars.spacing.large,
      },
      none: { paddingTop: 0, paddingBottom: 0 },
    },
    padTop: {
      small: { paddingTop: vars.spacing.small },
      medium: { paddingTop: vars.spacing.medium },
      large: { paddingTop: vars.spacing.large },
      none: { paddingTop: 0 },
    },
    paddingBottom: {
      small: { paddingBottom: vars.spacing.small },
      medium: { paddingBottom: vars.spacing.medium },
      large: { paddingBottom: vars.spacing.large },
      none: { paddingBottom: 0 },
    },
    paddingStart: {
      small: { paddingInlineStart: vars.spacing.small },
      medium: { paddingInlineStart: vars.spacing.medium },
      large: { paddingInlineStart: vars.spacing.large },
      none: { paddingInlineStart: 0 },
    },
    paddingEnd: {
      small: { paddingInlineEnd: vars.spacing.small },
      medium: { paddingInlineEnd: vars.spacing.medium },
      large: { paddingInlineEnd: vars.spacing.large },
      none: { paddingInlineEnd: 0 },
    },
    round: {
      small: { borderRadius: vars.radius.small },
      medium: { borderRadius: vars.radius.medium },
      large: { borderRadius: vars.radius.large },
      none: { padding: 0 },
    },
    width: {
      small: { width: vars.size.content.small },
      medium: { width: vars.size.content.medium },
      large: { width: vars.size.content.large },
    },
    wrap: {
      true: { flexWrap: "wrap" },
      false: { flexWrap: "nowrap" },
    },
  },
  defaultVariants: {
    align: "stretch",
    direction: "column",
    justify: "start",
  },
});
