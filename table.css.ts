import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const table = style({
  borderSpacing: 0,
  borderCollapse: "collapse",
  width: "inherit",
});

const baseCell = style({
  margin: 0,
  paddingTop: vars.dataTable.cell.paddingTop,
  paddingBottom: vars.dataTable.cell.paddingBottom,
  paddingLeft: vars.dataTable.cell.paddingLeft,
  paddingRight: vars.dataTable.cell.paddingRight,
  textAlign: "start",
});

export const th = style([
  baseCell,
  {
    color: vars.dataTable.header.cell.color,
    fontWeight: vars.dataTable.header.cell.fontWeight,
  },
]);

export const td = style([
  baseCell,
  {
    borderBottom: `${vars.dataTable.body.cell.borderWidth} solid ${vars.dataTable.body.cell.borderColor}`,
  },
]);
