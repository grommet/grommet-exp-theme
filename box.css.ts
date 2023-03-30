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
      normal: vars.content.background.normal,
      back: vars.content.background.back,
      front: vars.content.background.front,
      contrast: vars.content.background.contrast,
    },
    border: {
      true: {
        border: `${vars.content.border.width} solid ${vars.content.border.normal}`,
      },
      false: { border: "none" },
      top: {
        borderTop: `${vars.content.border.width} solid ${vars.content.border.normal}`,
      },
      bottom: {
        borderBottom: `${vars.content.border.width} solid ${vars.content.border.normal}`,
      },
    },
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
    elevation: {
      small: { boxShadow: vars.content.elevation.small },
      medium: { boxShadow: vars.content.elevation.medium },
      large: { boxShadow: vars.content.elevation.large },
    },
    flex: {
      true: { flex: "1 1 auto" },
      false: { flex: "0 0 auto" },
      grow: { flexGrow: "1 0 auto" },
      shrink: { flexShrink: "0 1 auto" },
    },
    gap: {
      small: { gap: vars.content.spacing.small },
      medium: { gap: vars.content.spacing.medium },
      large: { gap: vars.content.spacing.large },
      none: { gap: 0 },
    },
    height: {
      small: { height: vars.content.small },
      medium: { height: vars.content.medium },
      large: { height: vars.content.large },
      xlarge: { height: vars.content.xlarge },
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
      small: { margin: vars.content.spacing.small },
      medium: { margin: vars.content.spacing.medium },
      large: { margin: vars.content.spacing.large },
      none: { margin: 0 },
    },
    marginHorizontal: {
      small: {
        marginInlineStart: vars.content.spacing.small,
        marginInlineEnd: vars.content.spacing.small,
      },
      medium: {
        marginInlineStart: vars.content.spacing.medium,
        marginInlineEnd: vars.content.spacing.medium,
      },
      large: {
        marginInlineStart: vars.content.spacing.large,
        marginInlineEnd: vars.content.spacing.large,
      },
      none: { marginInlineStart: 0, marginInlineEnd: 0 },
    },
    marginVertical: {
      small: {
        marginTop: vars.content.spacing.small,
        marginBottom: vars.content.spacing.small,
      },
      medium: {
        marginTop: vars.content.spacing.medium,
        marginBottom: vars.content.spacing.medium,
      },
      large: {
        marginTop: vars.content.spacing.large,
        marginBottom: vars.content.spacing.large,
      },
      none: { marginTop: 0, marginBottom: 0 },
    },
    marginTop: {
      small: { marginTop: vars.content.spacing.small },
      medium: { marginTop: vars.content.spacing.medium },
      large: { marginTop: vars.content.spacing.large },
      none: { marginTop: 0 },
    },
    marginBottom: {
      small: { marginBottom: vars.content.spacing.small },
      medium: { marginBottom: vars.content.spacing.medium },
      large: { marginBottom: vars.content.spacing.large },
      none: { marginBottom: 0 },
    },
    marginStart: {
      small: { marginInlineStart: vars.content.spacing.small },
      medium: { marginInlineStart: vars.content.spacing.medium },
      large: { marginInlineStart: vars.content.spacing.large },
      none: { marginInlineStart: 0 },
    },
    marginEnd: {
      small: { marginInlineEnd: vars.content.spacing.small },
      medium: { marginInlineEnd: vars.content.spacing.medium },
      large: { marginInlineEnd: vars.content.spacing.large },
      none: { marginInlineEnd: 0 },
    },
    pad: {
      small: { padding: vars.content.spacing.small },
      medium: { padding: vars.content.spacing.medium },
      large: { padding: vars.content.spacing.large },
      none: { padding: 0 },
    },
    padHorizontal: {
      small: {
        paddingInlineStart: vars.content.spacing.small,
        paddingInlineEnd: vars.content.spacing.small,
      },
      medium: {
        paddingInlineStart: vars.content.spacing.medium,
        paddingInlineEnd: vars.content.spacing.medium,
      },
      large: {
        paddingInlineStart: vars.content.spacing.large,
        paddingInlineEnd: vars.content.spacing.large,
      },
      none: { paddingInlineStart: 0, paddingInlineEnd: 0 },
    },
    padVertical: {
      small: {
        paddingTop: vars.content.spacing.small,
        paddingBottom: vars.content.spacing.small,
      },
      medium: {
        paddingTop: vars.content.spacing.medium,
        paddingBottom: vars.content.spacing.medium,
      },
      large: {
        paddingTop: vars.content.spacing.large,
        paddingBottom: vars.content.spacing.large,
      },
      none: { paddingTop: 0, paddingBottom: 0 },
    },
    padTop: {
      small: { paddingTop: vars.content.spacing.small },
      medium: { paddingTop: vars.content.spacing.medium },
      large: { paddingTop: vars.content.spacing.large },
      none: { paddingTop: 0 },
    },
    padBottom: {
      small: { paddingBottom: vars.content.spacing.small },
      medium: { paddingBottom: vars.content.spacing.medium },
      large: { paddingBottom: vars.content.spacing.large },
      none: { paddingBottom: 0 },
    },
    padStart: {
      small: { paddingInlineStart: vars.content.spacing.small },
      medium: { paddingInlineStart: vars.content.spacing.medium },
      large: { paddingInlineStart: vars.content.spacing.large },
      none: { paddingInlineStart: 0 },
    },
    padEnd: {
      small: { paddingInlineEnd: vars.content.spacing.small },
      medium: { paddingInlineEnd: vars.content.spacing.medium },
      large: { paddingInlineEnd: vars.content.spacing.large },
      none: { paddingInlineEnd: 0 },
    },
    round: {
      small: { borderRadius: vars.content.radius.small },
      medium: { borderRadius: vars.content.radius.medium },
      large: { borderRadius: vars.content.radius.large },
      none: { padding: 0 },
    },
    width: {
      small: { width: vars.content.small },
      medium: { width: vars.content.medium },
      large: { width: vars.content.large },
      xlarge: { width: vars.content.xlarge },
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
