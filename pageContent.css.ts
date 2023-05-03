import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";
import { responsiveStyle } from "./utils";

const columnsStyle = () => [
  {
    display: "grid",
    maxWidth: vars.page.wide.maxWidth,
    width: "100%",
    gridTemplateColumns: `1fr`,
    gridGap: vars.spacing.large.desktop,
  },
  responsiveStyle({
    desktop: {
      gridTemplateColumns: `${vars.content.medium} 1fr minmax(${vars.content.small}, ${vars.content.medium})`,
    },
    tablet: {
      gridTemplateColumns: `1fr`,
      width: "100%",
    },
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
      wide: columnsStyle(),
      narrow: {
        maxWidth: vars.page.narrow.maxWidth,
      },
      full: {
        width: "100%",
      },
    },
  },
});
