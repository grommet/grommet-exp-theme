import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const box = recipe({
  base: {
    display: "flex",
    boxSizing: "border-box",
  },
  variants: {
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      stretch: { alignItems: "stretch" },
      end: { alignItems: "flex-end" },
    },
    background: {
      normal: { backgroundColor: vars.background.normal },
      back: { backgroundColor: vars.background.back },
      front: { backgroundColor: vars.background.front },
      contrast: { backgroundColor: vars.background.contrast },
    },
    border: {
      true: {
        border: `${vars.border.width} solid ${vars.border.normal}`,
      },
      false: { border: "none" },
      top: {
        borderTop: `${vars.border.width} solid ${vars.border.normal}`,
      },
      bottom: {
        borderBottom: `${vars.border.width} solid ${vars.border.normal}`,
      },
    },
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
    elevation: {
      small: { boxShadow: vars.elevation.small },
      medium: { boxShadow: vars.elevation.medium },
      large: { boxShadow: vars.elevation.large },
      none: { boxShadow: "none" },
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
      small: { height: vars.content.small },
      medium: { height: vars.content.medium },
      large: { height: vars.content.large },
      xlarge: { height: vars.content.xlarge },
      none: { height: "initial" },
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
    marginHorizontal: {
      small: {
        marginInlineStart: vars.spacing.small,
        marginInlineEnd: vars.spacing.small,
      },
      medium: {
        marginInlineStart: vars.spacing.medium,
        marginInlineEnd: vars.spacing.medium,
      },
      large: {
        marginInlineStart: vars.spacing.large,
        marginInlineEnd: vars.spacing.large,
      },
      none: { marginInlineStart: 0, marginInlineEnd: 0 },
    },
    marginVertical: {
      small: {
        marginTop: vars.spacing.small,
        marginBottom: vars.spacing.small,
      },
      medium: {
        marginTop: vars.spacing.medium,
        marginBottom: vars.spacing.medium,
      },
      large: {
        marginTop: vars.spacing.large,
        marginBottom: vars.spacing.large,
      },
      none: { marginTop: 0, marginBottom: 0 },
    },
    marginTop: {
      small: { marginTop: vars.spacing.small },
      medium: { marginTop: vars.spacing.medium },
      large: { marginTop: vars.spacing.large },
      none: { marginTop: 0 },
    },
    marginBottom: {
      small: { marginBottom: vars.spacing.small },
      medium: { marginBottom: vars.spacing.medium },
      large: { marginBottom: vars.spacing.large },
      none: { marginBottom: 0 },
    },
    marginStart: {
      small: { marginInlineStart: vars.spacing.small },
      medium: { marginInlineStart: vars.spacing.medium },
      large: { marginInlineStart: vars.spacing.large },
      none: { marginInlineStart: 0 },
    },
    marginEnd: {
      small: { marginInlineEnd: vars.spacing.small },
      medium: { marginInlineEnd: vars.spacing.medium },
      large: { marginInlineEnd: vars.spacing.large },
      none: { marginInlineEnd: 0 },
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
    padBottom: {
      small: { paddingBottom: vars.spacing.small },
      medium: { paddingBottom: vars.spacing.medium },
      large: { paddingBottom: vars.spacing.large },
      none: { paddingBottom: 0 },
    },
    padStart: {
      small: { paddingInlineStart: vars.spacing.small },
      medium: { paddingInlineStart: vars.spacing.medium },
      large: { paddingInlineStart: vars.spacing.large },
      none: { paddingInlineStart: 0 },
    },
    padEnd: {
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
      small: { width: vars.content.small },
      medium: { width: vars.content.medium },
      large: { width: vars.content.large },
      xlarge: { width: vars.content.xlarge },
      none: { width: "initial" },
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
