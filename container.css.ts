import { createContainer, style } from "@vanilla-extract/css";

export const container = createContainer();

export const containerStyle = style({
  contain: "layout inline-size style",
  containerName: container,
  containerType: "inline-size",
});
