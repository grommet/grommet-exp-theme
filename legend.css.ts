import { style, createContainer } from "@vanilla-extract/css";
import { structuredTokens } from "hpe-design-tokens";
import { vars } from "./theme.css";

const container = createContainer();

export const legendContainer = style({
  containerType: 'inline-size',
  containerName: container,
});

export const legend = style({
  flexDirection: 'column',
  gap: vars.spacing.xsmall.desktop,
  '@container': {
    [`${container} (min-width: ${structuredTokens.content.medium})`]: {
      flexDirection: 'row',
      gap: vars.spacing.medium.desktop,
    }
  }
});

export const legendSwatch = style({
  width: `1rem`,
  height: `1rem`,
})
