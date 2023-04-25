import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { contentSizeVariants, gapVariants, padVariants, marginVariants } from "./box.css";

export const grid = recipe({
  base: {
    display: "grid",
    boxSizing: "border-box",
  },
  variants: {
    columns: {
      // repeated columns
      xxsmall: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.xxsmall}, 100%), 1fr))`,
      },
      xsmall: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.xsmall}, 100%), 1fr))`,
      },
      small: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.small}, 100%), 1fr))`,
      },
      medium: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.medium}, 100%), 1fr))`,
      },
      large: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.large}, 100%), 1fr))`,
      },
      xlarge: {
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.xlarge}, 100%), 1fr))`,
      },
      none: { gridAutoColumns: "auto" },
      // two columns
      "small-small": {
        gridTemplateColumns: `${vars.content.small} ${vars.content.small}`,
      },
      "small-medium": {
        gridTemplateColumns: `${vars.content.small} ${vars.content.medium}`,
      },
      "small-flex": {
        gridTemplateColumns: `${vars.content.small} 1fr`,
      },
      "flex-small": {
        gridTemplateColumns: `1fr ${vars.content.small}`,
      },
      "medium-small": {
        gridTemplateColumns: `${vars.content.medium} ${vars.content.small}`,
      },
      "medium-medium": {
        gridTemplateColumns: `${vars.content.medium} ${vars.content.medium}`,
      },
      "medium-flex": {
        gridTemplateColumns: `${vars.content.medium} 1fr`,
      },
      "flex-medium": {
        gridTemplateColumns: `1fr ${vars.content.medium}`,
      },
      // three column
      "small-flex-small": {
        gridTemplateColumns: `${vars.content.small} 1fr ${vars.content.small}`,
      },
      "medium-flex-medium": {
        gridTemplateColumns: `${vars.content.medium} 1fr ${vars.content.medium}`,
      },
    },
    ...gapVariants,
    gapColumn: {
      xxsmall: { columnGap: vars.spacing.xxsmall.desktop },
      xsmall: { columnGap: vars.spacing.xsmall.desktop },
      small: { columnGap: vars.spacing.small.desktop },
      medium: { columnGap: vars.spacing.medium.desktop },
      large: { columnGap: vars.spacing.large.desktop },
      xlarge: { columnGap: vars.spacing.xlarge.desktop },
      none: { columnGap: 0 },
    },
    gapRow: {
      xxsmall: { rowGap: vars.spacing.xxsmall.desktop },
      xsmall: { rowGap: vars.spacing.xsmall.desktop },
      small: { rowGap: vars.spacing.small.desktop },
      medium: { rowGap: vars.spacing.medium.desktop },
      large: { rowGap: vars.spacing.large.desktop },
      xlarge: { rowGap: vars.spacing.xlarge.desktop },
      none: { rowGap: 0 },
    },
    ...contentSizeVariants,
    ...marginVariants,
    ...padVariants,
  },
});
