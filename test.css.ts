import { createTheme, createThemeContract, style } from "@vanilla-extract/css";

const desc = {
  color: {
    text: {
      strong: {
        light: "#000",
      },
    },
  },
};

const vars = createThemeContract(desc);

const theme = createTheme(vars, desc);

export const text = style({
  color: vars.color.text.strong.light,
});
