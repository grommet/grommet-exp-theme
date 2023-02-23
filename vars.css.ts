import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  palette: {
    grey: {
      100: '#333',
    },
  },
  color: {
    text: '#333',
    heading: '#222',
  },
  spacing: {
    small: '6px',
    medium: '12px',
    large: '24px',
  },
});
