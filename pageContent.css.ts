import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { responsiveStyle } from "./utils";
import { structuredTokens } from "hpe-design-tokens";

const responsiveContainerStyle = ({
  small,
  medium,
  large,
  xlarge,
}: {
  small?: object;
  medium?: object;
  large?: object;
  xlarge?: object;
}) => ({
  "@container": {
    [`(min-width: ${structuredTokens.content.small})`]: small || {},
    [`(min-width: ${structuredTokens.content.medium})`]: medium || {},
    [`(min-width: ${structuredTokens.content.large})`]: large || {},
    [`(min-width: ${structuredTokens.content.xlarge})`]: xlarge || {},
  },
});

const gridStyle = ({
  mobile,
  desktop,
  tablet,
}: {
  mobile?: object;
  desktop: object;
  tablet: object;
}) => [
  {
    display: "grid",
    ...mobile,
  },
  responsiveStyle({
    desktop: desktop,
    tablet: tablet,
  }),
];

export const pageContent = recipe({
  base: {
    boxSizing: "border-box",
    alignSelf: "center",
    padding: vars.pageContent.padding.mobile,
    ...responsiveStyle({
      tablet: {
        padding: vars.pageContent.padding.tablet,
      },
      desktop: {
        padding: vars.pageContent.padding.desktop,
      },
    }),
  },
  variants: {
    kind: {
      wide: {
        maxWidth: vars.page.wide.maxWidth,
        width: "100%",
      },
      narrow: {
        maxWidth: vars.page.narrow.maxWidth,
      },
      full: {
        width: "100%",
      },
    },
    layout: {
      "header-main": gridStyle({
        mobile: {
          gridTemplateAreas: `"pageHeader" "pageMain"`,
          gridTemplateColumns: `1fr`,
          gridTemplateRows: "auto auto",
          gridGap: vars.spacing.medium.desktop,
        },
        tablet: {
          gridTemplateAreas: `"pageHeader pageMain"`,
          gridTemplateColumns: `${vars.content.medium} 1fr`,
        },
        desktop: {
          gridTemplateAreas: `"pageHeader pageMain"`,
          gridTemplateColumns: `${vars.content.medium} 1fr`,
        },
      }),
      "header-main-aside": gridStyle({
        mobile: {
          gridTemplateAreas: `"pageHeader" "pageMain" "pageAside"`,
          gridTemplateColumns: `1fr`,
          gridTemplateRows: "auto auto auto",
          gridGap: vars.spacing.medium.desktop,
        },
        desktop: {
          gridTemplateAreas: `"pageHeader pageMain pageAside"`,
          // TO DO use t-shirt size, this is midpoint of small/medium
          gridTemplateColumns: `288px 1fr min(${vars.content.medium}, 100%)`,
        },
        tablet: {
          gridTemplateAreas: `"pageHeader pageMain" "pageHeader pageAside"`,
          gridTemplateColumns: `288px 1fr`,
          gridTemplateRows: "auto auto",
          width: "100%",
        },
      }),
    },
  },
});

export const actions = style({
  ...responsiveContainerStyle({
    small: {
      paddingTop: vars.spacing.medium.desktop,
    },
    large: {
      paddingTop: "0px",
    },
  }),
});
