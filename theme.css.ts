import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { tokens } from "grommet-exp-tokens";

const commonVars = {
  spacing: {
    small: `6px`,
    medium: `12px`,
    large: `24px`,
  },
};

export const vars = createThemeContract({
  color: {
    text: ``,
    heading: ``,
    brand: ``,
  },
  ...commonVars,
});

export const lightThemeClass = createTheme(vars, {
  color: {
    text: `#333`,
    heading: `#222`,
    brand: `${tokens[`color.brand`]}`,
  },
  ...commonVars,
});
