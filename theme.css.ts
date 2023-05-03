import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { structuredTokens /* structuredTokensDark */ } from "hpe-design-tokens";

export const vars = createThemeContract(structuredTokens);

export const theme = createTheme(vars, structuredTokens);

// export const darkTheme = createTheme(vars, structuredTokensDark);
