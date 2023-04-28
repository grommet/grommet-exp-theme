import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const contentSizeVariants = {
  height: {
    xxsmall: { height: vars.content.xxsmall },
    xsmall: { height: vars.content.xsmall },
    small: { height: vars.content.small },
    medium: { height: vars.content.medium },
    large: { height: vars.content.large },
    xlarge: { height: vars.content.xlarge },
    full: { height: "100%" },
    none: { height: "initial" },
  },
  width: {
    xxsmall: { width: vars.content.xxsmall },
    xsmall: { width: vars.content.xsmall },
    small: { width: vars.content.small },
    medium: { width: vars.content.medium },
    large: { width: vars.content.large },
    xlarge: { width: vars.content.xlarge },
    full: { width: "100%" },
    none: { width: "initial" },
  },
};

export const gapVariants = {
  gap: {
    xxsmall: { gap: vars.spacing.xxsmall.desktop },
    xsmall: { gap: vars.spacing.xsmall.desktop },
    small: { gap: vars.spacing.small.desktop },
    medium: { gap: vars.spacing.medium.desktop },
    large: { gap: vars.spacing.large.desktop },
    xlarge: { gap: vars.spacing.xlarge.desktop },
    none: { gap: 0 },
  },
};

export const marginVariants = {
  margin: {
    xxsmall: { margin: vars.spacing.xxsmall.desktop },
    xsmall: { margin: vars.spacing.xsmall.desktop },
    small: { margin: vars.spacing.small.desktop },
    medium: { margin: vars.spacing.medium.desktop },
    large: { margin: vars.spacing.large.desktop },
    xlarge: { margin: vars.spacing.xlarge.desktop },
    none: { margin: 0 },
  },
  marginHorizontal: {
    xxsmall: {
      marginInlineStart: vars.spacing.xxsmall.desktop,
      marginInlineEnd: vars.spacing.xxsmall.desktop,
    },
    xsmall: {
      marginInlineStart: vars.spacing.xsmall.desktop,
      marginInlineEnd: vars.spacing.xsmall.desktop,
    },
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
    xlarge: {
      marginInlineStart: vars.spacing.xlarge.desktop,
      marginInlineEnd: vars.spacing.xlarge.desktop,
    },
    none: { marginInlineStart: 0, marginInlineEnd: 0 },
  },
  marginVertical: {
    xxsmall: {
      marginTop: vars.spacing.xxsmall.desktop,
      marginBottom: vars.spacing.xxsmall.desktop,
    },
    xsmall: {
      marginTop: vars.spacing.xsmall.desktop,
      marginBottom: vars.spacing.xsmall.desktop,
    },
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
    xlarge: {
      marginTop: vars.spacing.xlarge.desktop,
      marginBottom: vars.spacing.xlarge.desktop,
    },
    none: { marginTop: 0, marginBottom: 0 },
  },
  marginTop: {
    xxsmall: { marginTop: vars.spacing.xxsmall.desktop },
    xsmall: { marginTop: vars.spacing.xsmall.desktop },
    small: { marginTop: vars.spacing.small.desktop },
    medium: { marginTop: vars.spacing.medium.desktop },
    large: { marginTop: vars.spacing.large.desktop },
    xlarge: { marginTop: vars.spacing.xlarge.desktop },
    none: { marginTop: 0 },
  },
  marginBottom: {
    xxsmall: { marginBottom: vars.spacing.xxsmall.desktop },
    xsmall: { marginBottom: vars.spacing.xsmall.desktop },
    small: { marginBottom: vars.spacing.small.desktop },
    medium: { marginBottom: vars.spacing.medium.desktop },
    large: { marginBottom: vars.spacing.large.desktop },
    xlarge: { marginBottom: vars.spacing.xlarge.desktop },
    none: { marginBottom: 0 },
  },
  marginStart: {
    xxsmall: { marginInlineStart: vars.spacing.xxsmall.desktop },
    xsmall: { marginInlineStart: vars.spacing.xsmall.desktop },
    small: { marginInlineStart: vars.spacing.small.desktop },
    medium: { marginInlineStart: vars.spacing.medium.desktop },
    large: { marginInlineStart: vars.spacing.large.desktop },
    xlarge: { marginInlineStart: vars.spacing.xlarge.desktop },
    none: { marginInlineStart: 0 },
  },
  marginEnd: {
    xxsmall: { marginInlineEnd: vars.spacing.xxsmall.desktop },
    xsmall: { marginInlineEnd: vars.spacing.xsmall.desktop },
    small: { marginInlineEnd: vars.spacing.small.desktop },
    medium: { marginInlineEnd: vars.spacing.medium.desktop },
    large: { marginInlineEnd: vars.spacing.large.desktop },
    xlarge: { marginInlineEnd: vars.spacing.xlarge.desktop },
    none: { marginInlineEnd: 0 },
  },
};

