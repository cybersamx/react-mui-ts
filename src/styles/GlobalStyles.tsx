import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    '@global': {
      '*': {
        margin: 0,
        padding: 0,
      },
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },
    body: {
      'font-family': theme.typography.fontFamily,
      height: '100%',
      width: '100%',
    },
    a: {
      textDecoration: 'none',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  });
});

const GlobalStyles = () => {
  // Inject global styles for all material components.
  useStyles();

  return null;
};

export default GlobalStyles;
