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
      small: { gap: vars.content.spacing.small },
      medium: { gap: vars.content.spacing.medium },
      large: { gap: vars.content.spacing.large },
      none: { gap: 0 },
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
  },
});