export const padVariants = {
  pad: {
    xxsmall: { padding: vars.spacing.xxsmall.desktop },
    xsmall: { padding: vars.spacing.xsmall.desktop },
    small: { padding: vars.spacing.small.desktop },
    medium: { padding: vars.spacing.medium.desktop },
    large: { padding: vars.spacing.large.desktop },
    xlarge: { padding: vars.spacing.xlarge.desktop },
    none: { padding: 0 },
  },
  padHorizontal: {
    xxsmall: {
      paddingInlineStart: vars.spacing.xxsmall.desktop,
      paddingInlineEnd: vars.spacing.xxsmall.desktop,
    },
    xsmall: {
      paddingInlineStart: vars.spacing.xsmall.desktop,
      paddingInlineEnd: vars.spacing.xsmall.desktop,
    },
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
    xlarge: {
      paddingInlineStart: vars.spacing.xlarge.desktop,
      paddingInlineEnd: vars.spacing.xlarge.desktop,
    },
    none: { paddingInlineStart: 0, paddingInlineEnd: 0 },
  },
  padVertical: {
    xxsmall: {
      paddingTop: vars.spacing.xxsmall.desktop,
      paddingBottom: vars.spacing.xxsmall.desktop,
    },
    xsmall: {
      paddingTop: vars.spacing.xsmall.desktop,
      paddingBottom: vars.spacing.xsmall.desktop,
    },
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
    xlarge: {
      paddingTop: vars.spacing.xlarge.desktop,
      paddingBottom: vars.spacing.xlarge.desktop,
    },
    none: { paddingTop: 0, paddingBottom: 0 },
  },
  padTop: {
    xxsmall: { paddingTop: vars.spacing.xxsmall.desktop },
    xsmall: { paddingTop: vars.spacing.xsmall.desktop },
    small: { paddingTop: vars.spacing.small.desktop },
    medium: { paddingTop: vars.spacing.medium.desktop },
    large: { paddingTop: vars.spacing.large.desktop },
    xlarge: { paddingTop: vars.spacing.xlarge.desktop },
    none: { paddingTop: 0 },
  },
  padBottom: {
    xxsmall: { paddingBottom: vars.spacing.xxsmall.desktop },
    xsmall: { paddingBottom: vars.spacing.xsmall.desktop },
    small: { paddingBottom: vars.spacing.small.desktop },
    medium: { paddingBottom: vars.spacing.medium.desktop },
    large: { paddingBottom: vars.spacing.large.desktop },
    xlarge: { paddingBottom: vars.spacing.xlarge.desktop },
    none: { paddingBottom: 0 },
  },
  padStart: {
    xxsmall: { paddingInlineStart: vars.spacing.xxsmall.desktop },
    xsmall: { paddingInlineStart: vars.spacing.xsmall.desktop },
    small: { paddingInlineStart: vars.spacing.small.desktop },
    medium: { paddingInlineStart: vars.spacing.medium.desktop },
    large: { paddingInlineStart: vars.spacing.large.desktop },
    xlarge: { paddingInlineStart: vars.spacing.xlarge.desktop },
    none: { paddingInlineStart: 0 },
  },
  padEnd: {
    xxsmall: { paddingInlineEnd: vars.spacing.xxsmall.desktop },
    xsmall: { paddingInlineEnd: vars.spacing.xsmall.desktop },
    small: { paddingInlineEnd: vars.spacing.small.desktop },
    medium: { paddingInlineEnd: vars.spacing.medium.desktop },
    large: { paddingInlineEnd: vars.spacing.large.desktop },
    xlarge: { paddingInlineEnd: vars.spacing.xlarge.desktop },
    none: { paddingInlineEnd: 0 },
  },
};

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
      active: { backgroundColor: vars.color.background.active },
      selected: { backgroundColor: vars.color.background.selected },
    },
    border: {
      true: {
        border: `${vars.border.medium.desktop.width} solid ${vars.color.border}`,
      },
      false: { border: "none" },
      top: {
        borderTop: `${vars.border.medium.desktop.width} solid ${vars.color.border.default}`,
      },
      bottom: {
        borderBottom: `${vars.border.medium.desktop.width} solid ${vars.color.border.default}`,
      },
      left: {
        borderLeft: `${vars.border.medium.desktop.width} solid ${vars.color.border.default}`,
      },
      right: {
        borderRight: `${vars.border.medium.desktop.width} solid ${vars.color.border.default}`,
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
    ...gapVariants,
    ...contentSizeVariants,
    justify: {
      around: { justifyContent: "space-around" },
      between: { justifyContent: "space-between" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      evenly: { justifyContent: "space-evenly" },
      start: { justifyContent: "flex-start" },
    },
    ...marginVariants,
    ...padVariants,
    position: {
      absolute: { position: "absolute" },
      fixed: { position: "fixed" },
      relative: { position: "relative" },
    },
    round: {
      xsmall: { borderRadius: vars.radius.xsmall },
      small: { borderRadius: vars.radius.small },
      medium: { borderRadius: vars.radius.medium },
      large: { borderRadius: vars.radius.large },
      xlarge: { borderRadius: vars.radius.xlarge },
      full: { borderRadius: "2em" },
      none: { padding: 0 },
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
