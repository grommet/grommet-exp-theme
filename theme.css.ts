import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { structuredTokens } from "hpe-design-tokens";

export const vars = createThemeContract(structuredTokens);

export const theme = createTheme(vars, structuredTokens);
