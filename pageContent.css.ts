import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

// TODO: container queries for padding
const responsiveStyle = ({
  desktop,
  tablet,
}: {
  desktop: object;
  tablet: object;
}) => ({
  "@media": {
    "only screen and (min-width: 768px)": tablet,
    "only screen and (min-width: 1536px)": desktop,
  },
});

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
    paddingLeft: vars.spacing.large.desktop,
    paddingRight: vars.spacing.large.desktop,
  },
  variants: {
    background: {
      default: vars.color.background.default,
      back: vars.color.background.back,
      front: vars.color.background.front,
      contrast: vars.color.background.contrast,
    },
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
