import { createContainer, style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

const pageHeaderContainer = createContainer();

const responsiveContainerStyle = ({ large }: { large: object }) => ({
  "@container": {
    [`${pageHeaderContainer} (min-width: 768px)`]: large,
  },
});

export const pageHeaderContainerStyle = style({
  contain: "layout inline-size style",
  containerName: pageHeaderContainer,
  containerType: "inline-size",
});

export const pageHeader = style({
  display: "grid",
  boxSizing: "border-box",
  gridTemplateAreas: `"parent" "title" "subtitle" "actions"`,
  gridTemplateColumns: `1fr`,
  gridTemplateRows: `auto auto auto auto`,
  gap: `${vars.spacing.xsmall.desktop} ${vars.spacing.medium.desktop}`,
  ...responsiveContainerStyle({
    large: {
      gridTemplateAreas: `"parent parent" "title actions" "subtitle actions"`,
      gridTemplateColumns: `minmax(${vars.content.medium}, flex) auto`,
      gridTemplateRows: `auto auto auto`,
    },
  }),
});

export const pageHeaderWrapper = style({
  gridTemplateColumns: `"auto" "flex"`,
  gridTemplateRows: "auto",
  gap: `${vars.spacing.xsmall.desktop} ${vars.spacing.medium.desktop}`,
  "@container": {
    [`${pageHeaderContainer} (min-width: 768px)`]: {
      gridTemplateColumns: `1fr`,
      gridTemplateRows: `"auto" "auto"`,
    },
  },
});
