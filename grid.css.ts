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
      small: { gap: vars.spacing.small },
      medium: { gap: vars.spacing.medium },
      large: { gap: vars.spacing.large },
      none: { gap: 0 },
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
  },
});
