import { recipe } from '@vanilla-extract/recipes';
import { vars } from "./vars.css";

export const text = recipe({
  base: {
    color: vars.color.text,
  },
  variants: {
    size: {
      small: { fontSize: '0.8em' },
      medium: { fontSize: 18 },
      large: { fontSize: '1.2em' }
    },
  },
});
