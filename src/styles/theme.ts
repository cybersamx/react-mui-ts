import { colors, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: colors.grey['200'],
    },
    primary: {
      light: colors.indigo['900'],
      main: colors.indigo['500'],
      dark: colors.indigo['700'],
    },
    secondary: {
      dark: colors.red['A400'],
      main: colors.red['700'],
    },
    text: {
      primary: colors.grey['600'],
      secondary: colors.grey['700'],
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: '-0.24px',
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: '-0.24px',
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '-0.06px',
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: '-0.06px',
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '-0.05px',
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '-0.05px',
    },
    overline: {
      fontWeight: 500,
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
