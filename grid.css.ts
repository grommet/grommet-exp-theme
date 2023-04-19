import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const grid = recipe({
  base: {
    display: "grid",
    boxSizing: "border-box",
  },
  variants: {
    columns: {
      small: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.small}, 100%), 1fr))`,
      },
      medium: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.medium}, 100%), 1fr))`,
      },
      large: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.large}, 100%), 1fr))`,
      },
      none: { gridAutoColumns: "auto" },
    },
    gap: {
      small: { gap: vars.spacing.small.desktop },
      medium: { gap: vars.spacing.medium.desktop },
      large: { gap: vars.spacing.large.desktop },
      none: { gap: 0 },
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
  },
});
