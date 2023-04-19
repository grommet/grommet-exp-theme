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
      default: { backgroundColor: vars.color.background.default },
      back: { backgroundColor: vars.color.background.back },
      front: { backgroundColor: vars.color.background.front },
      contrast: { backgroundColor: vars.color.background.contrast },
    },
    border: {
      true: {
        border: `${vars.border.medium.desktop.width} solid ${vars.color.border}`,
      },
      false: { border: "none" },
      top: {
        borderTop: `${vars.border.medium.desktop.width} solid ${vars.color.border}`,
      },
      bottom: {
        borderBottom: `${vars.border.medium.desktop.width} solid ${vars.color.border}`,
      },
    },
    direction: {
      column: { flexDirection: "column" },
      row: { flexDirection: "row" },
    },
    elevation: {
      small: { boxShadow: vars.elevation.small.boxShadow },
      medium: { boxShadow: vars.elevation.medium.boxShadow },
      large: { boxShadow: vars.elevation.large.boxShadow },
      none: { boxShadow: "none" },
    },
    flex: {
      true: { flex: "1 1 auto" },
      false: { flex: "0 0 auto" },
      grow: { flexGrow: "1 0 auto" },
      shrink: { flexShrink: "0 1 auto" },
    },
    gap: {
      xsmall: { gap: vars.spacing.xsmall.desktop },
      small: { gap: vars.spacing.small.desktop },
      medium: { gap: vars.spacing.medium.desktop },
      large: { gap: vars.spacing.large.desktop },
      none: { gap: 0 },
    },
    height: {
      xsmall: { height: vars.content.xsmall },
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
      small: { margin: vars.spacing.small.desktop },
      medium: { margin: vars.spacing.medium.desktop },
      large: { margin: vars.spacing.large.desktop },
      none: { margin: 0 },
    },
    marginHorizontal: {
      small: {
        marginInlineStart: vars.spacing.small.desktop,
        marginInlineEnd: vars.spacing.small.desktop,
      },
      medium: {
        marginInlineStart: vars.spacing.medium.desktop,
        marginInlineEnd: vars.spacing.medium.desktop,
      },
      large: {
        marginInlineStart: vars.spacing.large.desktop,
        marginInlineEnd: vars.spacing.large.desktop,
      },
      none: { marginInlineStart: 0, marginInlineEnd: 0 },
    },
    marginVertical: {
      small: {
        marginTop: vars.spacing.small.desktop,
        marginBottom: vars.spacing.small.desktop,
      },
      medium: {
        marginTop: vars.spacing.medium.desktop,
        marginBottom: vars.spacing.medium.desktop,
      },
      large: {
        marginTop: vars.spacing.large.desktop,
        marginBottom: vars.spacing.large.desktop,
      },
      none: { marginTop: 0, marginBottom: 0 },
    },
    marginTop: {
      small: { marginTop: vars.spacing.small.desktop },
      medium: { marginTop: vars.spacing.medium.desktop },
      large: { marginTop: vars.spacing.large.desktop },
      none: { marginTop: 0 },
    },
    marginBottom: {
      small: { marginBottom: vars.spacing.small.desktop },
      medium: { marginBottom: vars.spacing.medium.desktop },
      large: { marginBottom: vars.spacing.large.desktop },
      none: { marginBottom: 0 },
    },
    marginStart: {
      small: { marginInlineStart: vars.spacing.small.desktop },
      medium: { marginInlineStart: vars.spacing.medium.desktop },
      large: { marginInlineStart: vars.spacing.large.desktop },
      none: { marginInlineStart: 0 },
    },
    marginEnd: {
      small: { marginInlineEnd: vars.spacing.small.desktop },
      medium: { marginInlineEnd: vars.spacing.medium.desktop },
      large: { marginInlineEnd: vars.spacing.large.desktop },
      none: { marginInlineEnd: 0 },
    },
    pad: {
      small: { padding: vars.spacing.small.desktop },
      medium: { padding: vars.spacing.medium.desktop },
      large: { padding: vars.spacing.large.desktop },
      none: { padding: 0 },
    },
    padHorizontal: {
      small: {
        paddingInlineStart: vars.spacing.small.desktop,
        paddingInlineEnd: vars.spacing.small.desktop,
      },
      medium: {
        paddingInlineStart: vars.spacing.medium.desktop,
        paddingInlineEnd: vars.spacing.medium.desktop,
      },
      large: {
        paddingInlineStart: vars.spacing.large.desktop,
        paddingInlineEnd: vars.spacing.large.desktop,
      },
      none: { paddingInlineStart: 0, paddingInlineEnd: 0 },
    },
    padVertical: {
      small: {
        paddingTop: vars.spacing.small.desktop,
        paddingBottom: vars.spacing.small.desktop,
      },
      medium: {
        paddingTop: vars.spacing.medium.desktop,
        paddingBottom: vars.spacing.medium.desktop,
      },
      large: {
        paddingTop: vars.spacing.large.desktop,
        paddingBottom: vars.spacing.large.desktop,
      },
      none: { paddingTop: 0, paddingBottom: 0 },
    },
    padTop: {
      small: { paddingTop: vars.spacing.small.desktop },
      medium: { paddingTop: vars.spacing.medium.desktop },
      large: { paddingTop: vars.spacing.large.desktop },
      none: { paddingTop: 0 },
    },
    padBottom: {
      small: { paddingBottom: vars.spacing.small.desktop },
      medium: { paddingBottom: vars.spacing.medium.desktop },
      large: { paddingBottom: vars.spacing.large.desktop },
      none: { paddingBottom: 0 },
    },
    padStart: {
      small: { paddingInlineStart: vars.spacing.small.desktop },
      medium: { paddingInlineStart: vars.spacing.medium.desktop },
      large: { paddingInlineStart: vars.spacing.large.desktop },
      none: { paddingInlineStart: 0 },
    },
    padEnd: {
      small: { paddingInlineEnd: vars.spacing.small.desktop },
      medium: { paddingInlineEnd: vars.spacing.medium.desktop },
      large: { paddingInlineEnd: vars.spacing.large.desktop },
      none: { paddingInlineEnd: 0 },
    },
    round: {
      small: { borderRadius: vars.radius.small },
      medium: { borderRadius: vars.radius.medium },
      large: { borderRadius: vars.radius.large },
      none: { padding: 0 },
    },
    width: {
      xsmall: { width: vars.content.xsmall },
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
