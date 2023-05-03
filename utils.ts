import { vars } from "./theme.css";

export const responsiveStyle = ({
  desktop,
  tablet,
}: {
  desktop: object;
  tablet: object;
}) => ({
  "@media": {
    [`only screen and (min-width: 768px)`]: tablet,
    [`only screen and (min-width: 1536px)`]: desktop,
  },
});
